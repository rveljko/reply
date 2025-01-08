import { useRef } from 'react'
import Button from '../../components/button/button'
import Chart from '../../components/chart/chart'
import ModalButton from '../../components/modal-button/modal-button'
import SendMoneyModal from '../../components/send-mone-modal/send-money-modal'
import ArrowUpRightIcon from '../../icons/arrow-up-right-icon'
import ChevronDownIcon from '../../icons/chevron-down-icon'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import currencyFormatter from '../../utils/helpers/currency-formatter'
import Section from '../section/section'
import styles from './balance-section.module.css'

export default function BalanceSection() {
  const { totalBalance, getCreditCardByIndex } = useCreditCards()
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <Section>
      <header className={styles.header}>
        <div>
          <p>Balance</p>
          <h1>{currencyFormatter(totalBalance)}</h1>
        </div>
        <ul className={styles.list}>
          <li>
            <Button variant="secondary" size="large">
              Sort by <ChevronDownIcon />
            </Button>
          </li>
          <li>
            <ModalButton
              variant="primary"
              size="large"
              dialogRef={dialogRef}
              label="Send Money"
              rightIcon={<ArrowUpRightIcon />}
              className={styles.button}
            >
              <SendMoneyModal dialogRef={dialogRef} />
            </ModalButton>
          </li>
        </ul>
      </header>
      <Chart
        data={getCreditCardByIndex(2).balance.slice(0, 5).reverse()}
        height="large"
      />
    </Section>
  )
}
