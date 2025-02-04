import EfficientTransactionManagementSection from '../../../sections/landing-page-sections/efficient-transaction-management-section/efficient-transaction-management-section'
import EnhancedUserExperienceSection from '../../../sections/landing-page-sections/enhanced-user-experience-section/enhanced-user-experience-section'
import FinancialControlSection from '../../../sections/landing-page-sections/financial-control-section/financial-control-section'
import FinancialManagementSolutions from '../../../sections/landing-page-sections/financial-management-solutions/financial-management-solutions'
import HeroSection from '../../../sections/landing-page-sections/hero-section/hero-section'
import PersonalizedUserExperienceSection from '../../../sections/landing-page-sections/personalized-user-experience-section/personalized-user-experience-section'
import ProactiveFinancialTrackingSection from '../../../sections/landing-page-sections/proactive-financial-tracking-section/proactive-financial-tracking-section'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FinancialManagementSolutions />
      <EnhancedUserExperienceSection />
      <FinancialControlSection />
      <EfficientTransactionManagementSection />
      <ProactiveFinancialTrackingSection />
      <PersonalizedUserExperienceSection />
    </>
  )
}
