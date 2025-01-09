import { useState } from 'react'
import Button from '../../components/button/button'
import MyCardsList from '../../components/my-cards-list/my-cards-list'
import PlusIcon from '../../icons/plus-icon'
import { CreditCard } from '../../utils/types'
import Section from '../section/section'
import styles from './cards.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import AddNewCreditCardModalButton from '../../components/add-new-credit-card-modal-button/add-new-credit-card-modal-button'

type CardsSectionProps = {
  creditCards: CreditCard[]
}

export default function CardsSection({ creditCards }: CardsSectionProps) {
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
        <AddNewCreditCardModalButton
          variant="secondary"
          size="small"
          rightIcon={<PlusIcon />}
        />
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
            })
            setCardUpdateStatusIds([])
          }
          if (removeCardIndexes.length > 0) {
            removeCardIndexes.map((index) => {
              removeCreditCard(index)
            })
            setRemoveCardIndexes([])
          }
        }}
        disabled={isButtonDisabled}
      >
        Save Changes
      </Button>
    </Section>
  )
}
