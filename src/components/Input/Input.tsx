"use client"

import clsx from "clsx"
import { ChangeEvent, ForwardedRef, forwardRef } from "react"

import styles from "./Input.module.scss"

interface InputProps {
  className?: string
  id: string
  label?: string
  placeholder?: string
  error?: string
  value?: string
  name?: string
  type?: string
  isDisabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef(function Input(
  {
    className,
    id,
    label,
    placeholder,
    error,
    value,
    name,
    type,
    isDisabled,
    onChange,
  }: InputProps,
  ref
) {
  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        disabled={isDisabled}
        onChange={onChange}
        value={value}
        className={styles.input}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref as ForwardedRef<HTMLInputElement | null>}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
})

export default Input
