import { IconType } from "react-icons"
import { BiHome } from "react-icons/bi"
import { FaUsers } from "react-icons/fa"

export interface NavItem {
  rootPath?: string
  label: string
  href: string
  icon: IconType
  items?: NavSubItem[]
}

export interface NavSubItem {
  label: string
  href: string
}

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: BiHome,
  },
  {
    label: "Usuários",
    rootPath: "/users",
    href: "#",
    icon: FaUsers,
    items: [
      {
        label: "Listar",
        href: "/users",
      },
      {
        label: "Criar novo",
        href: "/users/create",
      },
    ],
  },
]

export default navItems
