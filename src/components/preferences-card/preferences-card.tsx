import styles from './preferences-card.module.css'

type PreferencesCardProps = {
  label: string
  imageUrl: string
}

export default function PreferencesCard({
  label,
  imageUrl,
}: PreferencesCardProps) {
  return (
    <article>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="" />
      </div>
      <p className={styles.label}>{label}</p>
    </article>
  )
}
