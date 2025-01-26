import { useParams } from 'react-router-dom'
import getGuide from '../../utils/helpers/get-guide'
import NotFoundPage from '../not-found-page/not-found-page'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { TITLE_PREFIX } from '../../utils/constants'
import GuideSection from '../../sections/guide-section/guide-section'

export default function GuidePage() {
  const [guideContent, setGuideContent] = useState('')
  const { title } = useParams()
  const guide = getGuide(title)

  if (!guide) {
    return <NotFoundPage />
  }

  useEffect(() => {
    fetch(guide.path)
      .then((res) => res.text())
      .then((text) => setGuideContent(text))
  }, [guide])

  return (
    <>
      <Helmet>
        <title>
          {TITLE_PREFIX} {guide.title}
        </title>
      </Helmet>
      <GuideSection content={guideContent} />
    </>
  )
}
