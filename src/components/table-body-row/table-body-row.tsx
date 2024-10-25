import styles from './table-body-row.module.css'

type TableBodyRowProps = React.ComponentPropsWithoutRef<'tr'> & {
  children: React.ReactNode
}

export default function TableBodyRow({
  children,
  ...props
}: TableBodyRowProps) {
  return (
    <tr className={styles.row} {...props}>
      {children}
    </tr>
  )
}
