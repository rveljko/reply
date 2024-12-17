import styles from './input.module.css'

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  type: 'text' | 'number' | 'month' | 'tel'
  label: string
  icon?: JSX.Element
  placeholder?: string
  optional?: boolean
}

export default function Input({
  type,
  label,
  icon: Icon,
  placeholder,
  optional,
  className,
  ...props
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={label.split(' ').join('').toLocaleLowerCase()}
        className={styles.label}
      >
        {label}
        {optional && <span className={styles.optional}>(optional)</span>}
      </label>
      <div className={styles.iconWrapper}>
        {Icon}
        <input
          type={type}
          id={label.split(' ').join('').toLocaleLowerCase()}
          placeholder={placeholder}
          className={`${styles.input} ${className}`}
          required={!optional}
          {...props}
        />
      </div>
    </div>
  )
}
