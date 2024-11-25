import BalanceExpensesSection from '../../sections/balance-expenses-section/balance-expenses-section'
import styles from './my-cards-page.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import { CreditCard } from '../../utils/types'
import RecentTransactionsSection from '../../sections/recent-transactions-section/recent-transactions-section'
import { tableTransactionHeaders } from '../../data/transactions'
import { useTransactions } from '../../utils/contexts/transactions-context'

export default function MyCardsPage() {
  const { getCreditCardBalance, getCreditCardExpenses, getCreditCardById } =
    useCreditCards()

  const { transactions } = useTransactions()
  const creditCard = getCreditCardById(1)

  return (
    <div className={`${styles.layout} ${styles.vertical}`}>
      <div className={`${styles.layout} ${styles.horizontal}`}>
        <div className={`${styles.layout} ${styles.vertical}`}>
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
      <div className={`${styles.layout} ${styles.horizontal}`}>
        <RecentTransactionsSection
          tableTransactionHeaders={tableTransactionHeaders}
          transactions={transactions.slice(0, 5)}
          isLinkable
        />
      </div>
    </div>
  )
}
