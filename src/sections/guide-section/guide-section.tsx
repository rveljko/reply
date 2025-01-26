import styles from './guide-section.module.css'
import Markdown from 'react-markdown'
import Section from '../section/section'

type GuideSectionProps = {
  content: string
}

export default function GuideSection({ content }: GuideSectionProps) {
  return (
    <Section className={styles.section}>
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
    </Section>
  )
}
