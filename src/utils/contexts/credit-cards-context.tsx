import { createContext, useContext, useEffect, useState } from 'react'
import { creditCards as creditCardsData } from '../../data/credit-cards'
import { CreditCard } from '../types'

type CreditCardsContextProviderProps = {
  children: React.ReactNode
}

type CreditCardsContextType = {
  creditCards: CreditCard[]
  getCreditCardById: (id: number) => CreditCard | undefined
  getCreditCardBalance: (creditCard: CreditCard) => number
  getCreditCardExpenses: (creditCard: CreditCard) => number
  activeCreditCards: CreditCard[]
  updateBalanceAndExpenses: (creditCard: CreditCard, amount: number) => void
}

export const CreditCardsContext = createContext<CreditCardsContextType | null>(
  null
)

function getInitialCreditCards() {
  const creditCards = localStorage.getItem('credit-cards')
  return creditCards ? JSON.parse(creditCards) : creditCardsData
}

export default function CreditCardsContextProvider({
  children,
}: CreditCardsContextProviderProps) {
  const [creditCards, setCreditCards] = useState<CreditCard[]>(
    getInitialCreditCards
  )

  useEffect(() => {
    localStorage.setItem(
      'credit-cards',
      JSON.stringify([...creditCards].sort((a, b) => a.id - b.id))
    )
  }, [creditCards])

  const activeCreditCards = creditCards.filter(({ isActive }) => isActive)

  function getCreditCardById(id: number) {
    return creditCards.find((creditCard) => creditCard.id === id)
  }

  function getCreditCardBalance(creditCard: CreditCard) {
    return creditCard.balance
  }

  function getCreditCardExpenses(creditCard: CreditCard) {
    return creditCard.expenses
  }

  function updateBalanceAndExpenses(creditCard: CreditCard, amount: number) {
    setCreditCards((prevCreditCards) => {
      const matchingCreditCard = prevCreditCards.find(
        ({ id }) => id === creditCard.id
      ) as CreditCard

      return [
        ...prevCreditCards.filter(({ id }) => id !== matchingCreditCard.id),
        {
          ...matchingCreditCard,
          balance: matchingCreditCard.balance - amount,
          expenses: matchingCreditCard.expenses + amount,
        },
      ]
    })
  }

  return (
    <CreditCardsContext.Provider
      value={{
        creditCards,
        activeCreditCards,
        getCreditCardById,
        getCreditCardBalance,
        getCreditCardExpenses,
        updateBalanceAndExpenses,
      }}
    >
      {children}
    </CreditCardsContext.Provider>
  )
}

export const useCreditCards = () => {
  const context = useContext(CreditCardsContext)
  if (!context) {
    throw new Error(
      'useCreditCards must be within a CreditCardsContextProvider'
    )
  }

  return context
}
