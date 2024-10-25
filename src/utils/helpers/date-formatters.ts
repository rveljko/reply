export function longDateFormatters(date: Date) {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}
export function shortDateFormatter(date: Date) {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}
