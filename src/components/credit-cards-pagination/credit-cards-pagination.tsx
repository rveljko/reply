import { CreditCard } from '../../utils/types'
import styles from './credit-cards-pagination.module.css'

type CreditCardPaginationProps = {
  creditCards: CreditCard[]
  creditCardIndex: number
  setCreditCardIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function CreditCardPagination({
  creditCards,
  creditCardIndex,
  setCreditCardIndex,
}: CreditCardPaginationProps) {
  return (
    <ul className={styles.pagination}>
      {creditCards.map((_, index) => (
        <li className={styles.item} key={index}>
          <button
            onClick={() =>
              setCreditCardIndex(
                (prevCreditCardIndex) => (prevCreditCardIndex = index)
              )
            }
            className={`${styles.button} ${
              creditCardIndex === index ? styles.active : ''
            }`}
          ></button>
        </li>
      ))}
    </ul>
  )
}
