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
import AddNewCreditCardModalButton from '../../components/add-new-credit-card-modal-button/add-new-credit-card-modal-button'
import PlusIcon from '../../icons/plus-icon'

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
  const deleteCreditCardDialogRef = useRef<HTMLDialogElement>(null)
  const { getSortedCreditCards } = useCreditCards()

  function decrementCreditCardIndex() {
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex <= 0
        ? (prevCreditCardIndex = getSortedCreditCards().length - 1)
        : prevCreditCardIndex - 1
    )
  }

  function incrementCreditCardIndex() {
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex >= getSortedCreditCards().length - 1
        ? (prevCreditCardIndex = 0)
        : prevCreditCardIndex + 1
    )
  }

  const swipeHandlers = useSwipe({
    onSwipeLeft: incrementCreditCardIndex,
    onSwipeRight: decrementCreditCardIndex,
  })

  return (
    <Section>
      <header className={styles.header}>
        <h2>My Cards</h2>
        <ul className={styles.buttons}>
          <li>
            <AddNewCreditCardModalButton
              variant="tertiary"
              size="small"
              rightIcon={<PlusIcon />}
            />
          </li>
          <li>
            <ModalButton
              variant="tertiary"
              size="small"
              icon={<TrashIcon />}
              label="Remove"
              dialogRef={deleteCreditCardDialogRef}
              disabled={getSortedCreditCards.length === 1}
            >
              <DeleteCreditCardModal
                dialogRef={deleteCreditCardDialogRef}
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
        creditCards={getSortedCreditCards()}
        creditCardIndex={creditCardIndex}
        setCreditCardIndex={setCreditCardIndex}
      />
    </Section>
  )
}
