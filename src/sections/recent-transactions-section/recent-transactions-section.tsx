import Section from '../section/section'
import Table from '../../components/table/table'
import { TableTransactionHeader, Transaction } from '../../utils/types'
import NoResults from '../../components/no-results/no-results'
import ViewMoreTransactions from '../../components/view-more-transactions/view-more-transactions'

type RecentTransactionsSectionProps = {
  transactions: Transaction[]
  tableTransactionHeaders: TableTransactionHeader[]
  isLinkable?: boolean
}

export default function RecentTransactionsSection({
  transactions,
  tableTransactionHeaders,
  isLinkable,
}: RecentTransactionsSectionProps) {
  return (
    <Section>
      <h2>Recent Transactions</h2>
      {transactions.length > 0 ? (
        <>
          <Table
            transactions={transactions}
            tableTransactionHeaders={tableTransactionHeaders}
            isLinkable
          ></Table>
          {isLinkable && <ViewMoreTransactions />}
        </>
      ) : (
        <NoResults />
      )}
    </Section>
  )
}
