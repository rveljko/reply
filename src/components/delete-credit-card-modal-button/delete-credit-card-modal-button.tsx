import ModalButton from '../modal-button/modal-button'
import { ButtonProps } from '../button/button'
import DeleteCreditCardModal from '../delete-credit-card-modal/delete-credit-card-modal'
import useModal from '../../hooks/use-modal'

type DeleteCreditCardModalButtonProps = ButtonProps & {
  creditCardIndex: number
  setCreditCardIndex?: React.Dispatch<React.SetStateAction<number>>
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

export default function DeleteCreditCardModalButton({
  variant,
  size,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  creditCardIndex,
  setCreditCardIndex,
  ...props
}: DeleteCreditCardModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <ModalButton
      label="Remove"
      variant={variant}
      size={size}
      leftIcon={LeftIcon}
      rightIcon={RightIcon}
      isOpened={isOpened}
      openModal={openModal}
      closeModal={closeModal}
      {...props}
    >
      <DeleteCreditCardModal
        closeModal={closeModal}
        creditCardIndex={creditCardIndex}
        setCreditCardIndex={setCreditCardIndex}
      />
    </ModalButton>
  )
}
