import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

/**
 * Props:
 * - data: number[]           e.g., [170,190,210,260,220,240,260,240,255,240,265,280,260,275,295,320,350,380]
 * - periodLabel: string      e.g., "7 Days", "Last 24 Hrs", "1 Month"
 * - onPressPeriod: () => void (optional)
 * - height?: number
 */
const EarningsTrend = ({
  data = [],
  periodLabel = '7 Days',
  onPressPeriod,
  height = 220,
}) => {
  const theme = useTheme();

  // Generate labels based on period
  const getLabelsForPeriod = (period) => {
    switch (period) {
      case '7 Days':
        return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
      case 'Last 24 Hrs':
        return ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22'];
      case '1 Month':
        return ['1', '5', '10', '15', '20', '25', '30'];
      default:
        return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    }
  };

  const labels = getLabelsForPeriod(periodLabel);

  const { pathD, areaD, maxY, ticks } = useMemo(() => {
    if (!data.length) return { pathD: '', areaD: '', maxY: 0, ticks: [0, 0, 0] };

    const PADDING = 16;
    const LEFT_PADDING = 40; // Slightly less space for Y-labels
    const W = Math.max(320, labels.length ? labels.length * 48 : 320); // roomy width for spacing
    const H = height;

    // scale
    const maxVal = Math.max(...data);
    const niceMax = Math.ceil(maxVal / 50) * 50 + 50; // round up to nicer tick
    const xStep = (W - LEFT_PADDING - PADDING) / (data.length - 1 || 1);
    const yScale = (v) => {
      // invert (SVG y grows downward)
      const usable = H - PADDING * 2;
      return H - PADDING - (v / niceMax) * usable;
    };

    // path (smoothed)
    const to = (i) => [LEFT_PADDING + i * xStep, yScale(data[i])];

    const curve = (p0, p1, p2, t = 0.2) => {
      // simple cardinal spline handle estimation
      const [x0, y0] = p0;
      const [x1, y1] = p1;
      const [x2, y2] = p2;
      const dx1 = x1 - x0, dy1 = y1 - y0;
      const dx2 = x2 - x1, dy2 = y2 - y1;
      const c1x = x1 - dx1 * t;
      const c1y = y1 - dy1 * t;
      const c2x = x1 + dx2 * t;
      const c2y = y1 + dy2 * t;
      return `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;
    };

    let d = '';
    let a = '';

    if (data.length === 1) {
      const [mx, my] = to(0);
      d = `M ${mx} ${my}`;
      a = `M ${mx} ${H - PADDING} L ${mx} ${my} L ${mx} ${H - PADDING} Z`;
    } else {
      const pStart = to(0);
      d = `M ${pStart[0]} ${pStart[1]}`;

      for (let i = 1; i < data.length; i++) {
        const pPrev = to(Math.max(0, i - 1));
        const pCurr = to(i);
        const pNext = to(Math.min(data.length - 1, i + 1));
        d += ' ' + curve(pPrev, pCurr, pNext);
      }

      // area under the line
      const last = to(data.length - 1);
      const first = to(0);
      a = `${d} L ${last[0]} ${H - PADDING} L ${first[0]} ${H - PADDING} Z`;
    }

    const tks = [0, niceMax / 2, niceMax];

    return { pathD: d, areaD: a, maxY: niceMax, ticks: tks };
  }, [data, labels, height]);

  // vertical grid count ~ labels length; fall back to 7
  const vGrid = Math.max(2, labels.length || 7);

  return (
    <View style={[styles.card, { backgroundColor: theme.card_theme }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>Earnings Trend</Text>
        <TouchableOpacity
          onPress={() => {
            // Simple dropdown logic - cycle through options
            const periods = ['7 Days', 'Last 24 Hrs', '1 Month'];
            const currentIndex = periods.indexOf(periodLabel);
            const nextIndex = (currentIndex + 1) % periods.length;
            if (onPressPeriod) {
              onPressPeriod(periods[nextIndex]);
            }
          }}
          activeOpacity={0.8}
          style={[styles.periodBtn, { borderColor: theme.border ?? 'rgba(0,0,0,0.08)' }]}
        >
          <Text style={[styles.periodText, { color: theme.text }]}>{periodLabel}</Text>
          <Text style={[styles.caret, { color: theme.textSecondary }]}>▾</Text>
        </TouchableOpacity>
      </View>

      {/* Chart */}
      <View style={{ height, marginTop: 6 }}>
        <Svg width="100%" height="100%" viewBox={`0 0 ${Math.max(320, (labels.length||7) * 48)} ${height}`}>
          {/* bg gradient fade */}
          <Defs>
            <LinearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={theme.primary} stopOpacity="0.25" />
              <Stop offset="1" stopColor={theme.primary} stopOpacity="0.02" />
            </LinearGradient>
            <LinearGradient id="grid" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#000" stopOpacity="0.06" />
              <Stop offset="1" stopColor="#000" stopOpacity="0.02" />
            </LinearGradient>
          </Defs>

          {/* horizontal grid lines (Y-axis) */}
          {ticks.map((tick, i) => {
            const y = height - 16 - ((tick / (Math.max(...ticks) || 1)) * (height - 32));
            return (
              <Rect
                key={`h-${i}`}
                x="40"
                y={y}
                width={`${Math.max(320, (labels.length||7) * 48) - 56}`}
                height="1"
                fill="#E5E7EB"
                opacity="0.5"
              />
            );
          })}

          {/* vertical grid lines (X-axis) */}
          {labels.map((_, i) => {
            if (i === 0) return null; // Skip first line
            const x = 40 + (i * (Math.max(320, labels.length * 48) - 56)) / (labels.length - 1);
            return (
              <Rect
                key={`v-${i}`}
                x={x}
                y="16"
                width="1"
                height={height - 32}
                fill="#E5E7EB"
                opacity="0.3"
              />
            );
          })}

          {/* area fill */}
          {areaD ? <Path d={areaD} fill="url(#fill)" stroke="none" /> : null}

          {/* line */}
          {pathD ? (
            <Path
              d={pathD}
              stroke={theme.primary}
              strokeWidth={5}
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ) : null}
        </Svg>

        {/* y-axis ticks (left side, overlay) */}
        <View style={styles.yTicks}>
          {ticks.slice().reverse().map((t, i) => (
            <Text key={i} style={styles.yTickText}>{t}</Text>
          ))}
        </View>

        {/* x labels (bottom) */}
        {!!labels.length && (
          <View style={[styles.xLabels]}>
            {labels.map((lbl, i) => (
              <Text key={i} style={styles.xLabelText}>{lbl}</Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    padding: 16,
    marginTop: 4,
        marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 20, lineHeight: 26, fontFamily: typography.fontBold },
  periodBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
  },
  periodText: { fontSize: 12, fontFamily: typography.fontRegular },
  caret: { fontSize: 12, marginTop: 2 },
  yTicks: {
    position: 'absolute',
    left: 5,
    top: 36,
    bottom: 16,
    justifyContent: 'space-between',
    paddingLeft: 0,
    width: 35,
  },
  yTickText: { fontSize: 12, color: '#98A2B3', fontFamily: typography.fontRegular },
  xLabels: {
    position: 'absolute',
    left: 40,
    right: 16,
    bottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  xLabelText: { fontSize: 12, color: '#98A2B3', fontFamily: typography.fontRegular },
});

export default EarningsTrend;
