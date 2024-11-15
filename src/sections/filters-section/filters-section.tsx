import DropdownElement from '../../components/dropdown-element/dropdown-element'
import FilterButton from '../../components/filter-button/filter-button'
import GiftIcon from '../../icons/gift-icon'
import Section from '../section/section'
import styles from './filter-section.module.css'
import { purposes } from '../../data/purposes'
import { types } from '../../data/types'
import ArrowsDownUpIcon from '../../icons/arrows-down-up-icon'
import useTransactionFilters from '../../hooks/use-transaction-filters'
import { transactions } from '../../data/transactions'
import Button from '../../components/button/button'
import EraserIcon from '../../icons/eraser-icon'
import XIcon from '../../icons/x-icon'

export default function FiltersSection() {
  const {
    filteredTransactions,
    purpose: filteredPurposes,
    type: filteredTypes,
    setFilter,
    removeFilter,
    clearFilters,
    handleCheckbox,
  } = useTransactionFilters()

  return (
    <Section>
      <h2>Filters</h2>
      <div className={styles.filters}>
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
                  name="purposes"
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
                  name="types"
                  readOnly
                  checked={handleCheckbox(type)}
                  onClick={() => setFilter('type', type)}
                />
              ))}
            </>
          }
        />
      </div>
      <div className={styles.results}>
        <h3 className={styles.resultsHeading}>
          Showing {filteredTransactions.length} of {transactions.length} results
        </h3>
        <div className={styles.appliedFilters}>
          <Button
            variant="tertiary"
            size="small"
            disabled={[...filteredPurposes, ...filteredTypes].length === 0}
            onClick={() => clearFilters()}
          >
            <EraserIcon />
            Clear Filters
          </Button>
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
        </div>
      </div>
    </Section>
  )
}
