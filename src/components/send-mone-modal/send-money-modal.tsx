import CashIcon from '../../icons/cash-icon'
import GiftIcon from '../../icons/gift-icon'
import UserIcon from '../../icons/user-icon'
import Button from '../button/button'
import Input from '../input/input'
import TextArea from '../text-area/text-area'
import styles from './send-money-modal.module.css'

export default function SendMoneyModal() {
  return (
    <article className={styles.modal}>
      <form>
        <div className={styles.head}>
          <h3>Send Money</h3>
        </div>
        <div className={styles.body}>
          <Input label="Send To" icon={<UserIcon />} placeholder="Liam Smith" />
          <Input label="Amount" icon={<CashIcon />} placeholder="$420.69" />
          <Input label="Purpose" icon={<GiftIcon />} placeholder="Gift" />
          <TextArea label="Message" placeholder="Hi Liam! IYKYK" optional />
          <div className={styles.buttons}>
            <Button variant="secondary" size="large" className={styles.button}>
              Cancel
            </Button>
            <Button variant="primary" size="large" className={styles.button}>
              Send Money
            </Button>
          </div>
        </div>
      </form>
    </article>
  )
}
