"use client"

import clsx from "clsx"
import { ChangeEvent, ForwardedRef, forwardRef } from "react"

import styles from "./TextArea.module.scss"

interface TextAreaProps {
  className?: string
  id: string
  label?: string
  placeholder?: string
  error?: string
  value?: string
  name?: string
  isDisabled?: boolean
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = forwardRef(function TextArea(
  {
    className,
    id,
    label,
    placeholder,
    error,
    value,
    name,
    isDisabled,
    onChange,
  }: TextAreaProps,
  ref
) {
  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        disabled={isDisabled}
        onChange={onChange}
        value={value}
        className={styles.input}
        id={id}
        name={name}
        placeholder={placeholder}
        ref={ref as ForwardedRef<HTMLTextAreaElement | null>}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
})

export default TextArea
