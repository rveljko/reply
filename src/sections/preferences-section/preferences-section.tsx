import Button from '../../components/button/button'
import ChartList from '../../components/chart-list/chart-list'
import ThemeList from '../../components/theme-list/theme-list'
import { charts } from '../../data/charts'
import { themes } from '../../data/themes'
import Section from '../section/section'
import styles from './preferences-section.module.css'

export default function PreferencesSection() {
  return (
    <Section>
      <h2>Themes</h2>
      <div className={styles.themeListWrapper}>
        <ThemeList themes={themes} />
      </div>
      <h2>Charts</h2>
      <div className={styles.chartListWrapper}>
        <ChartList charts={charts} />
      </div>
      <Button variant="primary" size="large">
        Save Changes
      </Button>
    </Section>
  )
}
