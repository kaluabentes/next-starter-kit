import clsx from "clsx"
import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import { BiChevronDown } from "react-icons/bi"

import { NavSubItem } from "@/config/navItems"

import itemStyles from "./SideNav.module.scss"
import styles from "./SideNavItemList.module.scss"

interface SideNavItemListProps {
  items: NavSubItem[]
  pathname: string
  label?: string
  icon: ReactNode
  rootPath?: string
}

export default function SideNavItemList({
  rootPath,
  label,
  icon,
  items,
  pathname,
}: SideNavItemListProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (pathname.includes(rootPath!)) {
      setIsOpen(true)
    }
  }, [pathname, rootPath])

  return (
    <div className={styles.container}>
      <button
        className={clsx(itemStyles.link, styles.link, isOpen && styles.isOpen)}
        key={label}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {icon}
        <p className={itemStyles.linkLabel}>{label}</p>
        <BiChevronDown className={styles.chevron} />
      </button>
      <div
        className={clsx(styles.subContainer, isOpen && styles.subContainerOpen)}
      >
        {items.map((navItem) => {
          return (
            <Link
              className={clsx(
                itemStyles.link,
                styles.sublink,
                pathname === navItem.href && styles.linkActive
              )}
              key={navItem.label}
              href={navItem.href}
            >
              <p className={itemStyles.linkLabel}>{navItem.label}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
