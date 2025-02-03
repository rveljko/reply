import Markdown from 'react-markdown'
import styles from './markdown-content-loader.module.css'

type MarkdowContentLoaderProps = {
  content: string
}

export default function MarkdowContentLoader({
  content,
}: MarkdowContentLoaderProps) {
  return (
    <Markdown
      components={{
        h2: ({ node, ...props }) => (
          <h2 className={styles.headingTwo} {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className={styles.headingThree} {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className={styles.headingFour} {...props} />
        ),
        ul: ({ node, ...props }) => <ul className={styles.list} {...props} />,
        li: ({ node, ...props }) => <li className={styles.item} {...props} />,
        p: ({ node, ...props }) => (
          <p className={styles.paragraph} {...props} />
        ),
      }}
    >
      {content}
    </Markdown>
  )
}
