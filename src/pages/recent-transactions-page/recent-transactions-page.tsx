import TransactionDetailsCard from '../../components/transaction-details-card/transaction-details-card'
import RecentTransactionsSection from '../../sections/recent-transactions-section/recent-transactions-section'
import { tableTransactionHeaders } from '../../data/transactions'
import { useState } from 'react'
import { Transaction } from '../../utils/types'
import styles from './recent-transactions-page.module.css'
import FiltersSection from '../../sections/filters-section/filters-section'
import { useTransactions } from '../../utils/contexts/transactions-context'

export default function RecentTransactionsPage() {
  const [transaction, setTransaction] = useState<Transaction | null>(null)
  const [isOpened, setIsOpened] = useState(false)
  const { transactions } = useTransactions()
  const [filteredTransactions, setFilteredTransactions] = useState(transactions)

  return (
    <div className={styles.layoutPrimary}>
      <FiltersSection setFilteredTransactions={setFilteredTransactions} />
      <div className={styles.layoutSecondary}>
        <RecentTransactionsSection
          transactions={filteredTransactions}
          tableTransactionHeaders={tableTransactionHeaders}
          setTransaction={setTransaction}
          setIsOpened={setIsOpened}
        />
        {isOpened && (
          <TransactionDetailsCard
            setIsOpened={setIsOpened}
            transaction={transaction}
          />
        )}
      </div>
    </div>
  )
}
