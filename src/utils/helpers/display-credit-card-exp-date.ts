export default function displayCreditCardExpDate(dateString: string) {
  const date = new Date(dateString)
  return `${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getDate()}`
}
