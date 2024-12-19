import { useRef } from 'react'
import AddNewCreditCardModal from '../../components/add-new-credit-card-modal/add-new-credit-card-modal'
import Button from '../../components/button/button'
import ModalButton from '../../components/modal-button/modal-button'
import MyCardsList from '../../components/my-cards-list/my-cards-list'
import PlusIcon from '../../icons/plus-icon'
import { CreditCard } from '../../utils/types'
import Section from '../section/section'
import styles from './cards.module.css'

type CardsSectionProps = {
  creditCards: CreditCard[]
}

export default function CardsSection({ creditCards }: CardsSectionProps) {
  const addNewCreditCardDialogRef = useRef<HTMLDialogElement>(null)

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
        <MyCardsList creditCards={creditCards} />
      </div>
      <Button variant="primary" size="large">
        Save Changes
      </Button>
    </Section>
  )
}
