import styles from './text-area.module.css'

type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'>

export default function TextArea({ ...props }: TextAreaProps) {
  return <textarea className={styles.textarea} readOnly {...props}></textarea>
}
