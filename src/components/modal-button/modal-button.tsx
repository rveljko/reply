import { useRef,  } from 'react'
import Button from '../button/button'
import Dialog from '../dialog/dialog'

type ModalButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  label: string
  icon: JSX.Element
  modal: JSX.Element
}

export default function ModalButton({
  label,
  icon: Icon,
  modal: Modal,
  className,
}: ModalButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <Button
        variant="primary"
        size="small"
        className={className}
        onClick={() => {
          dialogRef.current?.showModal()
        }}
      >
        {Icon}
        <span>{label}</span>
      </Button>
      <Dialog ref={dialogRef}>{Modal}</Dialog>
    </>
  )
}
