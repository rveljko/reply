import { useEffect } from 'react'
import ChevronLeftIcon from '../../icons/chevron-left-icon'
import ChevronRightIcon from '../../icons/chevron-right-icon'
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
  function decrementCreditCardIndex() {
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex <= 0
        ? (prevCreditCardIndex = creditCards.length - 1)
        : prevCreditCardIndex - 1
    )
  }

  function incrementCreditCardIndex() {
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex >= creditCards.length - 1
        ? (prevCreditCardIndex = 0)
        : prevCreditCardIndex + 1
    )
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'ArrowLeft') decrementCreditCardIndex()
    if (e.code === 'ArrowRight') incrementCreditCardIndex()
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [])

  return (
    <ul className={styles.pagination}>
      <li>
        <button
          className={styles.button}
          onClick={decrementCreditCardIndex}
          disabled={creditCards.length === 1}
        >
          <ChevronLeftIcon />
        </button>
      </li>
      <li>
        <ul className={styles.circles}>
          {creditCards.map((_, index) => (
            <li className={styles.item} key={index}>
              <button
                onClick={() => setCreditCardIndex(index)}
                className={`${styles.circle} ${
                  creditCardIndex === index ? styles.active : ''
                }`}
              ></button>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <button
          className={styles.button}
          onClick={incrementCreditCardIndex}
          disabled={creditCards.length === 1}
        >
          <ChevronRightIcon />
        </button>
      </li>
    </ul>
  )
}
