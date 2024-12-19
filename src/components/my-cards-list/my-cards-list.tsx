import { CreditCard } from '../../utils/types'
import MyCard from '../my-card/my-card'
import styles from './my-cards-list.module.css'

type MyCardsListProps = {
  creditCards: CreditCard[]
}

export default function MyCardsList({ creditCards }: MyCardsListProps) {
  return (
    <ul className={styles.list}>
      {creditCards.map((creditCard, index) => (
        <li key={index}>
          <MyCard creditCard={creditCard} cardIndex={index} />
        </li>
      ))}
    </ul>
  )
}
