import currencyFormatter from '../../utils/helpers/currency-formatter'
import {
  longDateFormatter,
  shortDateFormatter,
} from '../../utils/helpers/date-formatters'
import { TableTransactionHeader, Transaction } from '../../utils/types'
import TableBodyCellGroup from '../table-body-cell-group/table-body-cell-group'
import TableBodyCell from '../table-body-cell/table-body-cell'
import TableBodyRow from '../table-body-row/table-body-row'
import TableBody from '../table-body/table-body'
import TableHeadCell from '../table-head-cell/table-head-cell'
import TableHeadRow from '../table-head-row/table-head-row'
import TableHead from '../table-head/table-head'
import styles from './table.module.css'

type TableProps = React.ComponentPropsWithoutRef<'table'> & {
  transactions: Transaction[]
  tableTransactionHeaders: TableTransactionHeader[]
  setTransaction: React.Dispatch<React.SetStateAction<Transaction | null>>
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Table({
  transactions,
  tableTransactionHeaders,
  setTransaction,
  setIsOpened,
  ...props
}: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table} {...props}>
        <TableHead>
          <TableHeadRow>
            {tableTransactionHeaders.map(({ id, label }) => (
              <TableHeadCell key={id}>{label}</TableHeadCell>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableBodyRow
              key={index}
              onClick={() => {
                setTransaction(transaction)
                setIsOpened(true)
              }}
            >
              <TableBodyCell>
                <TableBodyCellGroup>
                  <img
                    src={transaction.receiverImage}
                    alt={transaction.receiverImage}
                  />
                  <span>{transaction.receiverName}</span>
                </TableBodyCellGroup>
              </TableBodyCell>
              <TableBodyCell title={longDateFormatter(transaction.date)}>
                {shortDateFormatter(transaction.date)}
              </TableBodyCell>
              <TableBodyCell>{transaction.purpose}</TableBodyCell>
              <TableBodyCell>
                {currencyFormatter(transaction.amount)}
              </TableBodyCell>
            </TableBodyRow>
          ))}
        </TableBody>
      </table>
    </div>
  )
}
