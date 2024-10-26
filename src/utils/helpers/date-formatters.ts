export function longDateFormatter(date: Date) {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}

export function mediumDateFormatter(date: Date) {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}

export function shortDateFormatter(date: Date) {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}
