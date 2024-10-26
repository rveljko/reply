import TransactionDetailsCard from '../../components/transaction-details-card/transaction-details-card'
import RecentTransactionsSection from '../../sections/recent-transactions-section/recent-transactions-section'
import { tableTransactionHeaders, transactions } from '../../data/transactions'
import { useState } from 'react'
import { Transaction } from '../../utils/types'
import styles from './recent-transactions-page.module.css'

export default function RecentTransactionsPage() {
  const [transaction, setTransaction] = useState<Transaction | null>(null)
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <div className={styles.layout}>
        <RecentTransactionsSection
          transactions={transactions}
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
    </>
  )
}
