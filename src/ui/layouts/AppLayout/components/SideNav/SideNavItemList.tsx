import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"
import { IconType } from "react-icons"
import { BiChevronDown } from "react-icons/bi"

import { NavSubItem } from "@/config/navItems"

import itemStyles from "./SideNav.module.scss"
import styles from "./SideNavItemList.module.scss"

interface SideNavItemListProps {
  items: NavSubItem[]
  pathname: string
  label?: string
  icon: IconType
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
  const isCollapsed = pathname.includes(rootPath!)

  const LinkIcon = icon

  return (
    <div className={styles.container}>
      <button
        className={clsx(
          itemStyles.link,
          styles.link,
          (isCollapsed || isOpen) && styles.isOpen
        )}
        key={label}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <LinkIcon />
        <p className={itemStyles.linkLabel}>{label}</p>
        <BiChevronDown className={styles.chevron} />
      </button>
      <div
        className={clsx(
          styles.subContainer,
          (isOpen || isCollapsed) && styles.subContainerOpen
        )}
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
