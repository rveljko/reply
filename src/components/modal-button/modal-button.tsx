import Button, { ButtonProps } from '../button/button'
import Dialog from '../dialog/dialog'

type ModalButtonProps = ButtonProps & {
  label: string
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  isOpened: boolean
  openModal: () => void
  closeModal: () => void
}

export default function ModalButton({
  variant,
  size,
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isOpened,
  openModal,
  closeModal,
  children,
  ...props
}: ModalButtonProps) {
  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => openModal()}
        {...props}
      >
        {LeftIcon && LeftIcon}
        <span>{label}</span>
        {RightIcon && RightIcon}
      </Button>
      {isOpened && <Dialog closeModal={closeModal}>{children}</Dialog>}
    </>
  )
}
