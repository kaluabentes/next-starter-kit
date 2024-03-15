"use client"

import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Paper.module.scss"

interface PaperProps {
  className?: string
  children: ReactNode
}

export default function Paper({ children, className }: PaperProps) {
  return <div className={clsx(styles.paper, className)}>{children}</div>
}
