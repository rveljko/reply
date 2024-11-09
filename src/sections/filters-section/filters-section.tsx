import DropdownElement from '../../components/dropdown-element/dropdown-element'
import FilterButton from '../../components/filter-button/filter-button'
import GiftIcon from '../../icons/gift-icon'
import Section from '../section/section'
import styles from './filter-section.module.css'
import { purposes } from '../../data/purposes'
import { useTransactions } from '../../utils/contexts/transactions-context'
import { useEffect, useState } from 'react'
import { Filter, Transaction } from '../../utils/types'
import { types } from '../../data/types'
import ArrowsDownUpIcon from '../../icons/arrows-down-up-icon'

type FiltersSectionProps = {
  setFilteredTransactions: (transactions: Transaction[]) => void
}

export default function FiltersSection({
  setFilteredTransactions,
}: FiltersSectionProps) {
  const { transactions } = useTransactions()
  const [filters, setFilters] = useState<Filter[]>([])

  useEffect(() => {
    if (filters.length > 0) {
      const filteringPurposes = filters
        .filter((filter) => filter.category === 'purpose')
        .map((filter) => filter.key)

      const filteringTypes = filters
        .filter((filter) => filter.category === 'type')
        .map((filter) => filter.key)

      setFilteredTransactions(
        transactions.filter((transaction) => {
          const matchesPurpose =
            filteringPurposes.length === 0 ||
            filteringPurposes.includes(transaction.purpose)

          const matchesType =
            filteringTypes.length === 0 ||
            filteringTypes.includes(transaction.type)

          return matchesPurpose && matchesType
        })
      )
    } else {
      setFilteredTransactions([...transactions])
    }
  }, [filters, transactions])

  function setFilter(category: Filter['category'], key: Filter['key']) {
    setFilters((prevFilters) => {
      if (
        prevFilters.some(
          (filter) => filter.category === category && filter.key === key
        )
      ) {
        return prevFilters.filter(
          (filter) => !(filter.category === category && filter.key === key)
        )
      }

      return [...prevFilters, { category, key } as Filter]
    })
  }

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
