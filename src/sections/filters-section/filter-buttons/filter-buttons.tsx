import DropdownElement from '../../../components/dropdown-element/dropdown-element'
import FilterButton from '../../../components/filter-button/filter-button'
import { purposes } from '../../../data/purposes'
import { sortings } from '../../../data/sortings'
import { types } from '../../../data/types'
import useTransactionFilters from '../../../hooks/use-transaction-filters'
import ArrowsDownUpIcon from '../../../icons/arrows-down-up-icon'
import CalendarIcon from '../../../icons/calendar-icon'
import GiftIcon from '../../../icons/gift-icon'
import SelectorIcon from '../../../icons/selector-icon'
import { inputDateFormatter } from '../../../utils/helpers/date-formatters'
import styles from './filter-buttons.module.css'

export default function FilterButtons() {
  const {
    dateFrom,
    dateTo,
    setDateFilter,
    setFilter,
    setSort,
    handleCheckbox,
  } = useTransactionFilters()

  return (
    <div className={styles.filters}>
      <FilterButton
        label="Date"
        icon={<CalendarIcon />}
        content={
          <>
            <DropdownElement
              label="Date from"
              type="date"
              name="date-from"
              value={dateFrom || '2024-03-05'}
              min="2024-03-05"
              onChange={(e) => setDateFilter('date-from', e.target.value)}
            />
            <DropdownElement
              label="Date To"
              type="date"
              name="date-to"
              max={inputDateFormatter(new Date())}
              value={dateTo || inputDateFormatter(new Date())}
              onChange={(e) => setDateFilter('date-to', e.target.value)}
            />
          </>
        }
      />
      <FilterButton
        label="Purpose"
        icon={<GiftIcon />}
        content={
          <>
            {purposes.map(({ purpose, id }) => (
              <DropdownElement
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
      <FilterButton
        label="Type"
        icon={<ArrowsDownUpIcon />}
        content={
          <>
            {types.map(({ type, id }) => (
              <DropdownElement
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
      <FilterButton
        label="Sort by"
        icon={<SelectorIcon />}
        content={
          <>
            {sortings.map(({ id, label, sort }) => (
              <DropdownElement
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
