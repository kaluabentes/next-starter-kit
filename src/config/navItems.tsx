import { ReactNode } from "react"
import { BiHome } from "react-icons/bi"

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

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <BiHome />,
  },
  // {
  //   label: "Mais",
  //   rootPath: "/users",
  //   href: "#",
  //   icon: <ListPlus size={22} />,
  //   items: [
  //     {
  //       label: "Listar",
  //       href: "/users",
  //     },
  //     {
  //       label: "Criar novo",
  //       href: "/users/create",
  //     },
  //   ],
  // },
]

export default navItems
