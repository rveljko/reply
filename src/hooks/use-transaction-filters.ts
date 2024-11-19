import {
  CreditCardId,
  FilterCategory,
  FilterKey,
  Purpose,
  Type,
} from '../utils/types'
import { useTransactions } from '../utils/contexts/transactions-context'
import { useSearchParams } from 'react-router-dom'

export default function useTransactionFilters() {
  const { transactions } = useTransactions()
  const [searchParams, setSearchParams] = useSearchParams()

  const purpose = searchParams.getAll('purpose') as Purpose[]
  const type = searchParams.getAll('type') as Type[]
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

  function clearFilters() {
    setSearchParams({})
  }

  return {
    filteredTransactions,
    dateFrom,
    dateTo,
    purpose,
    creditCard,
    type,
    getCreditCardIds,
    setDateFilter,
    setFilter,
    removeDate,
    removeFilter,
    clearFilters,
  }
}
