import currencyFormatter from '../../utils/helpers/currency-formatter'
import Section from '../section/section'
import styles from './balance-expenses-section.module.css'

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
          <h2 className={styles.amount}>{currencyFormatter(amount)}</h2>
        </div>
      </div>
    </Section>
  )
}
