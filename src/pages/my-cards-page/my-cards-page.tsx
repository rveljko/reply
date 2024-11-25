import BalanceExpensesSection from '../../sections/balance-expenses-section/balance-expenses-section'
import styles from './my-cards-page.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import { CreditCard } from '../../utils/types'

export default function MyCardsPage() {
  const { getCreditCardBalance, getCreditCardExpenses, getCreditCardById } =
    useCreditCards()

  const creditCard = getCreditCardById(1)

  return (
    <div>
      <div>
        <div className={styles.tertiaryLayout}>
          <BalanceExpensesSection
            title="Balance"
            amount={getCreditCardBalance(creditCard as CreditCard)}
          />
          <BalanceExpensesSection
            title="Expenses"
            amount={getCreditCardExpenses(creditCard as CreditCard)}
          />
        </div>
      </div>
    </div>
  )
}
