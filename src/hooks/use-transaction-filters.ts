import { FilterCategory, FilterKey, Purpose, Type } from '../utils/types'
import { useTransactions } from '../utils/contexts/transactions-context'
import { useSearchParams } from 'react-router-dom'

export default function useTransactionFilters() {
  const { transactions } = useTransactions()
  const [searchParams, setSearchParams] = useSearchParams()

  const purpose = searchParams.getAll('purpose') as Purpose[]
  const type = searchParams.getAll('type') as Type[]

  const filteredTransactions = transactions.filter((transaction) => {
    const purposes = !purpose.length || purpose.includes(transaction.purpose)
    const types = !type.length || type.includes(transaction.type)

    return purposes && types
  })

  function setFilter(category: FilterCategory, key: FilterKey) {
    setSearchParams((prevParams) => {
      if (prevParams.has(category)) {
        const keys = prevParams.getAll(category) as FilterKey[]

        if (keys.includes(key)) {
          prevParams.delete(category, key)
        } else {
          prevParams.append(category, key)
        }
      } else {
        prevParams.append(category, key)
      }

      return prevParams
    })
  }

  function removeFilter(category: FilterCategory, key: FilterKey) {
    setSearchParams((prevParams) => {
      prevParams.delete(category, key)
      return prevParams
    })
  }

  function clearFilters() {
    setSearchParams({})
  }

  function handleCheckbox(key: FilterKey): boolean {
    return [...purpose, ...type].includes(key)
  }

  return {
    filteredTransactions,
    purpose,
    type,
    setFilter,
    removeFilter,
    clearFilters,
    handleCheckbox,
  }
}
