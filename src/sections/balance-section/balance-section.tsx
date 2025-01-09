import Button from '../../components/button/button'
import Chart from '../../components/chart/chart'
import ArrowUpRightIcon from '../../icons/arrow-up-right-icon'
import ChevronDownIcon from '../../icons/chevron-down-icon'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import currencyFormatter from '../../utils/helpers/currency-formatter'
import Section from '../section/section'
import styles from './balance-section.module.css'
import SendMoneyModalButton from '../../components/send-money-modal-button/send-money-modal-button'

export default function BalanceSection() {
  const { totalBalance, getCreditCardByIndex } = useCreditCards()

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
            <SendMoneyModalButton
              variant="primary"
              size="large"
              rightIcon={<ArrowUpRightIcon />}
            />
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
