import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar'
import styles from './app-layout.module.css'
import Container from '../../components/container/container'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <ToastContainer />
    </div>
  )
}
