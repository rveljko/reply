import { useState } from 'react'
import CashIcon from '../../icons/cash-icon'
import GiftIcon from '../../icons/gift-icon'
import UserIcon from '../../icons/user-icon'
import { Purpose, Transaction } from '../../utils/types'
import Button from '../button/button'
import Input from '../input/input'
import TextArea from '../text-area/text-area'
import styles from './send-money-modal.module.css'
import { IMAGE_PATH } from '../../utils/constants'
import { userInformations } from '../../data/transactions'
import { useTransactions } from '../../utils/contexts/transactions-context'
import { creditCards } from '../../data/credit-cards'
import { Select, Option } from '../select-option/select-option'
import CreditCardPayIcon from '../../icons/credit-card-pay-icon'
import { getEndingLastFourDigits } from '../../utils/helpers/get-last-four-digits'
import { purposes } from '../../data/purposes'

type SendMoneyModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement>
}

export default function SendMoneyModal({ dialogRef }: SendMoneyModalProps) {
  const initialFormFieldsValues: Transaction = {
    id: 0,
    senderName: userInformations.name,
    senderImage: userInformations.image,
    receiverImage: '',
    receiverName: '',
    amount: 0,
    purpose: '',
    type: 'Sent',
    message: '',
    date: new Date(),
    creditCard: '',
  }

  const [formFields, setFormFields] = useState(initialFormFieldsValues)
  const { addNewTransaction } = useTransactions()

  const isButtonDisabled =
    !formFields.receiverName ||
    !formFields.creditCard ||
    formFields.amount <= 0 ||
    !formFields.purpose

  return (
    <article className={styles.modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          addNewTransaction(formFields)
          setFormFields(initialFormFieldsValues)
          dialogRef.current?.close()
        }}
      >
        <div className={styles.head}>
          <h3>Send Money</h3>
        </div>
        <div className={styles.body}>
          <Input
            label="Send To"
            icon={<UserIcon />}
            placeholder="Liam Smith"
            value={formFields.receiverName}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                receiverName: e.target.value,
                receiverImage: `${IMAGE_PATH}${e.target.value
                  .split(' ')
                  .join('-')
                  .toLowerCase()}.png`,
              })
            }
          />
          <Select
            label="Credit Card"
            icon={<CreditCardPayIcon />}
            value={
              typeof formFields.creditCard === 'object'
                ? formFields.creditCard.id.toString()
                : ''
            }
            onChange={(e) => {
              setFormFields({
                ...formFields,
                creditCard: creditCards[parseInt(e.target.value) - 1],
              })
            }}
          >
            <Option label="Select a credit card" disabled value="" />
            {creditCards.map((creditCard) => (
              <Option
                value={creditCard.id.toString()}
                key={creditCard.id}
                label={`${creditCard.name} ${getEndingLastFourDigits(
                  creditCard.numbers,
                  true
                )}`}
              />
            ))}
          </Select>
          <Input
            label="Amount"
            icon={<CashIcon />}
            placeholder="$420.69"
            value={formFields.amount || ''}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                amount: parseFloat(e.target.value),
              })
            }
          />
          <Select
            label="Purpose"
            icon={<GiftIcon />}
            value={formFields.purpose || ''}
            onChange={(e) => {
              setFormFields({
                ...formFields,
                purpose: e.target.value as Purpose,
              })
            }}
          >
            <Option label="Select a purpose" disabled value="" />
            {purposes.map(({ id, purpose }) => (
              <Option key={id} label={purpose} value={purpose} />
            ))}
          </Select>
          <TextArea
            label="Message"
            placeholder="Hi Liam! IYKYK"
            optional
            value={formFields.message}
            onChange={(e) =>
              setFormFields({ ...formFields, message: e.target.value })
            }
          />
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
            >
              Send Money
            </Button>
          </div>
        </div>
      </form>
    </article>
  )
}
