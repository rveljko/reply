import { useState } from 'react'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import MailIcon from '../../icons/mail-icon'
import PhoneIcon from '../../icons/phone-icon'
import UserIcon from '../../icons/user-icon'
import { IMAGE_PATH } from '../../utils/constants'
import Section from '../section/section'
import styles from './account-section.module.css'
import { useUserInformations } from '../../utils/contexts/user-informations-context'
import {
  onlyLettersMask,
  phoneMask,
  phoneMaskCleaner,
} from '../../utils/helpers/input-masks'
import { UserInformations } from '../../utils/types'
import displayToast from '../../utils/toast'

export default function AccountSection() {
  const { userInformations, updateUserInformations } = useUserInformations()

  const initialFormFields = {
    firstName: userInformations.firstName,
    lastName: userInformations.lastName,
    emailAddress: userInformations.emailAddress,
    phoneNumber: phoneMask(userInformations.phoneNumber.toString()),
  }

  const initialUserInformations: UserInformations = {
    firstName: userInformations.firstName,
    lastName: userInformations.lastName,
    emailAddress: userInformations.emailAddress,
    phoneNumber: userInformations.phoneNumber,
  }

  const [formFields, setFormFields] = useState(initialFormFields)
  const [newUserInformations, setNewUserInformations] = useState(
    initialUserInformations
  )

  const isButtonDisabled =
    (newUserInformations.firstName === userInformations.firstName &&
      newUserInformations.lastName === userInformations.lastName &&
      newUserInformations.emailAddress === userInformations.emailAddress &&
      newUserInformations.phoneNumber === userInformations.phoneNumber) ||
    newUserInformations.phoneNumber.toString().length < 10

  return (
    <Section>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          updateUserInformations(newUserInformations)
          displayToast('User Information Updated Successfully!')
        }}
      >
        <div className={styles.head}>
          <div className={styles.profilePicture}>
            <h2>Profile Picture</h2>
            <div className={styles.profilePicureImageWrapper}>
              <img
                src={`${IMAGE_PATH}james-williams.png`}
                alt=""
                className={styles.profilePictureImage}
              />
            </div>
          </div>
          <div>
            <h2>User Informations</h2>
            <div className={styles.inputs}>
              <div className={styles.inputGroup}>
                <Input
                  type="text"
                  label="First Name"
                  icon={<UserIcon />}
                  value={formFields.firstName}
                  minLength={0}
                  onChange={(e) => {
                    setFormFields({
                      ...formFields,
                      firstName: onlyLettersMask(e.target.value),
                    })
                    setNewUserInformations({
                      ...newUserInformations,
                      firstName: onlyLettersMask(e.target.value),
                    })
                  }}
                  className={styles.input}
                />
                <Input
                  type="text"
                  label="Last Name"
                  icon={<UserIcon />}
                  value={formFields.lastName}
                  minLength={0}
                  onChange={(e) => {
                    setFormFields({
                      ...formFields,
                      lastName: onlyLettersMask(e.target.value),
                    })
                    setNewUserInformations({
                      ...newUserInformations,
                      lastName: onlyLettersMask(e.target.value),
                    })
                  }}
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <Input
                  type="email"
                  label="Email Address"
                  icon={<MailIcon />}
                  minLength={13}
                  value={formFields.emailAddress}
                  onChange={(e) => {
                    setFormFields({
                      ...formFields,
                      emailAddress: e.target.value,
                    })
                    setNewUserInformations({
                      ...newUserInformations,
                      emailAddress: e.target.value,
                    })
                  }}
                  className={styles.input}
                />
                <Input
                  type="tel"
                  label="Phone Number"
                  icon={<PhoneIcon />}
                  minLength={0}
                  value={formFields.phoneNumber}
                  onChange={(e) => {
                    setFormFields({
                      ...formFields,
                      phoneNumber: phoneMask(e.target.value),
                    })
                    setNewUserInformations({
                      ...newUserInformations,
                      phoneNumber: phoneMaskCleaner(e.target.value),
                    })
                  }}
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          size="large"
          type="submit"
          disabled={isButtonDisabled}
        >
          Save Changes
        </Button>
      </form>
    </Section>
  )
}
