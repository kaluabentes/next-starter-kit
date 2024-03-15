import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Header.module.scss"

interface HeaderProps {
  className?: string
  children: ReactNode
}

export default function Header({ children, className }: HeaderProps) {
  return <header className={clsx(styles.header, className)}>{children}</header>
}
