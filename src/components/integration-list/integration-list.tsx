import { Integration } from '../../utils/types'
import IntegrationCard from '../integration-card/integration-card'
import styles from './integration-list.module.css'

export type IntegrationListProps = {
  integrations: Integration[]
}

export default function IntegrationList({
  integrations,
}: IntegrationListProps) {
  return (
    <ul className={styles.list}>
      {integrations.map(({ id, name, description, logoUrl, isActive }) => (
        <li key={id}>
          <IntegrationCard
            id={id}
            name={name}
            description={description}
            logoUrl={logoUrl}
            isActive={isActive}
          />
        </li>
      ))}
    </ul>
  )
}
