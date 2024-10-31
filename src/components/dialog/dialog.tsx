import { forwardRef } from 'react'

type DialogProps = {
  children: React.ReactNode
}

export default forwardRef<HTMLDialogElement, DialogProps>(function Dialog(
  { children },
  ref
) {
  return <dialog ref={ref}>{children}</dialog>
})
