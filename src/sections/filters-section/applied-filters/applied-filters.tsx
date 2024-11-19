import Button from '../../../components/button/button'
import { creditCards } from '../../../data/credit-cards'
import { sortings } from '../../../data/sortings'
import useTransactionFilters from '../../../hooks/use-transaction-filters'
import useTransactionSorts from '../../../hooks/use-transaction-sorts'
import ArrowsDownUpIcon from '../../../icons/arrows-down-up-icon'
import CalendarIcon from '../../../icons/calendar-icon'
import CreditCardIcon from '../../../icons/credit-card-icon'
import EraserIcon from '../../../icons/eraser-icon'
import GiftIcon from '../../../icons/gift-icon'
import SelectorIcon from '../../../icons/selector-icon'
import XIcon from '../../../icons/x-icon'
import { shortDateFormatter } from '../../../utils/helpers/date-formatters'
import { getEndingLastFourDigits } from '../../../utils/helpers/get-last-four-digits'
import { CreditCardId } from '../../../utils/types'
import styles from './applied-filters.module.css'

export default function AppliedFilters() {
  const {
    dateFrom,
    dateTo,
    purpose: filteredPurposes,
    creditCard,
    type: filteredTypes,
    getCreditCardIds,
    removeDate,
    removeFilter,
    clearFilters,
  } = useTransactionFilters()

  const { sort, removeSort } = useTransactionSorts()

  return (
    <div className={styles.appliedFilters}>
      <Button
        variant="tertiary"
        size="small"
        disabled={
          [...filteredPurposes, ...creditCard, ...filteredTypes].length === 0 &&
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
        {creditCards.map(
          ({ id, name, numbers }) =>
            getCreditCardIds().includes(id) && (
              <Button key={id} variant="tertiary" size="small">
                <CreditCardIcon />
                {`${name} ${getEndingLastFourDigits(numbers, true)}`}
                <span
                  className={styles.removeFilter}
                  onClick={() =>
                    removeFilter('credit-card', id.toString() as CreditCardId)
                  }
                >
                  <XIcon />
                </span>
              </Button>
            )
        )}
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
