import styles from './container.module.css'

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}
