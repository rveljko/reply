import { motion } from 'motion/react'
import FeatureCell from '../../components/feature-cell/feature-cell'
import LandingPageSection from '../landing-page-section/landing-page-section'
import { financialControlFeatures } from '../../data/features'
import styles from './financial-control-section.module.css'

export default function FinancialControlSection() {
  return (
    <LandingPageSection
      heading="Comprehensive Fraud Protection and Valuable Spending Insights"
      paragraph="Safeguard your finances with robust security measures that protect against fraud while gaining insights into your spending trends"
    >
      <ul className={styles.content}>
        {financialControlFeatures.map(
          ({ id, icon: Icon, title, description }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * id }}
            >
              <FeatureCell
                icon={<Icon />}
                title={title}
                description={description}
              />
            </motion.li>
          )
        )}
      </ul>
    </LandingPageSection>
  )
}
