import DropdownElement from '../../components/dropdown-element/dropdown-element'
import FilterButton from '../../components/filter-button/filter-button'
import GiftIcon from '../../icons/gift-icon'
import Section from '../section/section'
import styles from './filter-section.module.css'
import { purposes } from '../../data/purposes'
import { useTransactions } from '../../utils/contexts/transactions-context'
import { useEffect, useState } from 'react'
import { Purpose, Transaction } from '../../utils/types'

type FiltersSectionProps = {
  setFilteredTransactions: (transactions: Transaction[]) => void
}

export default function FiltersSection({
  setFilteredTransactions,
}: FiltersSectionProps) {
  const { transactions } = useTransactions()
  const [filters, setFilters] = useState<Purpose[]>([])

  useEffect(() => {
    if (filters.length > 0) {
      setFilteredTransactions(
        filters
          .map((filter) =>
            transactions.filter((transaction) => transaction.purpose === filter)
          )
          .flat()
      )
    } else {
      setFilteredTransactions([...transactions])
    }
  }, [filters])

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
                  onClick={() => {
                    setFilters(
                      filters.includes(purpose)
                        ? filters.filter((filter) => filter !== purpose)
                        : [...filters, purpose]
                    )
                  }}
                />
              ))}
            </>
          }
        />
      </div>
    </Section>
  )
}
