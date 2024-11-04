import { useState } from 'react'
import CashIcon from '../../icons/cash-icon'
import GiftIcon from '../../icons/gift-icon'
import UserIcon from '../../icons/user-icon'
import { Transaction } from '../../utils/types'
import Button from '../button/button'
import Input from '../input/input'
import TextArea from '../text-area/text-area'
import styles from './send-money-modal.module.css'
import { IMAGE_PATH } from '../../utils/constants'
import { senderInformations } from '../../data/transactions'
import { useTransactions } from '../../utils/contexts/transactions-context'

type SendMoneyModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement>
}

export default function SendMoneyModal({ dialogRef }: SendMoneyModalProps) {
  const initialFormFieldsValues: Transaction = {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverImage: '',
    receiverName: '',
    amount: 0,
    purpose: '',
    message: '',
    date: new Date(),
  }

  const [formFields, setFormFields] = useState(initialFormFieldsValues)
  const { addNewTransaction } = useTransactions()

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
          <Input
            label="Purpose"
            icon={<GiftIcon />}
            placeholder="Gift"
            type="text"
            value={formFields.purpose}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                purpose: e.target.value,
              })
            }
          />
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
              formNoValidate
              onClick={() => dialogRef.current?.close()}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="large"
              className={styles.button}
              type="submit"
            >
              Send Money
            </Button>
          </div>
        </div>
      </form>
    </article>
  )
}
