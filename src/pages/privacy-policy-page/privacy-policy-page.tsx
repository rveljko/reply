import { Helmet } from 'react-helmet-async'
import PrivacyPolicySection from '../../sections/privacy-policy-section/privacy-policy-section'
import { TITLE_PREFIX } from '../../utils/constants'
import { useEffect, useState } from 'react'

export default function PrivacyPolicyPage() {
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    fetch('/privacy-policy.md')
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text))
  }, [])

  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Privacy Policy</title>
      </Helmet>
      <PrivacyPolicySection content={markdownContent} />
    </>
  )
}
