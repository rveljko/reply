import { createContext, useContext, useEffect, useState } from 'react'
import { creditCards as creditCardsData } from '../../data/credit-cards'
import { CreditCard } from '../types'

type CreditCardsContextProviderProps = {
  children: React.ReactNode
}

type CreditCardsContextType = {
  creditCards: CreditCard[]
  activeCreditCards: CreditCard[]
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
    localStorage.setItem('credit-cards', JSON.stringify(creditCards))
  }, [creditCards])

  const activeCreditCards = creditCards.filter(
    (creditCard) => creditCard.isActive
  )

  return (
    <CreditCardsContext.Provider value={{ creditCards, activeCreditCards }}>
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
