import { CreditCard } from '../../utils/types'
import MyCard from '../my-card/my-card'
import styles from './my-cards-list.module.css'

type MyCardsListProps = {
  creditCards: CreditCard[]
  addNewUpdateStatusCardId: (id: number) => void
  addNewRemoveCardIndex: (cardIndex: number) => void
}

export default function MyCardsList({
  creditCards,
  addNewUpdateStatusCardId,
  addNewRemoveCardIndex,
}: MyCardsListProps) {
  return (
    <ul className={styles.list}>
      {creditCards.map((creditCard, index) => (
        <li key={index}>
          <MyCard
            creditCards={creditCards}
            creditCard={creditCard}
            cardIndex={index}
            addNewUpdateStatusCardId={addNewUpdateStatusCardId}
            addNewRemoveCardIndex={addNewRemoveCardIndex}
          />
        </li>
      ))}
    </ul>
  )
}
