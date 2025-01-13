import { useSearchParams } from 'react-router-dom'

export default function useTransaction() {
  const [searchParams, setSearchParams] = useSearchParams()
  const transactionId = searchParams.get('transaction')

  function removeTransactionId(id: string) {
    setSearchParams((prevParams) => {
      prevParams.delete('transaction', id)
      return prevParams
    })
  }

  return { transactionId, removeTransactionId }
}
