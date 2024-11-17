import styles from './transaction-details-card.module.css'
import XIcon from '../../icons/x-icon'
import Button from '../button/button'
import TransactionInformations from '../transaction-informations/transaction-informations'
import TextArea from '../text-area/text-area'
import { Transaction } from '../../utils/types'
import { mediumDateFormatter } from '../../utils/helpers/date-formatters'
import currencyFormatter from '../../utils/helpers/currency-formatter'
import getTransactionSign from '../../utils/helpers/get-transaction-sign'

type TransactionDetailsCardProps = {
  transaction: Transaction | null
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TransactionDetailsCard({
  transaction,
  setIsOpened,
}: TransactionDetailsCardProps) {
  if (!transaction) return

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <h1>
          {`${getTransactionSign(transaction.type)}${currencyFormatter(
            transaction.amount
          )}`}
        </h1>
        <Button
          variant="ghost"
          size="small"
          className={styles.close}
          onClick={() => setIsOpened(false)}
        >
          <XIcon />
        </Button>
      </div>
      <div className={styles.body}>
        <div className={styles.informations}>
          {transaction.type === 'Received' ? (
            <>
              <TransactionInformations
                image={transaction.senderImage}
                name={transaction.senderName}
                identificator="From"
                date={mediumDateFormatter(transaction.date.toString())}
              />
              <TransactionInformations
                image={transaction.receiverImage}
                name={transaction.receiverName}
                identificator="To"
                purpose={transaction.purpose}
                date={mediumDateFormatter(transaction.date.toString())}
              />
            </>
          ) : (
            <>
              <TransactionInformations
                image={transaction.senderImage}
                name={transaction.senderName}
                identificator="From"
                purpose={transaction.purpose}
                date={mediumDateFormatter(transaction.date.toString())}
              />
              <TransactionInformations
                image={transaction.receiverImage}
                name={transaction.receiverName}
                identificator="To"
                date={mediumDateFormatter(transaction.date.toString())}
              />
            </>
          )}
        </div>
        <div>
          <TextArea label="Message" value={transaction.message} readOnly />
        </div>
      </div>
    </article>
  )
}
