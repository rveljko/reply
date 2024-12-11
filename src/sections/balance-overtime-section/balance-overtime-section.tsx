import Chart from '../../components/chart/chart'
import DropdownButton from '../../components/dropdown-button/dropdown-button'
import { DropdownButtonElement } from '../../components/dropdown-element/dropdown-element'
import ChevronDownIcon from '../../icons/chevron-down-icon'
import { CreditCard } from '../../utils/types'
import Section from '../section/section'
import styles from './balance-overtime-section.module.css'

type BalanceOvertimeSectionProps = {
  creditCard: CreditCard
}

export default function BalanceOvertimeSection({
  creditCard,
}: BalanceOvertimeSectionProps) {
  return (
    <Section>
      <div className={styles.body}>
        <div className={styles.header}>
          <h2>Balance overtime</h2>
          <DropdownButton
            label="Sort by"
            icon={<ChevronDownIcon />}
            content={
              <>
                <DropdownButtonElement label="1 Day" type="button" />
                <DropdownButtonElement label="1 Week" type="button" />
                <DropdownButtonElement label="1 Month" type="button" />
              </>
            }
          />
        </div>
        <Chart data={creditCard.balance.slice(0, 5).reverse()} height="small" />
      </div>
    </Section>
  )
}
