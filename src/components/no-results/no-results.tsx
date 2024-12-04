import useTransactionFilters from '../../hooks/use-transaction-filters'
import EraserIcon from '../../icons/eraser-icon'
import { IMAGE_PATH } from '../../utils/constants'
import Button from '../button/button'
import styles from './no-results.module.css'

type NoResultsProps = {
  withButton?: boolean
}

export default function NoResults({ withButton }: NoResultsProps) {
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
        We couldn't find any transactions that
        <br /> match what you are looking for
      </p>
      {withButton && (
        <Button variant="tertiary" size="small" onClick={() => clearFilters()}>
          <EraserIcon /> Clear Filters
        </Button>
      )}
    </div>
  )
}
