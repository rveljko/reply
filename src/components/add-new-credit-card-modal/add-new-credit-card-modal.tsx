import { useState } from 'react'
import UserIcon from '../../icons/user-icon'
import Button from '../button/button'
import Input from '../input/input'
import styles from './add-new-credit-card-modal.module.css'
import { CreditCard } from '../../utils/types'
import CreditCardIcon from '../../icons/credit-card-icon'
import CalendarIcon from '../../icons/calendar-icon'
import StarsIcon from '../../icons/stars-icon'
import { inputYearMonthDateFormatter } from '../../utils/helpers/date-formatters'
import { IMAGE_PATH } from '../../utils/constants'
import ErrorMessage from '../error-message/error-message'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'

type AddNewCreditCardModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement>
}

export default function AddNewCreditCardModal({
  dialogRef,
}: AddNewCreditCardModalProps) {
  const initialFormFieldsValues: CreditCard = {
    id: 0,
    owner: 'James Williams',
    name: 'Visa',
    logo: `${IMAGE_PATH}visa.svg`,
    numbers: 0,
    expirationDate: new Date(),
    cvv: 0,
    balance: Math.floor(Math.random() * 100001),
    expenses: Math.floor(Math.random() * 100001),
    isActive: true,
  }
  const [formFields, setFormFields] = useState(initialFormFieldsValues)
  const [errorMessage, setErrorMessage] = useState('')
  const { addNewCreditCard } = useCreditCards()

  const isButtonDisabled =
    !formFields.owner || !formFields.numbers || !formFields.cvv

  return (
    <article className={styles.modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (formFields.numbers.toString().length < 16) {
            setErrorMessage('Invalid card numbers. Please enter 16 digits.')
            return
          }

          if (formFields.cvv.toString().length < 3) {
            setErrorMessage('Invalid card CVV. CVV must be 3 digits')
            return
          }

          addNewCreditCard(formFields)
          setFormFields(initialFormFieldsValues)
          dialogRef.current?.close()
        }}
      >
        <div className={styles.head}>
          <h3>Add New Credit Card</h3>
        </div>
        <div className={styles.body}>
          <Input
            type="text"
            label="Cardholder Name"
            icon={<UserIcon />}
            placeholder="James Williams"
            value={formFields.owner || ''}
            onChange={(e) =>
              setFormFields({ ...formFields, owner: e.target.value })
            }
          />
          <Input
            type="tel"
            label="Card Numbers"
            icon={<CreditCardIcon />}
            placeholder="1234 5678 9098 7654"
            min={0}
            maxLength={16}
            value={formFields.numbers || ''}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                numbers: parseInt(e.target.value),
                logo:
                  e.target.value.toString()[0] >= '5'
                    ? `${IMAGE_PATH}mastercard.svg`
                    : `${IMAGE_PATH}visa.svg`,
                name:
                  e.target.value.toString()[0] >= '5' ? 'Mastercard' : 'Visa',
              })
            }
          />
          <Input
            type="month"
            label="Expiration Date"
            icon={<CalendarIcon />}
            min={inputYearMonthDateFormatter(new Date())}
            value={inputYearMonthDateFormatter(formFields.expirationDate)}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                expirationDate: new Date(`${e.target.value}`),
              })
            }
          />
          <Input
            type="tel"
            label="CVV"
            icon={<StarsIcon />}
            placeholder="420"
            value={formFields.cvv || ''}
            min={0}
            maxLength={3}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                cvv: parseInt(e.target.value),
              })
            }
          />
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          <div className={styles.buttons}>
            <Button
              variant="secondary"
              size="large"
              className={styles.button}
              type="button"
              onClick={() => dialogRef.current?.close()}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="large"
              className={styles.button}
              type="submit"
              disabled={isButtonDisabled}
              onClick={() => setErrorMessage('')}
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </article>
  )
}
