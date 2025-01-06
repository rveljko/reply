import { Helmet } from 'react-helmet-async'
import { TITLE_PREFIX } from '../../utils/constants'

export default function GuidesPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Guides</title>
      </Helmet>
      <div>Guides Page</div>
    </>
  )
}
