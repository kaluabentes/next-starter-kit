import clsx from "clsx"

import { range } from "lodash"
import { BiPlus } from "react-icons/bi"
import styles from "./ListWizard.module.scss"
import Button from "../Button"

interface ListWizardProps {
  label?: string
  className?: string
  error?: string
}

export default function ListWizard({
  label,
  className,
  error,
}: ListWizardProps) {
  const items = range(5)

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.header}>
        <div className={styles.label}>{label}</div>
        <button className={styles.addButton}>
          Adicionar <BiPlus />
        </button>
      </div>
      <div className={styles.input}>
        {!items.length && (
          <p className={styles.emptyState}>
            Adicione um ítem através do botão à direita
          </p>
        )}
        {items.map((number) => (
          <div key={number} className={styles.item}>
            <p className={styles.order}>{number + 1}</p>
            <p className={styles.content}>
              Tenho fama de dizer o que penso, sem rodeios
            </p>
            <p>Mais - Menos</p>
            <div className={styles.actions}>
              <Button>Excluir</Button>
              <Button variant="secondary">Editar</Button>
            </div>
          </div>
        ))}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
