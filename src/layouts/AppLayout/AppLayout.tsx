"use client"

import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"

import navItems from "@/config/navItems"
import useBreakpoint from "@/hooks/useBreakpoint"

import styles from "./AppLayout.module.scss"
import AppBar from "./components/AppBar"
import SideNav from "./components/SideNav"

interface AppLayoutProps {
  title: string
  children: ReactNode
}

export default function AppLayout({ title, children }: AppLayoutProps) {
  const pathname = usePathname()
  const breakpoint = useBreakpoint()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      {["mobile"].includes(breakpoint!) && (
        <AppBar
          title={title}
          onMenuClick={() => setIsOpen(true)}
          onLogout={() => null}
        />
      )}
      <SideNav
        isOpen={isOpen}
        accountName="Kaluã Bentes"
        accountPhoto="/user-avatar.jpg"
        navItems={navItems}
        pathname={pathname}
        onClose={() => setIsOpen(false)}
        onLogout={() => null}
      />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  )
}
