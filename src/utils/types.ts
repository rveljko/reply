type Base = {
  name: string
  image: string
}

export type Sender = Base
export type Receiver = Base

export type Type = 'Sent' | 'Received'

export type Purpose = 'Bills' | 'Gift' | 'Others' | 'Subscription'

export type Transaction = {
  senderName: Sender['name']
  senderImage: Sender['image']
  receiverName: Receiver['name']
  receiverImage: Receiver['image']
  amount: number
  purpose: Purpose
  type: Type
  message: string
  date: Date
}

export type Purposes = {
  id: number
  purpose: Purpose
}

export type Types = {
  id: number
  type: Type
}

export type TableTransactionHeader = {
  id: number
  label: string
}

export type FilterCategory = 'purpose' | 'type'

export type FilterKey = Purpose | Type
