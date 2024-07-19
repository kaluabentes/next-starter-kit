"use client"

import { clsx } from "clsx"
import { ReactNode } from "react"

import styles from "./Paragraph.module.scss"

interface ParagraphProps {
  className?: string
  children: ReactNode
  weight?: "normal" | "medium" | "bold"
  variant?: "normal" | "muted"
  size?: "normal" | "small"
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

const sizes = {
  normal: styles.sizeNormal,
  small: styles.sizeSmall,
}

export default function Paragraph({
  className,
  children,
  weight = "normal",
  variant = "normal",
  size = "normal",
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        styles.paragraph,
        weights[weight],
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </p>
  )
}
