import { createContext, useContext, useEffect, useState } from 'react'
import { creditCards as creditCardsData } from '../../data/credit-cards'
import { CreditCard } from '../types'

type CreditCardsContextProviderProps = {
  children: React.ReactNode
}

type CreditCardsContextType = {
  creditCards: CreditCard[]
  getCreditCardById: (id: number) => CreditCard
  getCreditCardByIndex: (index: number) => CreditCard
  getCreditCardBalance: (creditCard: CreditCard) => number
  getCreditCardExpenses: (creditCard: CreditCard) => number
  activeCreditCards: CreditCard[]
  getSortedCreditCards: () => CreditCard[]
  changeCreditCardStatus: (id: number) => void
  removeCreditCard: (index: number) => void
  addNewCreditCard: (newCreditCard: CreditCard) => void
  updateBalanceAndExpenses: (
    creditCard: CreditCard,
    amount: number,
    time: Date
  ) => void
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

  const activeCreditCards = getSortedCreditCards().filter(
    ({ isActive }) => isActive
  )

  function getCreditCardById(id: number) {
    return creditCards.find((creditCard) => creditCard.id === id)!
  }

  function getCreditCardByIndex(index: number) {
    return creditCards[index]
  }

  function getCreditCardBalance(creditCard: CreditCard) {
    return creditCard.balance[0].amount
  }

  function getCreditCardExpenses(creditCard: CreditCard) {
    return creditCard.expenses[0].amount
  }

  function getSortedCreditCards() {
    return creditCards.sort((a, b) => a.id - b.id)
  }

  function changeCreditCardStatus(id: number) {
    const matchingCreditCard = getCreditCardById(id)

    setCreditCards((prevCreditCards) => [
      ...prevCreditCards.filter(({ id }) => id !== matchingCreditCard.id),
      { ...matchingCreditCard, isActive: !matchingCreditCard.isActive },
    ])
  }

  function removeCreditCard(cardIndex: number) {
    setCreditCards((prevCreditCards) =>
      prevCreditCards.filter((_, index) => index !== cardIndex)
    )
  }

  function addNewCreditCard(newCreditCard: CreditCard) {
    setCreditCards((prevCreditCards) => [
      ...prevCreditCards,
      { ...newCreditCard, id: creditCards[creditCards.length - 1].id + 1 },
    ])
  }

  function updateBalanceAndExpenses(
    creditCard: CreditCard,
    amount: number,
    time: Date
  ) {
    setCreditCards((prevCreditCards) => {
      const matchingCreditCard = prevCreditCards.find(
        ({ id }) => id === creditCard.id
      )!

      return [
        ...prevCreditCards.filter(({ id }) => id !== matchingCreditCard.id),
        {
          ...matchingCreditCard,
          balance: [
            {
              amount: matchingCreditCard.balance[0].amount - amount,
              time,
            },
            ...matchingCreditCard.balance,
          ],
          expenses: [
            {
              amount: matchingCreditCard.expenses[0].amount + amount,
              time,
            },
            ...matchingCreditCard.expenses,
          ],
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
        getCreditCardByIndex,
        getCreditCardBalance,
        getCreditCardExpenses,
        getSortedCreditCards,
        changeCreditCardStatus,
        removeCreditCard,
        addNewCreditCard,
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
