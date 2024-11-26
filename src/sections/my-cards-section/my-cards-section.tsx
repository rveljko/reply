import Button from '../../components/button/button'
import CreditCard from '../../components/credit-card/credit-card'
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
  return (
    <Section>
      <header className={styles.header}>
        <h2>My Cards</h2>
        <ul>
          <li>
            <Button variant="tertiary" size="small">
              <TrashIcon /> Remove
            </Button>
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
