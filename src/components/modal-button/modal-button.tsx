import Button from '../button/button'
import Dialog from '../dialog/dialog'

type ModalButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  dialogRef: React.RefObject<HTMLDialogElement>
  label: string
  icon: JSX.Element
  modal: JSX.Element
}

export default function ModalButton({
  dialogRef,
  label,
  icon: Icon,
  modal: Modal,
  className,
}: ModalButtonProps) {
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
      <Dialog dialogRef={dialogRef}>{Modal}</Dialog>
    </>
  )
}
