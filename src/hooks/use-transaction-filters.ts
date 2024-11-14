import { useEffect, useState } from 'react'
import { FilterCategory, FilterKey, Purpose, Type } from '../utils/types'
import { useTransactions } from '../utils/contexts/transactions-context'
import { useSearchParams } from 'react-router-dom'

export default function useTransactionFilters() {
  const { transactions } = useTransactions()
  const [filteredTransactions, setFilteredTransactions] = useState(transactions)
  const [searchParams, setSearchParams] = useSearchParams()

  const purpose = searchParams.getAll('purpose') as Purpose[]
  const type = searchParams.getAll('type') as Type[]

  useEffect(() => {
    if (purpose.length > 0 || type.length > 0) {
      setFilteredTransactions(
        transactions.filter((transaction) => {
          const purposes =
            !purpose.length || purpose.includes(transaction.purpose)
          const types = !type.length || type.includes(transaction.type)

          return purposes && types
        })
      )
    } else {
      setFilteredTransactions([...transactions])
    }
  }, [transactions, searchParams])

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

  function clearFilters() {
    setSearchParams({})
  }

  function handleCheckbox(key: FilterKey): boolean {
    return [...purpose, ...type].includes(key)
  }

  return { filteredTransactions, setFilter, handleCheckbox, clearFilters }
}
