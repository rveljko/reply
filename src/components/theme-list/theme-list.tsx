import { Theme } from '../../utils/types'
import PreferencesCard from '../preferences-card/preferences-card'
import styles from './theme-list.module.css'

export type ThemeListProps = {
  themes: Theme[]
}

export default function ThemeList({ themes }: ThemeListProps) {
  return (
    <ul className={styles.list}>
      {themes.map(({ label, imageUrl }, index) => (
        <li key={index}>
          <PreferencesCard label={label} imageUrl={imageUrl} />
        </li>
      ))}
    </ul>
  )
}
