import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar'
import styles from './app-layout.module.css'
import Container from '../../components/container/container'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PostHogPageviewTracker from '../../components/post-hog-pageview-tracker/post-hog-pageview-tracker'

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main>
        <Container>
          <PostHogPageviewTracker />
          <Outlet />
        </Container>
      </main>
      <ToastContainer />
    </div>
  )
}
