import Button from '../button/button'
import Dialog from '../dialog/dialog'
import { ButtonProps } from '../button/button'
type ModalButtonProps = React.ComponentPropsWithoutRef<'button'> &
  ButtonProps & {
    dialogRef: React.RefObject<HTMLDialogElement>
    label: string
    icon?: JSX.Element
    rightIcon?: JSX.Element
  }

export default function ModalButton({
  variant,
  size,
  dialogRef,
  label,
  icon: Icon,
  rightIcon: RightIcon,
  children,
  className,
  ...props
}: ModalButtonProps) {
  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => {
          dialogRef.current?.showModal()
        }}
        {...props}
      >
        {Icon}
        <span>{label}</span>
        {RightIcon && RightIcon}
      </Button>
      <Dialog dialogRef={dialogRef}>{children}</Dialog>
    </>
  )
}
