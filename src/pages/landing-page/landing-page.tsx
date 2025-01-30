import EnhancedUserExperienceSection from '../../sections/enhanced-user-experience-section/enhanced-user-experience-section'
import FinancialControlSection from '../../sections/financial-control-section/financial-control-section'
import FinancialManagementSolutions from '../../sections/financial-management-solutions/financial-management-solutions'
import HeroSection from '../../sections/hero-section/hero-section'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FinancialManagementSolutions />
      <EnhancedUserExperienceSection />
      <FinancialControlSection />
    </>
  )
}
