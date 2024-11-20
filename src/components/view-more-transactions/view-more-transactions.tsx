import { Link } from 'react-router-dom'
import { DASHBOARD_ROUTE } from '../../utils/constants'
import styles from './view-more-transactions.module.css'

export default function ViewMoreTransactions() {
  return (
    <div className={styles.wrapper}>
      <Link to={`${DASHBOARD_ROUTE}recent-transactions`} className={styles.link}>
        View More Transactions
      </Link>
    </div>
  )
}
