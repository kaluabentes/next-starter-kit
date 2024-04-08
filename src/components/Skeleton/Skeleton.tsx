import clsx from "clsx"
import styles from "./Skeleton.module.scss"

interface SkeletonProps {
  className?: string
}

export default function Skeleton({ className }: SkeletonProps) {
  return <div className={clsx(styles.skeleton, className)} />
}
