import FeatureCell from '../../components/feature-cell/feature-cell'
import { financialFeatures } from '../../data/features'
import LandingPageSection from '../landing-page-section/landing-page-section'
import styles from './financial-management-solutions.module.css'
import { motion } from 'motion/react'

export default function FinancialManagementSolutions() {
  return (
    <LandingPageSection
      heading="Streamlining Your Financial Management Process Effortlessly"
      paragraph="Simplify the management of your finances and effortlessly gain valuable insights to make informed decisions with ease"
    >
      <ul className={styles.content}>
        {financialFeatures.map(({ id, icon: Icon, title, description }) => (
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
        ))}
      </ul>
    </LandingPageSection>
  )
}
