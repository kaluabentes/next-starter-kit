import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"

import styles from "./BackButton.module.scss"

interface BackButtonProps {
  href?: string
}

export default function BackButton({ href = "#" }: BackButtonProps) {
  return (
    <Link href={href} className={styles.container}>
      <BiArrowBack />
      Voltar
    </Link>
  )
}
