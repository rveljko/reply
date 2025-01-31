import EfficientTransactionManagementSection from '../../sections/efficient-transaction-management-section/efficient-transaction-management-section'
import EnhancedUserExperienceSection from '../../sections/enhanced-user-experience-section/enhanced-user-experience-section'
import FinancialControlSection from '../../sections/financial-control-section/financial-control-section'
import FinancialManagementSolutions from '../../sections/financial-management-solutions/financial-management-solutions'
import HeroSection from '../../sections/hero-section/hero-section'
import ProactiveFinancialTrackingSection from '../../sections/proactive-financial-tracking-section/proactive-financial-tracking-section'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FinancialManagementSolutions />
      <EnhancedUserExperienceSection />
      <FinancialControlSection />
      <EfficientTransactionManagementSection />
      <ProactiveFinancialTrackingSection />
    </>
  )
}
