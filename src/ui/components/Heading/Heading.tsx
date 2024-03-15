"use client"

import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Heading.module.scss"

interface HeadingProps {
  className?: string
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

interface ElementProps {
  children: ReactNode
  className?: string
}

const levels = {
  1: styles.h1,
  2: styles.h2,
  3: styles.h3,
  4: styles.h4,
  5: styles.h5,
  6: styles.h6,
}

const elements = {
  1: ({ children, className }: ElementProps) => (
    <h1 className={className}>{children}</h1>
  ),
  2: ({ children, className }: ElementProps) => (
    <h2 className={className}>{children}</h2>
  ),
  3: ({ children, className }: ElementProps) => (
    <h3 className={className}>{children}</h3>
  ),
  4: ({ children, className }: ElementProps) => (
    <h4 className={className}>{children}</h4>
  ),
  5: ({ children, className }: ElementProps) => (
    <h5 className={className}>{children}</h5>
  ),
  6: ({ children, className }: ElementProps) => (
    <h6 className={className}>{children}</h6>
  ),
}

export default function Heading({
  className,
  children,
  level = 2,
}: HeadingProps) {
  const Component = elements[level]

  return (
    <Component className={clsx(styles.base, levels[level], className)}>
      {children}
    </Component>
  )
}
