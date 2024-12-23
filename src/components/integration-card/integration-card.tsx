import { Integration } from '../../utils/types'
import Switch from '../switch/switch'
import styles from './integration-card.module.css'

type IntegrationCardProps = Integration

export default function IntegrationCard({
  name,
  description,
  logoUrl,
}: IntegrationCardProps) {
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
      <Switch />
    </article>
  )
}
