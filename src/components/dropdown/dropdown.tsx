import styles from './dropdown.module.css'

type DropdownProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

export default function Dropdown({
  children,
  className,
  ...props
}: DropdownProps) {
  return (
    <div className={`${styles.dropdown} ${className}`} {...props}>
      {children}
    </div>
  )
}
