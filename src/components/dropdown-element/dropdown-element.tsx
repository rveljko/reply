import styles from './dropdown-element.module.css'

type DropdownElementProps = React.ComponentPropsWithoutRef<'input'> & {
  type: 'text' | 'checkbox' | 'radio'
  label: string
}

export default function DropdownElement({
  type,
  label,
  ...props
}: DropdownElementProps) {
  return (
    <div className={styles.element}>
      <input
        className={styles.input}
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
