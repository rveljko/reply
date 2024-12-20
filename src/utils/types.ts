type Base = {
  name: string
  image: string
}

export type Sender = Base
export type Receiver = Base

export type Route = {
  id: number
  name: string
  href: string
  icon?: () => JSX.Element
  page: () => JSX.Element
}

export type Type = 'Sent' | 'Received'

export type Purpose = 'Bills' | 'Gift' | 'Others' | 'Subscription'

export type Sort =
  | 'Price-Asc'
  | 'Price-Desc'
  | 'Name-Asc'
  | 'Name-Desc'
  | 'Date-Asc'
  | 'Date-Desc'

export type CreditCard = {
  id: number
  owner: string
  name: 'Visa' | 'Mastercard'
  logo: string
  numbers: number
  expirationDate: Date
  cvv: number
  balance: CreditCardBalance[]
  expenses: CreditCardExpense[]
  isActive: boolean
}

export type Transaction = {
  id: number
  senderName: Sender['name']
  senderImage: Sender['image']
  receiverName: Receiver['name']
  receiverImage: Receiver['image']
  amount: number
  purpose: Purpose
  type: Type
  message: string
  date: Date
  creditCard: CreditCard
}

export type Purposes = {
  id: number
  purpose: Purpose
}

export type Types = {
  id: number
  type: Type
}

export type Sortings = {
  id: number
  sort: Sort
  label: string
}

export type TableTransactionHeader = {
  id: number
  label: string
}

export type CreditCardId =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'

export type CreditCardBalance = {
  amount: number
  time: Date
}

export type CreditCardExpense = {
  amount: number
  time: Date
}

export type FilterCategory = 'purpose' | 'type' | 'credit-card'

export type FilterKey = Purpose | Type | CreditCardId

export type Theme = {
  label: 'System Preference' | 'Light' | 'Dark'
  imageUrl: string
}

export type Chart = {
  label: 'Line' | 'Bar'
  imageUrl: string
}
