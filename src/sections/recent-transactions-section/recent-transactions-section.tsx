import TableBodyCellGroup from '../../components/table-body-cell-group/table-body-cell-group'
import TableBodyCell from '../../components/table-body-cell/table-body-cell'
import TableBodyRow from '../../components/table-body-row/table-body-row'
import TableBody from '../../components/table-body/table-body'
import TableHeadCell from '../../components/table-head-cell/table-head-cell'
import TableHeadRow from '../../components/table-head-row/table-head-row'
import TableHead from '../../components/table-head/table-head'
import Table from '../../components/table/table'
import { tableTransactionHeaders, transactions } from '../../data/transactions'
import currencyFormatter from '../../utils/helpers/currency-formatter'
import {
  longDateFormatters,
  shortDateFormatter,
} from '../../utils/helpers/date-formatters'
import Section from '../section/section'

export default function RecentTransactionsSection() {
  return (
    <Section>
      <h2>Recent Transactions</h2>
      <Table>
        <TableHead>
          <TableHeadRow>
            {tableTransactionHeaders.map(({ id, label }) => (
              <TableHeadCell key={id}>{label}</TableHeadCell>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {transactions.map(
            ({ receiverName, receiverImage, date, purpose, amount }, index) => (
              <TableBodyRow key={index}>
                <TableBodyCell>
                  <TableBodyCellGroup>
                    <img src={receiverImage} alt={receiverImage} />
                    <span>{receiverName}</span>
                  </TableBodyCellGroup>
                </TableBodyCell>
                <TableBodyCell title={longDateFormatters(date)}>
                  {shortDateFormatter(date)}
                </TableBodyCell>
                <TableBodyCell>{purpose}</TableBodyCell>
                <TableBodyCell>{currencyFormatter(amount)}</TableBodyCell>
              </TableBodyRow>
            )
          )}
        </TableBody>
      </Table>
    </Section>
  )
}
