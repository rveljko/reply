import CalendarIcon from '../../icons/calendar-icon'
import GiftIcon from '../../icons/gift-icon'
import Tag from '../tag/tag'
import styles from './transaction-informations.module.css'

type TransactionInformationsProps = {
  image: string
  name: string
  date: string
  identificator: 'From' | 'To'
  purpose?: string
}

export default function TransactionInformations({
  image,
  name,
  date,
  identificator,
  purpose,
}: TransactionInformationsProps) {
  return (
    <div className={styles.informations}>
      <div>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div>
        <p>{identificator}</p>
        <h4 className={styles.name}>{name}</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Tag>
              <CalendarIcon />
              <span>{date}</span>
            </Tag>
          </li>
          {purpose && (
            <li className={styles.item}>
              <Tag>
                <GiftIcon />
                <span>{purpose}</span>
              </Tag>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
