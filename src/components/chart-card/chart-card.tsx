import { useCharts } from '../../utils/contexts/charts-context'
import { Charts } from '../../utils/types'
import PreferencesCard from '../preferences-card/preferences-card'
import styles from './chart-card.module.css'

type ChartCardProps = Charts

export default function ChartCard({ name, label, imageUrl }: ChartCardProps) {
  const { chart, setChart } = useCharts()

  return (
    <button className={styles.button} onClick={() => setChart(name)}>
      <PreferencesCard
        imageUrl={imageUrl}
        label={label}
        isActive={name === chart}
      />
    </button>
  )
}
