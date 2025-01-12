import Section from '../section/section'
import styles from './balance-expenses-section.module.css'
import CurrencyAnimation from '../../components/currency-animation/currency-animation'

type BalanceExpensesSectionProps = {
  title: 'Balance' | 'Expenses'
  amount: number
}

export default function BalanceExpensesSection({
  title,
  amount,
}: BalanceExpensesSectionProps) {
  return (
    <Section>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <div>
          <h2 className={styles.amount}>
            <CurrencyAnimation end={amount} />
          </h2>
        </div>
      </div>
    </Section>
  )
}
