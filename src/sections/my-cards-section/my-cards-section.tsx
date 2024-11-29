import { useRef } from 'react'
import CreditCard from '../../components/credit-card/credit-card'
import DeleteCreditCardModal from '../../components/delete-credit-card-modal/delete-credit-card-modal'
import ModalButton from '../../components/modal-button/modal-button'
import TrashIcon from '../../icons/trash-icon'
import { CreditCard as CreditCardType } from '../../utils/types'
import Section from '../section/section'
import styles from './my-cards-section.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import CreditCardPagination from '../../components/credit-cards-pagination/credit-cards-pagination'
import useSwipe from '../../hooks/use-swipe'

type MyCardsSectionProps = {
  creditCard: CreditCardType
  creditCardIndex: number
  setCreditCardIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function MyCardsSection({
  creditCard,
  creditCardIndex,
  setCreditCardIndex,
}: MyCardsSectionProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { creditCards } = useCreditCards()

  function onSwipeLeft() {
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex <= 0
        ? (prevCreditCardIndex = creditCards.length - 1)
        : prevCreditCardIndex - 1
    )
  }

  function onSwipeRight() {
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex >= creditCards.length - 1
        ? (prevCreditCardIndex = 0)
        : prevCreditCardIndex + 1
    )
  }

  const swipeHandlers = useSwipe({
    onSwipeLeft,
    onSwipeRight,
  })

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
              disabled={creditCards.length === 1}
            >
              <DeleteCreditCardModal
                dialogRef={dialogRef}
                creditCardIndex={creditCardIndex}
                setCreditCardIndex={setCreditCardIndex}
              />
            </ModalButton>
          </li>
        </ul>
      </header>
      <div className={styles.creditCard} {...swipeHandlers}>
        <CreditCard creditCard={creditCard} />
      </div>
      <CreditCardPagination
        creditCards={creditCards}
        creditCardIndex={creditCardIndex}
        setCreditCardIndex={setCreditCardIndex}
      />
    </Section>
  )
}
