import { cva, VariantProps } from 'class-variance-authority'
import styles from './button.module.css'
import { Link } from 'react-router-dom'

const button = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      tertiary: styles.tertiary,
      ghost: styles.ghost,
      danger: styles.danger,
    },
    size: {
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
  },
})

type ButtonBaseProps = VariantProps<typeof button> & {
  children: React.ReactNode
  icon?: JSX.Element
}

type ButtonAsAnchorProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string
}

type ButtonAsButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: never
}

export type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps)

export default function Button({
  className,
  variant,
  size,
  children,
  icon,
  ...props
}: ButtonProps) {
  const buttonClasses = button({ variant, size, className })

  if ('href' in props && props.href !== undefined) {
    return (
      <Link to={props.href} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
