import DropdownButton from '../../../components/dropdown-button/dropdown-button'
import DropdownInputElement from '../../../components/dropdown-element/dropdown-element'
import { purposes } from '../../../data/purposes'
import { sortings } from '../../../data/sortings'
import { types } from '../../../data/types'
import useHandleCheckbox from '../../../hooks/use-handle-checkbox'
import useTransactionFilters from '../../../hooks/use-transaction-filters'
import useTransactionSorts from '../../../hooks/use-transaction-sorts'
import ArrowsDownUpIcon from '../../../icons/arrows-down-up-icon'
import CalendarIcon from '../../../icons/calendar-icon'
import CreditCardIcon from '../../../icons/credit-card-icon'
import GiftIcon from '../../../icons/gift-icon'
import SelectorIcon from '../../../icons/selector-icon'
import { useCreditCards } from '../../../utils/contexts/credit-cards-context'
import { inputDateFormatter } from '../../../utils/helpers/date-formatters'
import generateDateInPast from '../../../utils/helpers/date-generators'
import { getEndingLastFourDigits } from '../../../utils/helpers/get-last-four-digits'
import { CreditCardId } from '../../../utils/types'
import styles from './filter-buttons.module.css'

export default function FilterButtons() {
  const { dateFrom, dateTo, setDateFilter, setFilter } = useTransactionFilters()
  const { setSort } = useTransactionSorts()
  const { handleCheckbox } = useHandleCheckbox()
  const { creditCards } = useCreditCards()

  return (
    <div className={styles.filters}>
      <DropdownButton
        label="Date"
        icon={<CalendarIcon />}
        content={
          <>
            <DropdownInputElement
              label="Date from"
              type="date"
              name="date-from"
              min={inputDateFormatter(generateDateInPast(91, 0, 0, 0))}
              max={inputDateFormatter(generateDateInPast(1, 0, 0, 0))}
              value={
                dateFrom || inputDateFormatter(generateDateInPast(91, 0, 0, 0))
              }
              onChange={(e) => setDateFilter('date-from', e.target.value)}
            />
            <DropdownInputElement
              label="Date To"
              type="date"
              name="date-to"
              min={inputDateFormatter(generateDateInPast(90, 0, 0, 0))}
              max={inputDateFormatter(new Date())}
              value={dateTo || inputDateFormatter(new Date())}
              onChange={(e) => setDateFilter('date-to', e.target.value)}
            />
          </>
        }
      />
      <DropdownButton
        label="Purpose"
        icon={<GiftIcon />}
        content={
          <>
            {purposes.map(({ purpose, id }) => (
              <DropdownInputElement
                label={purpose}
                key={id}
                type="checkbox"
                name={purpose}
                readOnly
                checked={handleCheckbox(purpose)}
                onClick={() => setFilter('purpose', purpose)}
              />
            ))}
          </>
        }
      />
      <DropdownButton
        label="Credit Card"
        icon={<CreditCardIcon />}
        content={
          <>
            {creditCards.map(({ id, name, numbers }) => (
              <DropdownInputElement
                label={getEndingLastFourDigits(numbers)}
                key={id}
                type="checkbox"
                name={`${name} ${getEndingLastFourDigits(numbers, true)}`}
                readOnly
                checked={handleCheckbox(id.toString() as CreditCardId)}
                onClick={() =>
                  setFilter('credit-card', id.toString() as CreditCardId)
                }
              />
            ))}
          </>
        }
      />
      <DropdownButton
        label="Type"
        icon={<ArrowsDownUpIcon />}
        content={
          <>
            {types.map(({ type, id }) => (
              <DropdownInputElement
                label={type}
                key={id}
                type="checkbox"
                name={type}
                readOnly
                checked={handleCheckbox(type)}
                onClick={() => setFilter('type', type)}
              />
            ))}
          </>
        }
      />
      <DropdownButton
        label="Sort by"
        icon={<SelectorIcon />}
        content={
          <>
            {sortings.map(({ id, label, sort }) => (
              <DropdownInputElement
                label={label}
                key={id}
                type="radio"
                name={label}
                readOnly
                checked={handleCheckbox(sort)}
                onClick={() => setSort(sort)}
              />
            ))}
          </>
        }
      />
    </div>
  )
}
