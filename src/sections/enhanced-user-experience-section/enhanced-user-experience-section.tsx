import AddNewCreditCardCard from '../../components/add-new-credit-card-card/add-new-credit-card-card'
import FiltersCard from '../../components/filters-card/filters-card'
import KeyboardShortcutsCard from '../../components/keyboard-shortcuts-card/keyboard-shortcuts-card'
import LineChartCard from '../../components/line-chart-card/line-chart-card'
import LandingPageSection from '../landing-page-section/landing-page-section'
import styles from './enhanced-user-experience-section.module.css'
import { motion } from 'motion/react'

const animationVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-2rem)',
  },
  whileInView: { opacity: 1, transform: 'translateY(0)' },
}

export default function EnhancedUserExperienceSection() {
  return (
    <LandingPageSection
      heading="Superior User Experience Contributing to Advanced Customer Interaction"
      paragraph="Indulge in the ease and fluidity of navigating our system, while accessing potent and versatile operational tools and functions"
    >
      <div className={styles.bento}>
        <ul className={styles.row}>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className={styles.wide}
          >
            <KeyboardShortcutsCard />
          </motion.li>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 1 }}
            className={styles.narrow}
          >
            <AddNewCreditCardCard />
          </motion.li>
        </ul>
        <ul className={styles.row}>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 2 }}
            className={styles.narrow}
          >
            <LineChartCard />
          </motion.li>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 3 }}
            className={styles.wide}
          >
            <FiltersCard />
          </motion.li>
        </ul>
      </div>
    </LandingPageSection>
  )
}
