import styles from './input.module.css'

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  label: string
  icon?: JSX.Element
  placeholder: string
  optional?: boolean
}

export default function Input({
  label,
  icon: Icon,
  placeholder,
  optional,
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
          type="text"
          id={label.split(' ').join('').toLocaleLowerCase()}
          placeholder={placeholder}
          className={styles.input}
          required={!optional}
          {...props}
        />
      </div>
    </div>
  )
}
