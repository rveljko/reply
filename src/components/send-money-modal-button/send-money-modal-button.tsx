import ModalButton from '../modal-button/modal-button'
import SendMoneyModal from '../send-mone-modal/send-money-modal'
import { ButtonProps } from '../button/button'
import useModal from '../../hooks/use-modal'

type SendMoneyModalButtonProps = ButtonProps & {
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

export default function SendMoneyModalButton({
  variant,
  size,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}: SendMoneyModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <ModalButton
      label="Send Money"
      variant={variant}
      size={size}
      leftIcon={LeftIcon}
      rightIcon={RightIcon}
      isOpened={isOpened}
      openModal={openModal}
      closeModal={closeModal}
      {...props}
    >
      <SendMoneyModal closeModal={closeModal} />
    </ModalButton>
  )
}
