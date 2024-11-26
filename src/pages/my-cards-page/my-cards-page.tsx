import BalanceExpensesSection from '../../sections/balance-expenses-section/balance-expenses-section'
import styles from './my-cards-page.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import { CreditCard } from '../../utils/types'
import RecentTransactionsSection from '../../sections/recent-transactions-section/recent-transactions-section'
import { tableTransactionHeaders } from '../../data/transactions'
import { useTransactions } from '../../utils/contexts/transactions-context'
import MyCardsSection from '../../sections/my-cards-section/my-cards-section'

export default function MyCardsPage() {
  const { getCreditCardBalance, getCreditCardExpenses, getCreditCardById } =
    useCreditCards()

  const { transactions } = useTransactions()
  const creditCard = getCreditCardById(1)!

  return (
    <div className={styles.primaryLayout}>
      <div className={styles.secondaryLayout}>
        <div className={styles.wideChild}>
          <MyCardsSection creditCard={creditCard} />
        </div>
        <div className={`${styles.tertiaryLayout} ${styles.narrowChild}`}>
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
      <div className={styles.secondaryLayout}>
        <RecentTransactionsSection
          tableTransactionHeaders={tableTransactionHeaders}
          transactions={transactions.slice(0, 5)}
          isLinkable
        />
      </div>
    </div>
  )
}
