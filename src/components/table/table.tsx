import styles from './table.module.css'

type TableProps = React.ComponentPropsWithoutRef<'table'> & {
  children: React.ReactNode
}

export default function Table({ children, ...props }: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table} {...props}>
        {children}
      </table>
    </div>
  )
}
