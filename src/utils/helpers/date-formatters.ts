export function longDateFormatter(dateString: string) {
  const date = new Date(dateString)

  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}

export function mediumDateFormatter(dateString: string) {
  const date = new Date(dateString)

  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}

export function shortDateFormatter(dateString: string) {
  const date = new Date(dateString)

  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}
