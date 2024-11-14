import DropdownElement from '../../components/dropdown-element/dropdown-element'
import FilterButton from '../../components/filter-button/filter-button'
import GiftIcon from '../../icons/gift-icon'
import Section from '../section/section'
import styles from './filter-section.module.css'
import { purposes } from '../../data/purposes'
import { types } from '../../data/types'
import ArrowsDownUpIcon from '../../icons/arrows-down-up-icon'
import useTransactionFilters from '../../hooks/use-transaction-filters'

export default function FiltersSection() {
  const { setFilter, handleCheckbox } = useTransactionFilters()

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
    </Section>
  )
}
