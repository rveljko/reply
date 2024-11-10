import { IMAGE_PATH } from '../../utils/constants'
import styles from './no-results.module.css'

export default function NoResults() {
  return (
    <div className={styles.wrapper}>
      <img
        src={`${IMAGE_PATH}no-results.png`}
        alt=""
        className={styles.image}
      />
      <h3 className={styles.heading}>No Results Found</h3>
      <p className={styles.paragraph}>
        We couldn't find any transactions that match <br /> your current filter
        criteria
      </p>
    </div>
  )
}
