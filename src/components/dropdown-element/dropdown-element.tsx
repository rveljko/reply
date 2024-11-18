import styles from './dropdown-element.module.css'

type DropdownElementProps = React.ComponentPropsWithoutRef<'input'> & {
  type: 'text' | 'checkbox' | 'radio' | 'date'
  label: string
}

export default function DropdownElement({
  type,
  label,
  ...props
}: DropdownElementProps) {
  return (
    <div className={`${styles.element} ${type === 'date' ? styles.date : ''}`}>
      <input
        className={type === 'date' ? '' : styles.input}
        type={type}
        id={label.split(' ').join('').toLocaleLowerCase()}
        {...props}
      />
      <label
        className={styles.label}
        htmlFor={label.split(' ').join('').toLocaleLowerCase()}
      >
        {label}
      </label>
    </div>
  )
}
