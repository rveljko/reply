import useTransactionFilters from '../../hooks/use-transaction-filters'
import EraserIcon from '../../icons/eraser-icon'
import { IMAGE_PATH } from '../../utils/constants'
import Button from '../button/button'
import styles from './no-results.module.css'

export default function NoResults() {
  const { clearFilters } = useTransactionFilters()

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
      <Button variant="tertiary" size="small" onClick={() => clearFilters()}>
        <EraserIcon /> Clear Filters
      </Button>
    </div>
  )
}
