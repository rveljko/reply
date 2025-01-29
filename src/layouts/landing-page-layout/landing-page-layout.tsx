import { Outlet } from 'react-router-dom'
import Header from '../../components/header/header'
import styles from './landing-page-layout.module.css'

export default function LandingPageLayout() {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  )
}
