import AddNewCreditCardModal from '../add-new-credit-card-modal/add-new-credit-card-modal'
import { ButtonProps } from '../button/button'
import ModalButton from '../modal-button/modal-button'
import useModal from '../../hooks/use-modal'

type AddNewCreditCardModalButtonProps = Omit<ButtonProps, 'children'> & {
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

export default function AddNewCreditCardModalButton({
  variant,
  size,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}: AddNewCreditCardModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <ModalButton
      label="Add New"
      variant={variant}
      size={size}
      leftIcon={LeftIcon}
      rightIcon={RightIcon}
      isOpened={isOpened}
      openModal={openModal}
      closeModal={closeModal}
      {...props}
    >
      <AddNewCreditCardModal closeModal={closeModal} />
    </ModalButton>
  )
}
