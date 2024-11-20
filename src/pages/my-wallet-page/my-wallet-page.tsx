import { tableTransactionHeaders } from '../../data/transactions'
import RecentTransactionsSection from '../../sections/recent-transactions-section/recent-transactions-section'
import { useTransactions } from '../../utils/contexts/transactions-context'

export default function MyWalletPage() {
  const { transactions } = useTransactions()

  return (
    <div>
      <RecentTransactionsSection
        transactions={transactions.slice(0, 5)}
        tableTransactionHeaders={tableTransactionHeaders}
        isLinkable
      />
    </div>
  )
}
