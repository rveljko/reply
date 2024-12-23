import IntegrationsSection from '../../sections/integrations-section/integrations-section'
import { useIntegrations } from '../../utils/contexts/integrations-context'

export default function IntegrationsPage() {
  const { getSortedIntegrations } = useIntegrations()

  return <IntegrationsSection integrations={getSortedIntegrations()} />
}
