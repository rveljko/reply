import { IMAGE_PATH } from '../utils/constants'
import generateDateInPast, {
  generateDateInFuture,
} from '../utils/helpers/date-generators'
import { CreditCard } from '../utils/types'

export const creditCards: CreditCard[] = [
  {
    id: 1,
    owner: 'James Williams',
    name: 'Visa',
    logo: `${IMAGE_PATH}visa.svg`,
    numbers: 4773887710161123,
    expirationDate: generateDateInFuture(294),
    cvv: 214,
    balance: [
      { amount: 81973.83, time: new Date() },
      { amount: 81973.83, time: generateDateInPast(1, 11, 25, 54) },
      { amount: 80773.83, time: generateDateInPast(2, 16, 30, 27) },
      { amount: 80797.83, time: generateDateInPast(3, 15, 57, 9) },
      { amount: 80797.83, time: generateDateInPast(4, 15, 57, 9) },
      { amount: 80797.83, time: generateDateInPast(5, 15, 57, 9) },
      { amount: 80797.83, time: generateDateInPast(6, 15, 57, 9) },
      { amount: 80797.83, time: generateDateInPast(7, 15, 57, 9) },
      { amount: 80797.83, time: generateDateInPast(8, 15, 57, 9) },
      { amount: 80797.83, time: generateDateInPast(9, 15, 57, 9) },
      { amount: 80797.83, time: generateDateInPast(10, 15, 57, 9) },
      { amount: 80797.83, time: generateDateInPast(11, 15, 57, 9) },
      { amount: 80810.82, time: generateDateInPast(11, 15, 22, 44) },
      { amount: 80833.81, time: generateDateInPast(11, 12, 37, 14) },
      { amount: 80818.82, time: generateDateInPast(11, 9, 4, 18) },
      { amount: 80828.82, time: generateDateInPast(12, 12, 30, 45) },
      { amount: 80828.82, time: generateDateInPast(13, 12, 30, 45) },
      { amount: 80828.82, time: generateDateInPast(14, 12, 30, 45) },
      { amount: 79311.82, time: generateDateInPast(15, 14, 39, 58) },
      { amount: 78486.82, time: generateDateInPast(15, 13, 18, 16) },
      { amount: 78499.81, time: generateDateInPast(16, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(17, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(18, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(19, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(20, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(21, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(22, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(23, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(24, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(25, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(26, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(27, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(28, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(29, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(30, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(31, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(32, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(33, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(34, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(35, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(36, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(37, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(38, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(39, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(40, 15, 57, 9) },
      { amount: 78499.81, time: generateDateInPast(41, 15, 57, 9) },
      { amount: 78512.8, time: generateDateInPast(41, 15, 22, 44) },
      { amount: 78535.79, time: generateDateInPast(41, 12, 37, 14) },
      { amount: 78559.79, time: generateDateInPast(72, 15, 57, 9) },
      { amount: 78572.78, time: generateDateInPast(72, 15, 22, 44) },
      { amount: 78595.77, time: generateDateInPast(72, 12, 37, 14) },
    ],
    expenses: [
      { amount: 72197.17, time: new Date() },
      { amount: 72197.17, time: generateDateInPast(1, 11, 25, 54) },
      { amount: 72197.17, time: generateDateInPast(2, 16, 30, 27) },
      { amount: 72173.17, time: generateDateInPast(3, 15, 57, 9) },
      { amount: 72173.17, time: generateDateInPast(4, 15, 57, 9) },
      { amount: 72173.17, time: generateDateInPast(5, 15, 57, 9) },
      { amount: 72173.17, time: generateDateInPast(6, 15, 57, 9) },
      { amount: 72173.17, time: generateDateInPast(7, 15, 57, 9) },
      { amount: 72173.17, time: generateDateInPast(8, 15, 57, 9) },
      { amount: 72173.17, time: generateDateInPast(9, 15, 57, 9) },
      { amount: 72173.17, time: generateDateInPast(10, 15, 57, 9) },
      { amount: 72173.17, time: generateDateInPast(11, 15, 57, 9) },
      { amount: 72137.19, time: generateDateInPast(11, 15, 22, 44) },
      { amount: 72129.19, time: generateDateInPast(11, 12, 37, 14) },
      { amount: 72119.19, time: generateDateInPast(11, 9, 4, 18) },
      { amount: 72119.19, time: generateDateInPast(12, 12, 30, 45) },
      { amount: 72119.19, time: generateDateInPast(13, 12, 30, 45) },
      { amount: 72119.19, time: generateDateInPast(14, 12, 30, 45) },
      { amount: 72119.19, time: generateDateInPast(15, 14, 39, 58) },
      { amount: 72119.19, time: generateDateInPast(15, 13, 18, 16) },
      { amount: 72106.2, time: generateDateInPast(16, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(17, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(18, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(19, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(20, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(21, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(22, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(23, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(24, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(25, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(26, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(27, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(28, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(29, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(30, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(31, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(32, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(33, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(34, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(35, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(36, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(37, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(38, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(39, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(40, 15, 57, 9) },
      { amount: 72106.2, time: generateDateInPast(41, 15, 57, 9) },
      { amount: 72093.21, time: generateDateInPast(41, 15, 22, 44) },
      { amount: 72083.21, time: generateDateInPast(41, 12, 37, 14) },
      { amount: 72059.21, time: generateDateInPast(72, 15, 57, 9) },
      { amount: 72046.22, time: generateDateInPast(72, 15, 22, 44) },
      { amount: 72023.23, time: generateDateInPast(72, 12, 37, 14) },
    ],
    isActive: true,
  },
  {
    id: 2,
    owner: 'James Williams',
    name: 'Mastercard',
    logo: `${IMAGE_PATH}mastercard.svg`,
    numbers: 5415438622581283,
    expirationDate: generateDateInFuture(721),
    cvv: 367,
    balance: [
      { amount: 91342.12, time: new Date() },
      { amount: 91342.12, time: generateDateInPast(1, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(2, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(3, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(4, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(5, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(6, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(7, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(8, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(9, 14, 11, 27) },
      { amount: 91342.12, time: generateDateInPast(10, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(11, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(12, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(13, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(14, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(15, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(16, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(17, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(18, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(19, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(20, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(21, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(22, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(23, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(24, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(25, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(26, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(27, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(28, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(29, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(30, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(31, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(32, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(33, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(34, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(35, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(36, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(37, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(38, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(39, 14, 11, 27) },
      { amount: 91353.11, time: generateDateInPast(40, 14, 11, 27) },
      { amount: 91364.1, time: generateDateInPast(71, 14, 11, 27) },
    ],
    expenses: [
      { amount: 35223.88, time: new Date() },
      { amount: 35223.88, time: generateDateInPast(1, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(2, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(3, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(4, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(5, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(6, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(7, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(8, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(9, 14, 11, 27) },
      { amount: 35223.88, time: generateDateInPast(10, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(11, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(12, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(13, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(14, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(15, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(16, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(17, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(18, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(19, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(20, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(21, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(22, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(23, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(24, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(25, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(26, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(27, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(28, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(29, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(30, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(31, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(32, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(33, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(34, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(35, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(36, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(37, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(38, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(39, 14, 11, 27) },
      { amount: 35212.89, time: generateDateInPast(40, 14, 11, 27) },
      { amount: 35201.9, time: generateDateInPast(71, 14, 11, 27) },
    ],
    isActive: true,
  },
  {
    id: 3,
    owner: 'James Williams',
    name: 'Visa',
    logo: `${IMAGE_PATH}visa.svg`,
    numbers: 4200478571331928,
    expirationDate: generateDateInFuture(1365),
    cvv: 593,
    balance: [
      { amount: 14823.37, time: new Date() },
      { amount: 14823.37, time: generateDateInPast(1, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(2, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(3, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(4, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(5, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(6, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(7, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(8, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(9, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(10, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(11, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(12, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(13, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(14, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(15, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(16, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(17, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(18, 10, 19, 50) },
      { amount: 14823.37, time: generateDateInPast(19, 10, 19, 50) },
      { amount: 14163.37, time: generateDateInPast(20, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(21, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(22, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(23, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(24, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(25, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(26, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(27, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(28, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(29, 13, 5, 48) },
      { amount: 14163.37, time: generateDateInPast(30, 13, 5, 48) },
      { amount: 14409.37, time: generateDateInPast(31, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(32, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(33, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(34, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(35, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(36, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(37, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(38, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(39, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(40, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(41, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(42, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(43, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(44, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(45, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(46, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(47, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(48, 13, 29, 56) },
      { amount: 14409.37, time: generateDateInPast(49, 13, 29, 56) },
      { amount: 13749.37, time: generateDateInPast(60, 16, 8, 52) },
      { amount: 13995.37, time: generateDateInPast(80, 9, 47, 18) },
      { amount: 13335.37, time: generateDateInPast(80, 9, 47, 18) },
    ],
    expenses: [
      { amount: 6867.63, time: new Date() },
      { amount: 6867.63, time: generateDateInPast(1, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(2, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(3, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(4, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(5, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(6, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(7, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(8, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(9, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(10, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(11, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(12, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(13, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(14, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(15, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(16, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(17, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(18, 10, 19, 50) },
      { amount: 6867.63, time: generateDateInPast(19, 10, 19, 50) },
      { amount: 6621.63, time: generateDateInPast(20, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(21, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(22, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(23, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(24, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(25, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(26, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(27, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(28, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(29, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(30, 13, 5, 48) },
      { amount: 6621.63, time: generateDateInPast(31, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(32, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(33, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(34, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(35, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(36, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(37, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(38, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(39, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(40, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(41, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(42, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(43, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(44, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(45, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(46, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(47, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(48, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(49, 13, 29, 56) },
      { amount: 6621.63, time: generateDateInPast(60, 16, 8, 52) },
      { amount: 6375.63, time: generateDateInPast(80, 9, 47, 18) },
      { amount: 6375.63, time: generateDateInPast(80, 9, 47, 18) },
    ],
    isActive: false,
  },
  {
    id: 4,
    owner: 'James Williams',
    name: 'Visa',
    logo: `${IMAGE_PATH}visa.svg`,
    numbers: 4619078215671827,
    expirationDate: generateDateInFuture(447),
    cvv: 229,
    balance: [
      { amount: 91806.28, time: new Date() },
      { amount: 91806.28, time: generateDateInPast(1, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(2, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(3, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(4, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(5, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(6, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(7, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(8, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(9, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(10, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(11, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(12, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(13, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(14, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(15, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(16, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(17, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(18, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(19, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(20, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(21, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(22, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(23, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(24, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(25, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(26, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(27, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(28, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(29, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(30, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(31, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(32, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(33, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(34, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(35, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(36, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(37, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(38, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(39, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(40, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(41, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(42, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(43, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(44, 14, 36, 29) },
      { amount: 91806.28, time: generateDateInPast(45, 14, 36, 29) },
      { amount: 90307.28, time: generateDateInPast(76, 15, 34, 27) },
    ],
    expenses: [
      { amount: 14338.72, time: new Date() },
      { amount: 14338.72, time: generateDateInPast(1, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(2, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(3, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(4, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(5, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(6, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(7, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(8, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(9, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(10, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(11, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(12, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(13, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(14, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(15, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(16, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(17, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(18, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(19, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(20, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(21, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(22, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(23, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(24, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(25, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(26, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(27, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(28, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(29, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(30, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(31, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(32, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(33, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(34, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(35, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(36, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(37, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(38, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(39, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(40, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(41, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(42, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(43, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(44, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(45, 14, 36, 29) },
      { amount: 14338.72, time: generateDateInPast(76, 15, 34, 27) },
    ],
    isActive: true,
  },
  {
    id: 5,
    owner: 'James Williams',
    name: 'Mastercard',
    logo: `${IMAGE_PATH}mastercard.svg`,
    numbers: 4773887710161432,
    expirationDate: generateDateInFuture(691),
    cvv: 214,
    balance: [
      { amount: 10778.57, time: new Date() },
      { amount: 10778.57, time: generateDateInPast(1, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(2, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(3, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(4, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(5, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(6, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(7, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(8, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(9, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(10, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(11, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(12, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(13, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(14, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(15, 11, 45, 21) },
      { amount: 10778.57, time: generateDateInPast(16, 11, 45, 21) },
      { amount: 11278.57, time: generateDateInPast(17, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(18, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(19, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(20, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(21, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(22, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(23, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(24, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(25, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(26, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(27, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(28, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(29, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(30, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(31, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(32, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(33, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(34, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(35, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(36, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(37, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(38, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(39, 16, 22, 56) },
      { amount: 11278.57, time: generateDateInPast(40, 16, 22, 56) },
    ],
    expenses: [
      { amount: 4311.43, time: new Date() },
      { amount: 4311.43, time: generateDateInPast(1, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(2, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(3, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(4, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(5, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(6, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(7, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(8, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(9, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(10, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(11, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(12, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(13, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(14, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(15, 11, 45, 21) },
      { amount: 4311.43, time: generateDateInPast(16, 11, 45, 21) },
      { amount: 3811.43, time: generateDateInPast(17, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(18, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(19, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(20, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(21, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(22, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(23, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(24, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(25, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(26, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(27, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(28, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(29, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(30, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(31, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(32, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(33, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(34, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(35, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(36, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(37, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(38, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(39, 16, 22, 56) },
      { amount: 3811.43, time: generateDateInPast(40, 16, 22, 56) },
    ],
    isActive: false,
  },
]
