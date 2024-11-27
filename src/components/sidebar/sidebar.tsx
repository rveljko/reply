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
  const sidebarRef = useRef<HTMLElement>(null)

  function handleOnClick(e: MouseEvent) {
    if (window.screen.width <= 768) {
      if (sidebarRef.current && !e.composedPath().includes(sidebarRef.current))
        setIsOpened(false)
    }
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.ctrlKey && e.code === 'KeyB') setIsOpened((prev) => !prev)
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOnClick)
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('click', handleOnClick)
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [])

  useEffect(() => {
    setIsOpened(isBigScreen ? true : false)
  }, [isBigScreen])

  return (
    <aside
      ref={sidebarRef}
      className={`${styles.sidebar} ${isOpened ? styles.active : ''}`}
    >
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
                variant="primary"
                size="small"
                dialogRef={dialogRef}
                label="Send Money"
                icon={<ArrowUpRightIcon />}
                className={styles.button}
              >
                <SendMoneyModal dialogRef={dialogRef} />
              </ModalButton>
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
