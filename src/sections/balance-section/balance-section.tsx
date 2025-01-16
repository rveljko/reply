import Chart from '../../components/chart/chart'
import ArrowUpRightIcon from '../../icons/arrow-up-right-icon'
import ChevronDownIcon from '../../icons/chevron-down-icon'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import Section from '../section/section'
import styles from './balance-section.module.css'
import SendMoneyModalButton from '../../components/send-money-modal-button/send-money-modal-button'
import CurrencyAnimation from '../../components/currency-animation/currency-animation'
import useBalanceFilters from '../../hooks/use-balance-filters'
import DropdownButton from '../../components/dropdown-button/dropdown-button'
import { balanceFilters } from '../../data/balance-filters'
import DropdownElement from '../../components/dropdown-element/dropdown-element'

export default function BalanceSection() {
  const { creditCards, totalBalance } = useCreditCards()
  const { filter, setFilter, getCreditCardsFilteredBalances } =
    useBalanceFilters()

  return (
    <Section>
      <header className={styles.header}>
        <div>
          <p>Balance</p>
          <h1>
            <CurrencyAnimation end={totalBalance} />
          </h1>
        </div>
        <ul className={styles.list}>
          <li>
            <DropdownButton
              variant="secondary"
              size="large"
              label="Sort by"
              icon={<ChevronDownIcon />}
            >
              {balanceFilters.map((balanceFilter, index) => (
                <DropdownElement
                  label={balanceFilter}
                  type="radio"
                  onClick={() => setFilter(balanceFilter)}
                  checked={filter === balanceFilter}
                  key={index}
                  readOnly
                />
              ))}
            </DropdownButton>
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
        data={getCreditCardsFilteredBalances(creditCards)}
        height="large"
      />
    </Section>
  )
}
