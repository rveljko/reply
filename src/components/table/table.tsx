import { useState } from 'react'
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
import getTransactionSign from '../../utils/helpers/get-transaction-sign'
import { getEndingLastFourDigits } from '../../utils/helpers/get-last-four-digits'

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
  const [activeRow, setActiveRow] = useState<number | null>(null)

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
              isActiveRow={activeRow === index}
              onClick={() => {
                setTransaction(transaction)
                setIsOpened(true)
                setActiveRow(index)
              }}
            >
              <TableBodyCell>
                <TableBodyCellGroup>
                  {transaction.type === 'Received' ? (
                    <>
                      <img
                        src={transaction.senderImage}
                        alt={transaction.senderImage}
                      />
                      <span>{transaction.senderName}</span>
                    </>
                  ) : (
                    <>
                      <img
                        src={transaction.receiverImage}
                        alt={transaction.receiverImage}
                      />
                      <span>{transaction.receiverName}</span>
                    </>
                  )}
                </TableBodyCellGroup>
              </TableBodyCell>
              <TableBodyCell
                title={longDateFormatter(transaction.date.toString())}
              >
                {shortDateFormatter(transaction.date.toString())}
              </TableBodyCell>
              <TableBodyCell>{transaction.purpose}</TableBodyCell>
              <TableBodyCell>
                <TableBodyCellGroup>
                  <img src={transaction.creditCard.logo} alt="" />
                  {getEndingLastFourDigits(transaction.creditCard.numbers)}
                </TableBodyCellGroup>
              </TableBodyCell>
              <TableBodyCell
                style={{
                  color:
                    transaction.type === 'Received'
                      ? 'var(--success-500)'
                      : 'var(--danger-500)',
                }}
              >
                {`${getTransactionSign(transaction.type)}${currencyFormatter(
                  transaction.amount
                )}`}
              </TableBodyCell>
            </TableBodyRow>
          ))}
        </TableBody>
      </table>
    </div>
  )
}
