import { useIntegrations } from '../../utils/contexts/integrations-context'
import { Integration } from '../../utils/types'
import Switch from '../switch/switch'
import styles from './integration-card.module.css'

type IntegrationCardProps = Integration

export default function IntegrationCard({
  id,
  name,
  description,
  logoUrl,
  isActive,
}: IntegrationCardProps) {
  const { updateActiveIntegration } = useIntegrations()

  return (
    <article className={styles.card}>
      <div className={styles.informations}>
        <div className={styles.logoWrapper}>
          <img src={logoUrl} alt="" />
        </div>
        <div>
          <p className={styles.title}>{name}</p>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
      <Switch checked={isActive} onChange={() => updateActiveIntegration(id)} />
    </article>
  )
}
