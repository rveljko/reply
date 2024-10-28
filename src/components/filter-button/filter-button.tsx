import { useState } from 'react'
import Button from '../button/button'
import Dropdown from '../dropdown/dropdown'
import styles from './filter-button.module.css'

type FilterButtonProps = {
  label: string
  icon?: JSX.Element
  content: React.ReactNode
}

export default function FilterButton({
  label,
  icon: Icon,
  content,
}: FilterButtonProps) {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  return (
    <div>
      <Button
        className={styles.button}
        variant="secondary"
        size="medium"
        onClick={() => setIsDropdownOpened((prev) => !prev)}
      >
        {label} {Icon}
      </Button>
      {isDropdownOpened && (
        <Dropdown className={styles.dropdown}>{content}</Dropdown>
      )}
    </div>
  )
}
