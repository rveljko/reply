import { useState } from 'react'
import CheckIcon from '../../icons/check-icon'
import TrashIcon from '../../icons/trash-icon'
import XIcon from '../../icons/x-icon'
import displayCreditCardExpDate from '../../utils/helpers/display-credit-card-exp-date'
import { getEndingLastFourDigits } from '../../utils/helpers/get-last-four-digits'
import { CreditCard } from '../../utils/types'
import Button from '../button/button'
import styles from './my-card.module.css'

type MyCardProps = {
  creditCards: CreditCard[]
  creditCard: CreditCard
  cardIndex: number
  addNewUpdateStatusCardId: (id: number) => void
  addNewRemoveCardIndex: (cardIndex: number) => void
}

export default function MyCard({
  creditCards,
  creditCard,
  cardIndex,
  addNewUpdateStatusCardId,
  addNewRemoveCardIndex,
}: MyCardProps) {
  const [isCreditCardActive, setIsCreditCardActive] = useState(
    creditCard.isActive
  )

  return (
    <article className={styles.card}>
      <div className={styles.cardInformations}>
        <div className={styles.logoWrapper}>
          <img src={creditCard.logo} alt="" className={styles.logo} />
        </div>
        <div>
          <p className={styles.numbers}>
            {getEndingLastFourDigits(creditCard.numbers)}
          </p>
          <span className={styles.expirationDate}>
            {`Expiration date ${displayCreditCardExpDate(
              creditCard.expirationDate.toString()
            )}`}
          </span>
        </div>
      </div>
      <ul className={styles.buttons}>
        <li>
          <Button
            variant="tertiary"
            size="small"
            onClick={() => {
              addNewRemoveCardIndex(cardIndex)
            }}
            disabled={creditCards.length === 1}
          >
            <TrashIcon />
            Remove
          </Button>
        </li>
        <li>
          <Button
            variant="tertiary"
            size="small"
            onClick={() => {
              addNewUpdateStatusCardId(creditCard.id)
              setIsCreditCardActive(!isCreditCardActive)
            }}
          >
            {isCreditCardActive ? (
              <>
                <XIcon />
                Deactivate
              </>
            ) : (
              <>
                <CheckIcon />
                Activate
              </>
            )}
          </Button>
        </li>
      </ul>
    </article>
  )
}
