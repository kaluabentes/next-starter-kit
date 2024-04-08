import * as AlertDialogBase from "@radix-ui/react-alert-dialog"

import styles from "./AlertDialog.module.scss"
import Button from "../Button"

interface AlertDialogProps {
  isOpen?: boolean
  isLoading?: boolean
  title?: string
  description?: string
  rejectText?: string
  confirmText?: string
  onReject?: () => void
  onConfirm?: () => void
}

export default function AlertDialog({
  isOpen = false,
  isLoading = false,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
  rejectText = "Cancelar",
  confirmText = "Confirmar",
  onReject,
  onConfirm,
}: AlertDialogProps) {
  return (
    <AlertDialogBase.Root open={isOpen}>
      <AlertDialogBase.Portal>
        <AlertDialogBase.Overlay className={styles.overlay} />
        <AlertDialogBase.Content className={styles.content}>
          <AlertDialogBase.Title className={styles.title}>
            {title}
          </AlertDialogBase.Title>
          <AlertDialogBase.Description className={styles.description}>
            {description}
          </AlertDialogBase.Description>
          <div className={styles.actions}>
            {!isLoading && (
              <AlertDialogBase.Cancel asChild>
                <Button onClick={onReject} variant="secondary" isInline>
                  {rejectText}
                </Button>
              </AlertDialogBase.Cancel>
            )}
            <AlertDialogBase.Action asChild>
              <Button onClick={onConfirm} isInline isLoading={isLoading}>
                {confirmText}
              </Button>
            </AlertDialogBase.Action>
          </div>
        </AlertDialogBase.Content>
      </AlertDialogBase.Portal>
    </AlertDialogBase.Root>
  )
}
