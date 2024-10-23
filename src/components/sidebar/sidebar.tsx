import { Link, NavLink } from 'react-router-dom'
import Logo from '../logo/logo'
import { DASHBOARD_ROUTE } from '../../helpers/constants'
import { dashboardRoutes } from '../../helpers/routes'
import { useState } from 'react'
import SidebarLeftExpandIcon from '../../icons/sidebar-left-expand-icon'
import SidebarLeftCollapseIcon from '../../icons/sidebar-left-collapse-icon'
import styles from './sidebar.module.css'
import Button from '../button/button'
import ArrowUpRightIcon from '../../icons/arrow-up-right-icon'

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(true)

  return (
    <aside className={`${styles.sidebar} ${isOpened ? styles.active : ''}`}>
      <div className={styles.content}>
        <div className={styles.head}>
          <Link to={DASHBOARD_ROUTE}>
            <Logo showText={isOpened} />
          </Link>
          <Button
            variant="ghost"
            size="small"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            {isOpened ? <SidebarLeftCollapseIcon /> : <SidebarLeftExpandIcon />}
          </Button>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Button variant="primary" size="small" className={styles.button}>
                <ArrowUpRightIcon />
                <span>Send Money</span>
              </Button>
            </li>
            {dashboardRoutes
              .slice(0, -2)
              .map(({ id, href, name, icon: Icon }) => (
                <li key={id} className={styles.item}>
                  <NavLink
                    className={({ isActive }: { isActive: boolean }) => {
                      return `${styles.link} ${isActive ? styles.active : ''}`
                    }}
                    to={`${DASHBOARD_ROUTE}${href}`}
                    end
                  >
                    <Icon />
                    <span>{name}</span>
                  </NavLink>
                </li>
              ))}
          </ul>
          <ul className={styles.list}>
            {dashboardRoutes.slice(-2).map(({ id, href, name, icon: Icon }) => (
              <li key={id} className={styles.item}>
                <NavLink
                  className={({ isActive }: { isActive: boolean }) => {
                    return `${styles.link} ${isActive ? styles.active : ''}`
                  }}
                  to={`${DASHBOARD_ROUTE}${href}`}
                  end
                >
                  <Icon />
                  <span>{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
