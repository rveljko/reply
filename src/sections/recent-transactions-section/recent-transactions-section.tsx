import Section from '../section/section'
import Table from '../../components/table/table'
import { TableTransactionHeader, Transaction } from '../../utils/types'
import NoResults from '../../components/no-results/no-results'

type RecentTransactionsSectionProps = {
  transactions: Transaction[]
  tableTransactionHeaders: TableTransactionHeader[]
  setTransaction: React.Dispatch<React.SetStateAction<Transaction | null>>
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RecentTransactionsSection({
  transactions,
  tableTransactionHeaders,
  setTransaction,
  setIsOpened,
}: RecentTransactionsSectionProps) {
  return (
    <Section>
      <h2>Recent Transactions</h2>
      {transactions.length > 0 ? (
        <Table
          transactions={transactions}
          tableTransactionHeaders={tableTransactionHeaders}
          setTransaction={setTransaction}
          setIsOpened={setIsOpened}
        ></Table>
      ) : (
        <NoResults />
      )}
    </Section>
  )
}
