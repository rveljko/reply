import DropdownElement from '../../components/dropdown-element/dropdown-element'
import FilterButton from '../../components/filter-button/filter-button'
import ArrowsDownUpIcon from '../../icons/arrows-down-up-icon'
import CalendarIcon from '../../icons/calendar-icon'
import ChevronDownIcon from '../../icons/chevron-down-icon'
import GiftIcon from '../../icons/gift-icon'
import Section from '../section/section'
import styles from './filter-section.module.css'

export default function FiltersSection() {
  return (
    <Section>
      <h2>Filters</h2>
      <div className={styles.filters}>
        <FilterButton
          label="Date"
          icon={<CalendarIcon />}
          content={
            <DropdownElement icon={<CalendarIcon />} label="Date filters" />
          }
        />
        <FilterButton
          label="Purpose"
          icon={<GiftIcon />}
          content={
            <DropdownElement icon={<GiftIcon />} label="Purpose filters" />
          }
        />
        <FilterButton
          label="Sort by"
          icon={<ChevronDownIcon />}
          content={
            <DropdownElement icon={<ArrowsDownUpIcon />} label="Sortings" />
          }
        />
      </div>
    </Section>
  )
}
