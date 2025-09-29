import React, { useState, useMemo } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import useTheme from '../../../../hooks/useTheme';
import typography from '../../../../theme/typography';

// components in this feature
import MasterPlanHero from '../../../../components/plans/MasterPlanHero';
import PlanOptionCard from '../../../../components/plans/PlanOptionCard';
import PerkItem from '../../../../components/plans/PerkItem';
import AutoRenewRow from '../../../../components/plans/AutoRenewRow';
import PrimaryButton from '../../../../components/common/PrimaryButton'; // use your existing primary button
import RestorePurchaseButton from '../../../../components/plans/RestorePurchaseButton';

const PlansScreen = ({ navigation }) => {
  const theme = useTheme();
  const [selectedPlan, setSelectedPlan] = useState('yearly'); // 'yearly' | 'monthly'

  const yearlyPerks = useMemo(() => ([
    { iconKey: 'priority',  title: 'Priority Rides',      subtitle: 'Always Get Faster Driver Matches' },
    { iconKey: 'fees',      title: 'Lower Service Fees',  subtitle: 'Save More On Every Trip' },
    { iconKey: 'discounts', title: 'Exclusive Discounts', subtitle: 'Special Offers On Long Rides/Peak Hour' },
    { iconKey: 'vouchers',  title: 'Free Rider Vouchers', subtitle: 'Bonus Vouchers Included Every Quarter' },
  ]), []);

  const monthlyPerks = useMemo(() => ([
    { iconKey: 'priority',  title: 'Priority Matching',   subtitle: 'Faster Rider Confirmation In Busy Hour' },
    { iconKey: 'fees',      title: 'Reduced Service Fees',subtitle: 'Save A Little On Every Trip' },
    { iconKey: 'discounts', title: 'Monthly Discounts',   subtitle: 'Special Deals For Regular Riders' },
  ]), []);

  const perks = selectedPlan === 'yearly' ? yearlyPerks : monthlyPerks;
  const autoRenewText =
    selectedPlan === 'yearly'
      ? 'Auto-renews Yearly for $90.99'
      : 'Auto-renews Monthly for $19.99';

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title="Subscription" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        <MasterPlanHero
          title="Master Plan"
          description="Simplify your workflow with faster logging tools and customizable settings—try it free for 7 days."
        />

        {/* YEARLY CARD */}
        <PlanOptionCard
          title="Yearly Plan"
          description="Go Premium Yearly—unlock unlimited features, exclusive tools, and priority perks."
          billedNote="$90.00 billed annually"
          priceMain="7.60"
          priceUnit="/ Month"
          badgeText="Save 67%"
          selected={selectedPlan === 'yearly'}
          onPress={() => setSelectedPlan('yearly')}
        />

        {/* MONTHLY CARD */}
        <PlanOptionCard
          title="Monthly Plan"
          description="Go Premium Monthly—unlock unlimited features, exclusive tools, and priority perks."
          billedNote="Billed monthly"
          priceMain="19.99"
          priceUnit="/ Month"
          selected={selectedPlan === 'monthly'}
          onPress={() => setSelectedPlan('monthly')}
        />

        {/* PERKS (driven by selectedPlan) */}
        {/* PERKS (driven by selectedPlan) */}
<View style={{ marginTop: 16, marginBottom: 8 }}>
  {/* ADD THIS HEADING TEXT HERE */}
  <TextAuto style={[styles.perksHeading, { color: theme.text }]}>
    {selectedPlan === 'yearly' ? 'Yearly Plan Helps You:' : 'Monthly Plan Helps You:'}
  </TextAuto>
  
  {perks.map(p => (
    <PerkItem
      key={p.title}
      iconKey={p.iconKey}
      title={p.title}
      subtitle={p.subtitle}
    />
  ))}
</View>

        {/* AUTO-RENEW (driven by selectedPlan) */}
        <AutoRenewRow text={autoRenewText} />

        <PrimaryButton title="Subscribe" onPress={() => { /* start purchase */ }} style={{ marginTop: 12 }} />
        <RestorePurchaseButton onPress={() => { /* restore flow */ }} />

        <View style={styles.footnoteWrap}>
          <TextAuto style={[styles.footnote, { color: theme.textSecondary }]}>
            Billing starts at the end of your 7-day free trial unless you cancel. Plans renew automatically.
            Cancel via the App Store / Play Store.
          </TextAuto>
        </View>

      </ScrollView>
    </View>
  );
};
// small helper to avoid importing Text everywhere with same font
import { Text } from 'react-native';
const TextAuto = ({ style, children, ...rest }) => {
  return <Text style={[{ fontFamily: typography.fontRegular }, style]} {...rest}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 20 },
  footnoteWrap: { marginTop: 14, marginBottom: 24 },
  footnote: { fontSize: 12, lineHeight: 18, textAlign: 'center' },
  perksHeading: { 
    fontSize: 18, 
    fontFamily: typography.fontSemiBold, 
    marginBottom: 12, 
    marginTop: -20   ,
  },
});

export default PlansScreen;
