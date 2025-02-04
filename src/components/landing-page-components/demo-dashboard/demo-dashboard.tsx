import MyWalletPage from '../../../pages/my-wallet-page/my-wallet-page'
import Sidebar from '../../sidebar/sidebar'
import styles from './demo-dashboard.module.css'

export default function DemoDashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <div className={styles.sidebarWrapper}>
          <Sidebar className={styles.sidebar} />
        </div>
        <div className={styles.pageWrapper}>
          <div className={styles.container}>
            <MyWalletPage />
          </div>
        </div>
      </div>
    </div>
  )
}
