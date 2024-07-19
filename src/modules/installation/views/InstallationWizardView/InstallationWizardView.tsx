"use client"

import Button from "@/components/Button"
import Heading from "@/components/Heading"
import Input from "@/components/Input"
import Paper from "@/components/Paper"

import Paragraph from "@/components/Paragraph"
import styles from "./InstallationWizardView.module.scss"

export default function InstallationWizardView() {
  return (
    <Paper className={styles.card}>
      <form className={styles.form}>
        <div className={styles.text}>
          <Heading className={styles.heading}>Instalar</Heading>
          <Paragraph variant="muted" size="small">
            Para instalar sua loja crie uma conta abaixo
          </Paragraph>
        </div>
        <div className={styles.inputs}>
          <Input label="Nome" id="name" name="name" />
          <Input label="Telefone" id="phone" name="phone" type="tel" />
          <Input label="Email" id="email" name="email" />
        </div>
        <Button>Instalar</Button>
      </form>
    </Paper>
  )
}
