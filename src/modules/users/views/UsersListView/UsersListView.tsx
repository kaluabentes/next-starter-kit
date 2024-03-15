"use client"

import { range } from "lodash"
import { FaEllipsisV } from "react-icons/fa"

import BackButton from "@/ui/components/BackButton"
import Button from "@/ui/components/Button"
import Dropdown from "@/ui/components/Dropdown"
import Header from "@/ui/components/Header"
import Heading from "@/ui/components/Heading"
import { Table } from "@/ui/components/Table"
import AppLayout from "@/ui/layouts/AppLayout"

interface User {
  id: number
  name: string
  email: string
}

const users = range(10).map((number: number) => ({
  id: number,
  name: `John Doe ${number}`,
  email: `johndoe${number}@gmail.com`,
}))

export default function UsersListView() {
  const renderRow = (user: User) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Dropdown
          trigger={
            <Button isDiv variant="ghost">
              <FaEllipsisV />
            </Button>
          }
        >
          <Dropdown.Item onSelect={() => alert("Editar")}>Editar</Dropdown.Item>
          <Dropdown.Item onSelect={() => alert("Excluir")}>
            Excuir
          </Dropdown.Item>
        </Dropdown>
      </td>
    </tr>
  )

  return (
    <AppLayout title="Criar questionário">
      <BackButton href="/" />
      <Header>
        <Heading>Usuários</Heading>
        <Button href="/users/create" variant="primary">
          Criar
        </Button>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{users.map(renderRow)}</tbody>
      </Table>
    </AppLayout>
  )
}
