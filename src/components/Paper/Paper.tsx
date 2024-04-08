"use client"

import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Paper.module.scss"

interface PaperProps {
  className?: string
  children: ReactNode
  padding?: boolean
}

export default function Paper({
  children,
  className,
  padding = false,
}: PaperProps) {
  return (
    <div className={clsx(styles.paper, padding && styles.padding, className)}>
      {children}
    </div>
  )
}
