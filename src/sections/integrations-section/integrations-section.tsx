import Button from '../../components/button/button'
import IntegrationList from '../../components/integration-list/integration-list'
import { integrations } from '../../data/integrations'
import Section from '../section/section'
import styles from './integrations-section.module.css'

export default function IntegrationsSection() {
  return (
    <Section>
      <h2>Connected Applications</h2>
      <div className={styles.integrationListWrapper}>
        <IntegrationList integrations={integrations} />
      </div>
      <Button variant="primary" size="large">
        Save Changes
      </Button>
    </Section>
  )
}
