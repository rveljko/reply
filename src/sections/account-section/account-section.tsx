import Button from '../../components/button/button'
import Input from '../../components/input/input'
import MailIcon from '../../icons/mail-icon'
import PhoneIcon from '../../icons/phone-icon'
import UserIcon from '../../icons/user-icon'
import { IMAGE_PATH } from '../../utils/constants'
import Section from '../section/section'
import styles from './account-section.module.css'

export default function AccountSection() {
  return (
    <Section>
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
          <form className={styles.inputs}>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                label="First Name"
                icon={<UserIcon />}
                value="James"
                className={styles.input}
                readOnly
              />
              <Input
                type="text"
                label="Last Name"
                icon={<UserIcon />}
                value="Williams"
                className={styles.input}
                readOnly
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                label="Email Address"
                icon={<MailIcon />}
                value="jameswilliams@reply.com"
                className={styles.input}
                readOnly
              />
              <Input
                type="text"
                label="Phone Number"
                icon={<PhoneIcon />}
                value="+1 (912) 259-3425"
                className={styles.input}
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
      <Button variant="primary" size="large">
        Save Changes
      </Button>
    </Section>
  )
}
