import { Helmet } from 'react-helmet-async'
import TermsOfServiceSection from '../../sections/terms-of-service-section/terms-of-service-section'
import { TITLE_PREFIX } from '../../utils/constants'
import { useEffect, useState } from 'react'

export default function TermsOfServicePage() {
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    fetch('/terms-of-service.md')
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text))
  }, [])
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Terms of Service</title>
      </Helmet>
      <TermsOfServiceSection content={markdownContent} />
    </>
  )
}
