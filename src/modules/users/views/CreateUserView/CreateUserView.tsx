"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import {
  EMAIL_INVALID_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
} from "@/config/messages"
import BackButton from "@/ui/components/BackButton"
import Button from "@/ui/components/Button"
import Header from "@/ui/components/Header"
import Heading from "@/ui/components/Heading"
import Input from "@/ui/components/Input"
import Select from "@/ui/components/Select"
import AppLayout from "@/ui/layouts/AppLayout"

import showToast from "@/utils/showToast"
import styles from "./CreateUserView.module.scss"

const createUserSchema = yup.object({
  name: yup.string().required(REQUIRED_FIELD_MESSAGE),
  email: yup
    .string()
    .email(EMAIL_INVALID_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
  type: yup.string().required(REQUIRED_FIELD_MESSAGE),
})

export interface UserPayload {
  name: string
  email: string
  type: string
}

export default function CreateUserView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserSchema),
  })

  return (
    <AppLayout title="Criar questionário">
      <BackButton href="/users" />
      <Header>
        <Heading>Criar usuário</Heading>
      </Header>
      <form onSubmit={handleSubmit((data: UserPayload) => console.log(data))}>
        <div className={styles.form}>
          <Input
            label="Nome"
            id="name"
            error={errors.name?.message}
            {...register("name")}
          />
          <div className={styles.inputGrid}>
            <Input
              label="Email"
              id="email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Select
              label="Tipo"
              id="type"
              placeholder="Selecione um tipo"
              error={errors.type?.message}
              {...register("type")}
            >
              <option value="admin">Administrador</option>
              <option value="user">Usuário do Sistema</option>
            </Select>
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            onClick={() => showToast("Usuário criado com sucesso", "success")}
            variant="primary"
            type="submit"
            isInline
          >
            Criar usuário
          </Button>
        </div>
      </form>
    </AppLayout>
  )
}
