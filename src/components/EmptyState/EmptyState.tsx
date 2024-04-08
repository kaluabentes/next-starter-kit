import { FaExclamationTriangle } from "react-icons/fa"

import styles from "./EmptyState.module.scss"
import Paper from "../Paper"

interface EmptyStateProps {
  message: string
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <Paper className={styles.container}>
      <FaExclamationTriangle />
      <p className={styles.message}>{message}</p>
    </Paper>
  )
}
