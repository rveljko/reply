import { Outlet } from 'react-router-dom'
import Header from '../../components/header/header'
import styles from './landing-page-layout.module.css'
import Footer from '../../components/footer/footer'

export default function LandingPageLayout() {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main className={styles.layout}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
