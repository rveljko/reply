import { useEffect, useRef, useState } from 'react'
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
  const wrapperRef = useRef<HTMLDivElement>(null)

  function handleOnClick(e: MouseEvent) {
    if (wrapperRef.current && !e.composedPath().includes(wrapperRef.current))
      setIsDropdownOpened(false)
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') setIsDropdownOpened(false)
  }

  useEffect(() => {
    if (!isDropdownOpened) return
    document.body.addEventListener('click', handleOnClick)
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('click', handleOnClick)
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isDropdownOpened])

  return (
    <div ref={wrapperRef}>
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
