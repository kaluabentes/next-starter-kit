"use client"

import { ChangeEvent, DragEvent, KeyboardEvent, useRef, useState } from "react"
import { BiCloudUpload } from "react-icons/bi"

import styles from "./Upload.module.scss"

interface UploadProps {
  label?: string
  isMultiple?: boolean
  onChange?: (files: FileList) => void
}

export default function Upload({
  isMultiple = false,
  label,
  onChange,
}: UploadProps) {
  const [fileSelectedNumber, setFileSelectedNumber] = useState(0)
  const inputRef = useRef<null | HTMLInputElement>(null)
  const uploadString = isMultiple ? "um ou mais arquivos" : "um arquivo"

  const handleUpload = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.files!)
      setFileSelectedNumber(event.currentTarget.files?.length || 0)
    }
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    if (onChange) {
      onChange(event.dataTransfer.files!)
      setFileSelectedNumber(event.dataTransfer.files?.length || 0)
    }
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div>
      <label htmlFor="upload" className={styles.label}>
        {label}
      </label>
      <div
        onClick={handleUpload}
        onKeyDown={handleKeydown}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        tabIndex={0}
        role="button"
        className={styles.uploadBox}
      >
        <BiCloudUpload />
        <p className={styles.uploadString}>Escolha {uploadString}</p>
        {fileSelectedNumber > 0 && (
          <p className={styles.allowedTypes}>
            Arquivos selecionados: {fileSelectedNumber}
          </p>
        )}
      </div>
      <input
        ref={inputRef}
        id="upload"
        type="file"
        multiple={isMultiple}
        onChange={handleChange}
        hidden
      />
    </div>
  )
}
