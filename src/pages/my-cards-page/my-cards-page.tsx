import BalanceExpensesSection from '../../sections/balance-expenses-section/balance-expenses-section'
import styles from './my-cards-page.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import RecentTransactionsSection from '../../sections/recent-transactions-section/recent-transactions-section'
import { tableTransactionHeaders } from '../../data/transactions'
import MyCardsSection from '../../sections/my-cards-section/my-cards-section'
import { useState } from 'react'
import useTransactionFilters from '../../hooks/use-transaction-filters'
import BalanceOvertimeSection from '../../sections/balance-overtime-section/balance-overtime-section'

export default function MyCardsPage() {
  const {
    creditCards,
    getCreditCardBalance,
    getCreditCardExpenses,
    getCreditCardByIndex,
  } = useCreditCards()
  const { getTransactionsByCreditCardId } = useTransactionFilters()
  const initialCreditCardIndex = Math.floor((creditCards.length - 1) / 2)
  const [creditCardIndex, setCreditCardIndex] = useState(initialCreditCardIndex)
  const creditCard = getCreditCardByIndex(creditCardIndex)

  return (
    <div className={styles.primaryLayout}>
      <div className={styles.secondaryLayout}>
        <div className={styles.wideChild}>
          <MyCardsSection
            creditCardIndex={creditCardIndex}
            setCreditCardIndex={setCreditCardIndex}
            creditCard={creditCard}
          />
        </div>
        <div className={`${styles.tertiaryLayout} ${styles.narrowChild}`}>
          <BalanceExpensesSection
            title="Balance"
            amount={getCreditCardBalance(creditCard)}
          />
          <BalanceExpensesSection
            title="Expenses"
            amount={getCreditCardExpenses(creditCard)}
          />
        </div>
      </div>
      <RecentTransactionsSection
        tableTransactionHeaders={tableTransactionHeaders}
        transactions={getTransactionsByCreditCardId(creditCard.id).slice(0, 5)}
        isLinkable
      />
      <BalanceOvertimeSection creditCard={creditCard} />
    </div>
  )
}
