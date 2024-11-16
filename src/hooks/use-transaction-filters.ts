import { FilterCategory, FilterKey, Purpose, Sort, Type } from '../utils/types'
import { useTransactions } from '../utils/contexts/transactions-context'
import { useSearchParams } from 'react-router-dom'

export default function useTransactionFilters() {
  const { transactions } = useTransactions()
  const [searchParams, setSearchParams] = useSearchParams()

  const purpose = searchParams.getAll('purpose') as Purpose[]
  const type = searchParams.getAll('type') as Type[]
  const sort = searchParams.get('sort') as Sort

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

  function setSort(key: Sort) {
    setSearchParams((prevParams) => {
      prevParams.set('sort', key)
      return prevParams
    })
  }

  function sortTransactions() {
    switch (sort) {
      case 'Name-Asc':
        return filteredTransactions.sort((a, b) => {
          if (a.receiverName < b.receiverName) return -1
          if (a.receiverName > b.receiverName) return 1
          return 0
        })
      case 'Name-Desc':
        return filteredTransactions.sort((a, b) => {
          if (b.receiverName < a.receiverName) return -1
          if (b.receiverName > a.receiverName) return 1
          return 0
        })
      case 'Price-Asc':
        return filteredTransactions.sort((a, b) => a.amount - b.amount)
      case 'Price-Desc':
        return filteredTransactions.sort((a, b) => b.amount - a.amount)
      case 'Date-Asc':
        return filteredTransactions.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      case 'Date-Desc':
        return filteredTransactions.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      default:
        return filteredTransactions
    }
  }

  function removeFilter(category: FilterCategory, key: FilterKey) {
    setSearchParams((prevParams) => {
      prevParams.delete(category, key)
      return prevParams
    })
  }

  function removeSort(key: Sort) {
    setSearchParams((prevParams) => {
      prevParams.delete('sort', key)
      return prevParams
    })
  }

  function clearFilters() {
    setSearchParams({})
  }

  function handleCheckbox(key: FilterKey | Sort): boolean {
    return [...purpose, ...type, sort].includes(key)
  }

  return {
    filteredTransactions,
    purpose,
    type,
    sort,
    setFilter,
    setSort,
    sortTransactions,
    removeFilter,
    removeSort,
    clearFilters,
    handleCheckbox,
  }
}
