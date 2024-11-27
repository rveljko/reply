import { IMAGE_PATH } from '../../utils/constants'
import Button from '../button/button'
import styles from './delete-credit-card-modal.module.css'

type DeleteCreditCardModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement>
}

export default function DeleteCreditCardModal({
  dialogRef,
}: DeleteCreditCardModalProps) {
  return (
    <article className={styles.modal}>
      <img
        src={`${IMAGE_PATH}credit-cards.png`}
        alt=""
        className={styles.image}
      />
      <h3 className={styles.heading}>
        Are you sure you want to delete this credit card?
      </h3>
      <p className={styles.paragraph}>
        Removing your card will permanently erase all associated information and
        transactions.
      </p>
      <div className={styles.buttons}>
        <Button
          variant="secondary"
          size="large"
          className={styles.button}
          onClick={() => dialogRef.current?.close()}
        >
          Cancel
        </Button>
        <Button variant="danger" size="large" className={styles.button}>
          Delete
        </Button>
      </div>
    </article>
  )
}
