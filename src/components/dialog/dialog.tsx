type DialogProps = {
  children: React.ReactNode
  dialogRef: React.RefObject<HTMLDialogElement>
}

export default function Dialog({ children, dialogRef }: DialogProps) {
  return (
    <dialog
      onClick={(e) => {
        if (e.currentTarget === e.target) dialogRef.current?.close()
      }}
      ref={dialogRef}
    >
      {children}
    </dialog>
  )
}
