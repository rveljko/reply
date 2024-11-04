import { Link } from 'react-router-dom'
import Logo from '../logo/logo'
import { DASHBOARD_ROUTE } from '../../utils/constants'
import { dashboardRoutes } from '../../utils/routes'
import { useEffect, useRef, useState } from 'react'
import SidebarLeftExpandIcon from '../../icons/sidebar-left-expand-icon'
import SidebarLeftCollapseIcon from '../../icons/sidebar-left-collapse-icon'
import styles from './sidebar.module.css'
import Button from '../button/button'
import ArrowUpRightIcon from '../../icons/arrow-up-right-icon'
import NavigationLink from '../navigation-link/navigation-link'
import { useMediaQuery } from 'react-responsive'
import ModalButton from '../modal-button/modal-button'
import SendMoneyModal from '../send-mone-modal/send-money-modal'

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(false)
  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    setIsOpened(isBigScreen ? true : false)
  }, [isBigScreen])

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
              <ModalButton
                dialogRef={dialogRef}
                label="Send Money"
                icon={<ArrowUpRightIcon />}
                modal={<SendMoneyModal dialogRef={dialogRef} />}
                className={styles.button}
              />
            </li>
            {dashboardRoutes
              .slice(0, -2)
              .map(({ id, href, name, icon: Icon }) => (
                <li key={id} className={styles.item}>
                  <NavigationLink
                    icon={<Icon />}
                    label={name}
                    to={`${DASHBOARD_ROUTE}${href}`}
                    className={styles.link}
                  />
                </li>
              ))}
          </ul>
          <ul className={styles.list}>
            {dashboardRoutes.slice(-2).map(({ id, href, name, icon: Icon }) => (
              <li key={id} className={styles.item}>
                <NavigationLink
                  icon={<Icon />}
                  label={name}
                  to={`${DASHBOARD_ROUTE}${href}`}
                  className={styles.link}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
