import { useRef } from 'react'
import CheckIcon from '../../icons/check-icon'
import TrashIcon from '../../icons/trash-icon'
import XIcon from '../../icons/x-icon'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import displayCreditCardExpDate from '../../utils/helpers/display-credit-card-exp-date'
import { getEndingLastFourDigits } from '../../utils/helpers/get-last-four-digits'
import { CreditCard } from '../../utils/types'
import Button from '../button/button'
import DeleteCreditCardModal from '../delete-credit-card-modal/delete-credit-card-modal'
import ModalButton from '../modal-button/modal-button'
import styles from './my-card.module.css'
import displayToast from '../../utils/toast'

type MyCardProps = {
  creditCard: CreditCard
  cardIndex: number
}

export default function MyCard({ creditCard, cardIndex }: MyCardProps) {
  const { creditCards, changeCreditCardStatus } = useCreditCards()
  const deleteCreditCardDialogRef = useRef<HTMLDialogElement>(null)

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
          <ModalButton
            variant="tertiary"
            size="small"
            icon={<TrashIcon />}
            label="Remove"
            dialogRef={deleteCreditCardDialogRef}
            disabled={creditCards.length === 1}
          >
            <DeleteCreditCardModal
              dialogRef={deleteCreditCardDialogRef}
              creditCardIndex={cardIndex}
            />
          </ModalButton>
        </li>
        <li>
          <Button
            variant="tertiary"
            size="small"
            onClick={() => {
              changeCreditCardStatus(creditCard.id)
              displayToast('Credit Card Status Changed')
            }}
          >
            {creditCard.isActive ? (
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
