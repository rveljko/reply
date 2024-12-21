import { Charts } from '../../utils/types'
import ChartCard from '../chart-card/chart-card'
import styles from './chart-list.module.css'

export type ChartListProps = {
  charts: Charts[]
}

export default function ChartList({ charts }: ChartListProps) {
  return (
    <ul className={styles.list}>
      {charts.map(({ name, label, imageUrl }, index) => (
        <li key={index}>
          <ChartCard name={name} label={label} imageUrl={imageUrl} />
        </li>
      ))}
    </ul>
  )
}
