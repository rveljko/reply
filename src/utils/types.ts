type Base = {
  name: string
  image: string
}

export type Sender = Base
export type Receiver = Base

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
  name: 'Visa' | 'Mastercard'
  logo: string
  numbers: number
  expirationDate: Date
  cvv: number
  balance: number
  expenses: number
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

export type FilterCategory = 'purpose' | 'type' | 'credit-card'

export type FilterKey = Purpose | Type | CreditCardId
