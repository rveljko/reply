import Button from '../../components/button/button'
import Container from '../../components/container/container'
import DemoDashboard from '../../components/demo-dashboard/demo-dashboard'
import ChevronRightIcon from '../../icons/chevron-right-icon'
import { DASHBOARD_ROUTE } from '../../utils/constants'
import styles from './hero-section.module.css'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.text}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
          >
            Transform Your Financial Life with Reply's Comprehensive Money
            Management Solution
          </motion.h1>
          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ delay: 0.1 }}
          >
            Empower yourself with intuitive tools to track, manage, and optimize
            your finances for a secure future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ delay: 0.2 }}
          >
            <Button
              href={DASHBOARD_ROUTE}
              variant="primary"
              size="large"
              rightIcon={<ChevronRightIcon />}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </Container>
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: 0.3 }}
        className={styles.dashboardWrapper}
      >
        <Container>
          <DemoDashboard />
        </Container>
      </motion.div>
    </section>
  )
}
