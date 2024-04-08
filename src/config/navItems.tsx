import { Banknote, Home, ListPlus, User, Warehouse } from "lucide-react"
import { ReactNode } from "react"

export interface NavItem {
  rootPath?: string
  label: string
  href: string
  icon: ReactNode
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
    icon: <Home size={22} />,
  },
  {
    label: "Pagamentos",
    href: "/payments",
    icon: <Banknote size={22} />,
  },
  {
    label: "Casas",
    href: "/houses",
    icon: <Warehouse size={22} />,
  },
  {
    label: "Perfil",
    href: "/profile",
    icon: <User size={22} />,
  },
  {
    label: "Mais",
    rootPath: "/users",
    href: "#",
    icon: <ListPlus size={22} />,
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
