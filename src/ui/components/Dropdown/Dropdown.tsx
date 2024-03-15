import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { ReactNode } from "react"

import styles from "./Dropdown.module.scss"

interface DropdownProps {
  children?: ReactNode
  trigger?: ReactNode
}

export default function Dropdown({ trigger, children }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.trigger} aria-label="Dropdown">
          {trigger}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.menu} align="end">
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

interface DropdownItemProps {
  children: ReactNode
  onSelect: () => void
}

Dropdown.Item = function DropdownItem({
  children,
  onSelect,
}: DropdownItemProps) {
  return (
    <DropdownMenu.Item onSelect={onSelect} className={styles.menuItem}>
      {children}
    </DropdownMenu.Item>
  )
}
