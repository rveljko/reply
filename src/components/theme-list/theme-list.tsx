import { Themes } from '../../utils/types'
import ThemeCard from '../theme-card/theme-card'
import styles from './theme-list.module.css'

export type ThemeListProps = {
  themes: Themes[]
}

export default function ThemeList({ themes }: ThemeListProps) {
  return (
    <ul className={styles.list}>
      {themes.map(({ label, imageUrl, name }, index) => (
        <li key={index}>
          <ThemeCard name={name} label={label} imageUrl={imageUrl} />
        </li>
      ))}
    </ul>
  )
}
