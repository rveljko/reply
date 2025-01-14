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
import useTransaction from '../../hooks/use-transaction'
import { useNavigate } from 'react-router-dom'
import { DASHBOARD_ROUTE } from '../../utils/constants'
import CreditCardLogo from '../credit-card-logo/credit-card-logo'

type TableProps = React.ComponentPropsWithoutRef<'table'> & {
  transactions: Transaction[]
  tableTransactionHeaders: TableTransactionHeader[]
}

export default function Table({
  transactions,
  tableTransactionHeaders,
  ...props
}: TableProps) {
  const { transactionId, searchParams, setTransactionId } = useTransaction()
  const navigate = useNavigate()

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
          {transactions.map(
            ({
              amount,
              creditCard,
              date,
              id,
              purpose,
              receiverImage,
              receiverName,
              senderImage,
              senderName,
              type,
            }) => (
              <TableBodyRow
                key={id}
                isActiveRow={id === (transactionId && parseInt(transactionId))}
                onClick={() => {
                  setTransactionId(id.toString())
                  navigate({
                    pathname: `${DASHBOARD_ROUTE}recent-transactions`,
                    search: searchParams.toString(),
                  })
                }}
              >
                <TableBodyCell>
                  <TableBodyCellGroup>
                    {type === 'Received' ? (
                      <>
                        <img
                          src={senderImage}
                          alt={senderName}
                          title={senderName}
                        />
                        <span>{senderName}</span>
                      </>
                    ) : (
                      <>
                        <img
                          src={receiverImage}
                          alt={receiverName}
                          title={receiverName}
                        />
                        <span>{receiverName}</span>
                      </>
                    )}
                  </TableBodyCellGroup>
                </TableBodyCell>
                <TableBodyCell title={longDateFormatter(date.toString())}>
                  {shortDateFormatter(date.toString())}
                </TableBodyCell>
                <TableBodyCell>{purpose}</TableBodyCell>
                <TableBodyCell>
                  <TableBodyCellGroup>
                    <CreditCardLogo
                      logoUrl={creditCard.logo}
                      name={creditCard.name}
                    />
                    {getEndingLastFourDigits(creditCard.numbers)}
                  </TableBodyCellGroup>
                </TableBodyCell>
                <TableBodyCell
                  style={{
                    color:
                      type === 'Received'
                        ? 'var(--success-500)'
                        : 'var(--danger-500)',
                  }}
                >
                  {`${getTransactionSign(type)}${currencyFormatter(amount)}`}
                </TableBodyCell>
              </TableBodyRow>
            )
          )}
        </TableBody>
      </table>
    </div>
  )
}
