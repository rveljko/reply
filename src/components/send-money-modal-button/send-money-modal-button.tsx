import { useState } from 'react'
import ModalButton from '../modal-button/modal-button'
import SendMoneyModal from '../send-mone-modal/send-money-modal'
import { ButtonProps } from '../button/button'

type SendMoneyModalButtonProps = Omit<ButtonProps, 'children'> & {
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
  const [isOpened, setIsOpened] = useState(false)

  function openModal() {
    setIsOpened((prev) => !prev)
  }

  function closeModal() {
    setIsOpened((prev) => !prev)
  }

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
