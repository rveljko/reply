import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar'
import styles from './app-layout.module.css'
import Container from '../../components/container/container'

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}
