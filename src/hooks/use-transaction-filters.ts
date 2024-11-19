import {
  CreditCardId,
  FilterCategory,
  FilterKey,
  Purpose,
  Sort,
  Type,
} from '../utils/types'
import { useTransactions } from '../utils/contexts/transactions-context'
import { useSearchParams } from 'react-router-dom'

export default function useTransactionFilters() {
  const { transactions } = useTransactions()
  const [searchParams, setSearchParams] = useSearchParams()

  const purpose = searchParams.getAll('purpose') as Purpose[]
  const type = searchParams.getAll('type') as Type[]
  const sort = searchParams.get('sort') as Sort
  const dateFrom = searchParams.get('date-from')
  const dateTo = searchParams.get('date-to')
  const creditCard = searchParams.getAll('credit-card') as CreditCardId[]

  const filteredTransactions = transactions.filter((transaction) => {
    const purposes = !purpose.length || purpose.includes(transaction.purpose)
    const types = !type.length || type.includes(transaction.type)
    const startDate =
      !dateFrom ||
      new Date(transaction.date).getTime() >= new Date(dateFrom).getTime()
    const endDate =
      !dateTo ||
      new Date(transaction.date).getTime() <= new Date(dateTo).getTime()
    const creditCards =
      !creditCard.length ||
      getCreditCardIds().includes(transaction.creditCard.id)

    return purposes && types && startDate && endDate && creditCards
  })

  function getCreditCardIds() {
    return creditCard.map((id) => parseInt(id))
  }

  function setDateFilter(category: 'date-from' | 'date-to', key: string) {
    setSearchParams((prevParams) => {
      prevParams.set(category, key)
      return prevParams
    })
  }

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

  function removeDate(category: 'date-from' | 'date-to', key: string) {
    setSearchParams((prevParams) => {
      prevParams.delete(category, key)
      return prevParams
    })
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
    return [...purpose, ...creditCard, ...type, sort].includes(key)
  }

  return {
    filteredTransactions,
    dateFrom,
    dateTo,
    purpose,
    creditCard,
    type,
    sort,
    getCreditCardIds,
    setDateFilter,
    setFilter,
    setSort,
    sortTransactions,
    removeDate,
    removeFilter,
    removeSort,
    clearFilters,
    handleCheckbox,
  }
}
