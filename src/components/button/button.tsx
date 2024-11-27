import { cva, VariantProps } from 'class-variance-authority'
import styles from './button.module.css'

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

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof button> & {
    children: React.ReactNode
    icon?: JSX.Element
    onClick?: () => void
  }

export default function Button({
  className,
  variant,
  size,
  children,
  icon,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={button({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  )
}
