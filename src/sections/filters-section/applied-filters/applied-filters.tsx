import Button from '../../../components/button/button'
import { sortings } from '../../../data/sortings'
import useTransactionFilters from '../../../hooks/use-transaction-filters'
import ArrowsDownUpIcon from '../../../icons/arrows-down-up-icon'
import CalendarIcon from '../../../icons/calendar-icon'
import EraserIcon from '../../../icons/eraser-icon'
import GiftIcon from '../../../icons/gift-icon'
import SelectorIcon from '../../../icons/selector-icon'
import XIcon from '../../../icons/x-icon'
import { shortDateFormatter } from '../../../utils/helpers/date-formatters'
import styles from './applied-filters.module.css'

export default function AppliedFilters() {
  const {
    dateFrom,
    dateTo,
    purpose: filteredPurposes,
    type: filteredTypes,
    sort,
    removeDate,
    removeFilter,
    removeSort,
    clearFilters,
  } = useTransactionFilters()

  return (
    <div className={styles.appliedFilters}>
      <Button
        variant="tertiary"
        size="small"
        disabled={
          [...filteredPurposes, ...filteredTypes].length === 0 &&
          !dateFrom &&
          !dateTo &&
          !sort
        }
        onClick={() => clearFilters()}
      >
        <EraserIcon />
        Clear Filters
      </Button>
      {dateFrom && (
        <Button variant="tertiary" size="small">
          <CalendarIcon />
          {shortDateFormatter(dateFrom)}
          <span
            className={styles.removeFilter}
            onClick={() => removeDate('date-from', dateFrom)}
          >
            <XIcon />
          </span>
        </Button>
      )}
      {dateTo && (
        <Button variant="tertiary" size="small">
          <CalendarIcon />
          {shortDateFormatter(dateTo)}
          <span
            className={styles.removeFilter}
            onClick={() => removeDate('date-to', dateTo)}
          >
            <XIcon />
          </span>
        </Button>
      )}
      <>
        {filteredPurposes.map((filteredPurpose, index) => (
          <Button key={index} variant="tertiary" size="small">
            <GiftIcon />
            {filteredPurpose}
            <span
              className={styles.removeFilter}
              onClick={() => removeFilter('purpose', filteredPurpose)}
            >
              <XIcon />
            </span>
          </Button>
        ))}
      </>
      <>
        {filteredTypes.map((filteredType, index) => (
          <Button key={index} variant="tertiary" size="small">
            <ArrowsDownUpIcon />
            {filteredType}
            <span
              className={styles.removeFilter}
              onClick={() => removeFilter('type', filteredType)}
            >
              <XIcon />
            </span>
          </Button>
        ))}
      </>
      {sortings.map(
        (sorting, index) =>
          sort === sorting.sort && (
            <Button key={index} variant="tertiary" size="small">
              <SelectorIcon />
              {sorting.label}
              <span
                className={styles.removeFilter}
                onClick={() => removeSort(sort)}
              >
                <XIcon />
              </span>
            </Button>
          )
      )}
    </div>
  )
}
