export function onlyLettersMask(value: string) {
  return value.replace(/[^A-Za-z\s]/g, '')
}

export function onlyNumbersMask(value: string) {
  return value.replace(/\D/g, '')
}

export function creditCardExpirationDateMask(value: string) {
  const date = value.replace(/\D/g, '')

  if (date.length <= 2) return date

  return `${date.slice(0, 2)}/${date.slice(2, 4)}`
}

export function creditCardNumbersMask(value: string) {
  const numbers = value.replace(/\D/g, '')

  if (numbers.length <= 4) return numbers

  if (numbers.length <= 8) {
    return `${numbers.slice(0, 4)} ${numbers.slice(4)}`
  }
  if (numbers.length <= 12) {
    return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8)}`
  }

  return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(
    8,
    12
  )} ${numbers.slice(12)}`
}
