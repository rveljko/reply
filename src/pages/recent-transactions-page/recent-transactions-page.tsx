import TransactionDetailsCard from '../../components/transaction-details-card/transaction-details-card'
import RecentTransactionsSection from '../../sections/recent-transactions-section/recent-transactions-section'
import { tableTransactionHeaders } from '../../data/transactions'
import styles from './recent-transactions-page.module.css'
import FiltersSection from '../../sections/filters-section/filters-section'
import useTransactionSorts from '../../hooks/use-transaction-sorts'
import useTransaction from '../../hooks/use-transaction'

export default function RecentTransactionsPage() {
  const { sortTransactions } = useTransactionSorts()
  const { transactionId } = useTransaction()

  return (
    <div className={styles.layoutPrimary}>
      <FiltersSection />
      <div className={styles.layoutSecondary}>
        <RecentTransactionsSection
          transactions={sortTransactions()}
          tableTransactionHeaders={tableTransactionHeaders}
          withNoResultsButton
        />
        {transactionId && <TransactionDetailsCard />}
      </div>
    </div>
  )
}
