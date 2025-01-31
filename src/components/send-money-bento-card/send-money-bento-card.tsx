import { useState } from 'react'
import UserIcon from '../../icons/user-icon'
import BentoCard from '../bento-card/bento-card'
import Input from '../input/input'
import styles from './send-money-bento-card.module.css'
import { currencyMask, onlyLettersMask } from '../../utils/helpers/input-masks'
import CashIcon from '../../icons/cash-icon'

export default function SendMoneyBentoCard() {
  const [formFields, setFormFields] = useState({ receiverName: '', amount: '' })

  return (
    <BentoCard
      title="Quick and Seamless Money Transfers"
      description="Experience the Ultimate Convenience in Initiating Secure Money Transfers Effortlessly"
    >
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <header className={styles.header}>
            <h3>Add New Credit Card </h3>
          </header>
          <div>
            <div className={styles.inputWrapper}>
              <Input
                type="text"
                label="Cardholder Name"
                leftIcon={<UserIcon />}
                placeholder={'Liam Smith'}
                value={formFields.receiverName || ''}
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    receiverName: onlyLettersMask(e.target.value),
                  })
                }}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Input
                type="tel"
                label="Amount"
                leftIcon={<CashIcon />}
                placeholder="$420.69"
                min={0}
                maxLength={19}
                value={formFields.amount || ''}
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    amount: currencyMask(e.target.value),
                  })
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </BentoCard>
  )
}
