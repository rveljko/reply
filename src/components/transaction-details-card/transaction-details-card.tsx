import styles from './transaction-details-card.module.css'
import XIcon from '../../icons/x-icon'
import Button from '../button/button'
import TransactionInformations from '../transaction-informations/transaction-informations'
import TextArea from '../text-area/text-area'
import { Transaction } from '../../utils/types'
import { mediumDateFormatter } from '../../utils/helpers/date-formatters'
import currencyFormatter from '../../utils/helpers/currency-formatter'

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
        <h1>{currencyFormatter(transaction.amount)}</h1>
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
          <TransactionInformations
            image={transaction.senderImage}
            name={transaction.senderName}
            identificator="From"
            purpose={transaction.purpose}
            date={mediumDateFormatter(transaction.date)}
          />
          <TransactionInformations
            image={transaction.receiverImage}
            name={transaction.receiverName}
            identificator="Receiver"
            date={mediumDateFormatter(transaction.date)}
          />
        </div>
        <div>
          <h3>Message</h3>
          <TextArea value={transaction.message} />
        </div>
      </div>
    </article>
  )
}
