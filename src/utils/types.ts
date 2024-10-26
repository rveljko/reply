type Base = {
  name: string
  image: string
}

export type Sender = Base
export type Receiver = Base

export type Transaction = {
  senderName: Sender['name']
  senderImage: Sender['image']
  receiverName: Receiver['name']
  receiverImage: Receiver['image']
  amount: number
  purpose: string
  message: string
  date: Date
}

export type TableTransactionHeader = {
  id: number
  label: string
}