import { useEffect, useState } from 'react'

export default function useFetchMarkdown(path: string) {
  const [markdown, setMarkdown] = useState(path)

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])

  return markdown
}
