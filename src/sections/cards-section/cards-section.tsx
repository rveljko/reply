import { useRef, useState } from 'react'
import AddNewCreditCardModal from '../../components/add-new-credit-card-modal/add-new-credit-card-modal'
import Button from '../../components/button/button'
import ModalButton from '../../components/modal-button/modal-button'
import MyCardsList from '../../components/my-cards-list/my-cards-list'
import PlusIcon from '../../icons/plus-icon'
import { CreditCard } from '../../utils/types'
import Section from '../section/section'
import styles from './cards.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'

type CardsSectionProps = {
  creditCards: CreditCard[]
}

export default function CardsSection({ creditCards }: CardsSectionProps) {
  const addNewCreditCardDialogRef = useRef<HTMLDialogElement>(null)
  const { changeCreditCardStatus, removeCreditCard } = useCreditCards()
  const [cardUpdateStatusIds, setCardUpdateStatusIds] = useState<number[]>([])
  const [removeCardIndexes, setRemoveCardIndexes] = useState<number[]>([])
  const [updatedCreditCards, setUpdatedCreditCards] = useState(creditCards)

  function addNewUpdateStatusCardId(id: number) {
    setCardUpdateStatusIds(() => {
      if (cardUpdateStatusIds.includes(id)) {
        return cardUpdateStatusIds.filter(
          (cardUpdateStatusId) => cardUpdateStatusId !== id
        )
      }
      return [...cardUpdateStatusIds, id]
    })
  }

  function addNewRemoveCardIndex(cardIndex: number) {
    setRemoveCardIndexes([...removeCardIndexes, cardIndex])

    setUpdatedCreditCards(
      [...updatedCreditCards].filter((_, index) => index !== cardIndex)
    )
  }

  const isButtonDisabled =
    updatedCreditCards.length === creditCards.length &&
    !cardUpdateStatusIds.length

  return (
    <Section>
      <header className={styles.header}>
        <h2>My Cards</h2>
        <ModalButton
          variant="secondary"
          size="small"
          icon={<PlusIcon />}
          label="Add New"
          dialogRef={addNewCreditCardDialogRef}
        >
          <AddNewCreditCardModal dialogRef={addNewCreditCardDialogRef} />
        </ModalButton>
      </header>
      <div className={styles.myCardsListWrapper}>
        <MyCardsList
          creditCards={updatedCreditCards}
          addNewUpdateStatusCardId={addNewUpdateStatusCardId}
          addNewRemoveCardIndex={addNewRemoveCardIndex}
        />
      </div>
      <Button
        variant="primary"
        size="large"
        onClick={() => {
          if (cardUpdateStatusIds.length > 0) {
            cardUpdateStatusIds.map((id) => {
              changeCreditCardStatus(id)
              setCardUpdateStatusIds([])
            })
          }
          if (removeCardIndexes.length > 0) {
            removeCardIndexes.map((index) => {
              removeCreditCard(index)
              setRemoveCardIndexes([])
            })
          }
        }}
        disabled={isButtonDisabled}
      >
        Save Changes
      </Button>
    </Section>
  )
}
