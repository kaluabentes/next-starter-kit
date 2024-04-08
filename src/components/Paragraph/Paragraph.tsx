"use client"

import { clsx } from "clsx"
import { ReactNode } from "react"

import styles from "./Paragraph.module.scss"

interface ParagraphProps {
  className?: string
  children: ReactNode
  weight?: "normal" | "medium" | "bold"
  variant?: "normal" | "muted"
}

const weights = {
  normal: styles.normalWeight,
  medium: styles.mediumWeight,
  bold: styles.boldWeight,
}

const variants = {
  normal: styles.normalVariant,
  muted: styles.mutedVariant,
}

export default function Paragraph({
  className,
  children,
  weight = "normal",
  variant = "normal",
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        styles.paragraph,
        weights[weight],
        variants[variant],
        className
      )}
    >
      {children}
    </p>
  )
}
