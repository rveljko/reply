import { useRef } from 'react'
import CreditCard from '../../components/credit-card/credit-card'
import DeleteCreditCardModal from '../../components/delete-credit-card-modal/delete-credit-card-modal'
import ModalButton from '../../components/modal-button/modal-button'
import ChevronLeftIcon from '../../icons/chevron-left-icon'
import ChevronRightIcon from '../../icons/chevron-right-icon'
import TrashIcon from '../../icons/trash-icon'
import { CreditCard as CreditCardType } from '../../utils/types'
import Section from '../section/section'
import styles from './my-cards-section.module.css'

type MyCardsSectionProps = {
  creditCard: CreditCardType
}

export default function MyCardsSection({ creditCard }: MyCardsSectionProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <Section>
      <header className={styles.header}>
        <h2>My Cards</h2>
        <ul>
          <li>
            <ModalButton
              variant="tertiary"
              size="small"
              icon={<TrashIcon />}
              label="Remove"
              dialogRef={dialogRef}
            >
              <DeleteCreditCardModal dialogRef={dialogRef} />
            </ModalButton>
          </li>
        </ul>
      </header>
      <div className={styles.creditCard}>
        <CreditCard creditCard={creditCard} />
      </div>
      <ul className={styles.buttons}>
        <li>
          <button className={styles.button}>
            <ChevronLeftIcon />
          </button>
        </li>
        <li>
          <button className={styles.button}>
            <ChevronRightIcon />
          </button>
        </li>
      </ul>
    </Section>
  )
}
