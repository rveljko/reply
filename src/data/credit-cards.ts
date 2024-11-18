import { CreditCard } from '../utils/types'

export const creditCards: CreditCard[] = [
  {
    name: 'Visa',
    numbers: 4773887710161123,
    expirationDate: new Date('March 25, 2025'),
    cvv: 214,
    balance: 81973,
    expenses: 72197,
    isActive: true,
  },
  {
    name: 'Mastercard',
    numbers: 5415438622581283,
    expirationDate: new Date('May 26, 2026'),
    cvv: 367,
    balance: 91342,
    expenses: 35223,
    isActive: true,
  },
  {
    name: 'Visa',
    numbers: 4200478571331928,
    expirationDate: new Date('February 28, 2028'),
    cvv: 593,
    balance: 14823,
    expenses: 6867,
    isActive: false,
  },
  {
    name: 'Visa',
    numbers: 4619078215671827,
    expirationDate: new Date('August 25 2025'),
    cvv: 229,
    balance: 91806,
    expenses: 14338,
    isActive: true,
  },
  {
    name: 'Mastercard',
    numbers: 4773887710161432,
    expirationDate: new Date('April 26 2026'),
    cvv: 214,
    balance: 10778,
    expenses: 4311,
    isActive: false,
  },
]
