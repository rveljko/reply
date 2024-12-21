import { useTheme } from '../../utils/contexts/theme-context'
import { Themes } from '../../utils/types'
import PreferencesCard from '../preferences-card/preferences-card'
import styles from './theme-card.module.css'

type ThemeCardProps = Themes

export default function ThemeCard({ name, label, imageUrl }: ThemeCardProps) {
  const { theme, setTheme } = useTheme()

  return (
    <button className={styles.button} onClick={() => setTheme(name)}>
      <PreferencesCard
        imageUrl={imageUrl}
        label={label}
        isActive={name === theme}
      />
    </button>
  )
}
