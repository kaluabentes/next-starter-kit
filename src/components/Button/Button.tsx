"use client"

import clsx from "clsx"
import Link from "next/link"
import { ReactNode } from "react"

import Spinner from "@/components/Spinner"

import styles from "./Button.module.scss"

interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "ghost"
  type?: "submit" | "reset" | "button"
  className?: string
  children: ReactNode
  href?: string
  onClick?: () => void
  isLoading?: boolean
  isInline?: boolean
  isDiv?: boolean
}

const BUTTON_VARIANTS: { [key: string]: string } = {
  primary: styles.primary,
  secondary: styles.secondary,
  success: styles.success,
  ghost: styles.ghost,
}

export default function Button({
  variant = "primary",
  type = "button",
  children,
  className,
  href,
  onClick,
  isLoading,
  isInline,
  isDiv = false,
}: ButtonProps) {
  const classNameString = clsx(
    styles.button,
    isInline && styles.inline,
    BUTTON_VARIANTS[variant],
    className
  )

  if (isDiv) {
    return (
      <div className={classNameString}>
        {isLoading ? <Spinner /> : children}
      </div>
    )
  }

  if (href) {
    return (
      <Link className={classNameString} href={href}>
        {isLoading ? <Spinner /> : children}
      </Link>
    )
  }

  return (
    <button type={type} className={classNameString} onClick={onClick}>
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
