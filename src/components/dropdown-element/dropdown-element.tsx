import styles from './dropdown-element.module.css'

type DropdownElementProps = {
  icon: JSX.Element
  label: string
}

export default function DropdownElement({
  icon: Icon,
  label,
}: DropdownElementProps) {
  return (
    <button className={styles.element}>
      {Icon} <span>{label}</span>
    </button>
  )
}
