import Chart from '../../components/chart/chart'
import { CreditCard } from '../../utils/types'
import Section from '../section/section'
import styles from './balance-overtime-section.module.css'

type BalanceOvertimeSectionProps = {
  creditCard: CreditCard
}

export default function BalanceOvertimeSection({
  creditCard,
}: BalanceOvertimeSectionProps) {
  return (
    <Section>
      <div className={styles.body}>
        <h2>Balance overtime</h2>
        <Chart data={creditCard.balance.slice(0, 5).reverse()} height="small" />
      </div>
    </Section>
  )
}
