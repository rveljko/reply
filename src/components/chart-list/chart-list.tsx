import { Chart } from '../../utils/types'
import PreferencesCard from '../preferences-card/preferences-card'
import styles from './chart-list.module.css'

export type ChartListProps = {
  charts: Chart[]
}

export default function ChartList({ charts }: ChartListProps) {
  return (
    <ul className={styles.list}>
      {charts.map(({ label, imageUrl }, index) => (
        <li key={index}>
          <PreferencesCard label={label} imageUrl={imageUrl} />
        </li>
      ))}
    </ul>
  )
}
