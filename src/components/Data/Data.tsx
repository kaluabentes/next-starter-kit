import clsx from "clsx"
import styles from "./Data.module.scss"

interface DataProps {
  className?: string
  label: string
  value: string
}

export default function Data({ label, value, className }: DataProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  )
}
