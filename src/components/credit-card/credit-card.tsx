import { shortDateFormatter } from '../../utils/helpers/date-formatters'
import displayCreditCardCvv from '../../utils/helpers/display-credit-card-cvv'
import displayCreditCardNumbers from '../../utils/helpers/display-credit-card-numbers'
import { CreditCard as CreditCardType } from '../../utils/types'
import CreditCardStatus from '../credit-card-status/credit-card-status'
import styles from './credit-card.module.css'

type CreditCardProps = {
  creditCard: CreditCardType
}

export default function CreditCard({ creditCard }: CreditCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <CreditCardStatus isActive={creditCard.isActive} />
        <img src={creditCard.logo} alt="" />
      </header>
      <div className={styles.body}>
        <p className={styles.owner}>{creditCard.owner}</p>
        <div>
          <p
            className={styles.numbers}
            dangerouslySetInnerHTML={{
              __html: displayCreditCardNumbers(creditCard.numbers),
            }}
          />
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.label}>EXP</span>
              <p className={styles.exp}>
                {shortDateFormatter(creditCard.expirationDate.toString())}
              </p>
            </li>
            <li className={styles.listItem}>
              <span className={styles.label}>CVV</span>
              <p className={styles.cvv}>
                {displayCreditCardCvv(creditCard.cvv)}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
