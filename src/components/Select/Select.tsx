"use client"

import clsx from "clsx"
import { ChangeEvent, ForwardedRef, forwardRef, ReactNode } from "react"

import styles from "./Select.module.scss"

interface SelectProps {
  className?: string
  id: string
  label?: string
  placeholder?: string
  error?: string
  value?: string
  name?: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  children?: ReactNode
}

const Select = forwardRef(function Select(
  {
    className,
    id,
    label,
    placeholder,
    error,
    value,
    name,
    onChange,
    children,
  }: SelectProps,
  ref
) {
  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <select
        className={styles.input}
        id={id}
        name={name}
        ref={ref as ForwardedRef<HTMLSelectElement | null>}
        onChange={onChange}
        value={value}
      >
        <option value="">{placeholder || "Selecione"}</option>
        {children}
      </select>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
})

export default Select
