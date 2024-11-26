export default function displayCreditCardCvv(numbers: number) {
  return numbers.toString().replace(/./g, '*')
}
