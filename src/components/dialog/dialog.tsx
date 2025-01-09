import { useEffect } from 'react'
import styles from './dialog.module.css'
import ReactFocusLock, { AutoFocusInside } from 'react-focus-lock'
import { createPortal } from 'react-dom'

type DialogProps = {
  children: React.ReactNode
  closeModal: () => void
}

export default function Dialog({ children, closeModal }: DialogProps) {
  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') closeModal()
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [])

  return createPortal(
    <div id="backdrop" className={styles.backdrop} onClick={() => closeModal()}>
      <ReactFocusLock returnFocus>
        <AutoFocusInside>
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </AutoFocusInside>
      </ReactFocusLock>
    </div>,
    document.getElementById('root')!
  )
}
