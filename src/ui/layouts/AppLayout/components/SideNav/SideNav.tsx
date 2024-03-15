import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { NavItem } from "@/config/navItems";

import styles from "./SideNav.module.scss";
import SideNavItemList from "./SideNavItemList";
import Paragraph from "../../../../components/Paragraph";

interface SideNavProps {
  isOpen: boolean;
  accountName: string;
  accountPhoto?: string | ArrayBuffer | null;
  pathname: string;
  navItems: NavItem[];
  onClose: () => void;
  onLogout: () => void;
}

export default function SideNav({
  isOpen,
  accountName,
  accountPhoto,
  navItems,
  pathname,
  onClose,
  onLogout,
}: SideNavProps) {
  return (
    <div className={clsx(styles.container, isOpen && styles.isOpen)}>
      <div className={styles.sideNav}>
        <header className={styles.header}>
          <Link href="/" className={styles.brand}>
            <h2>UI Kit</h2>
          </Link>
        </header>
        <nav className={styles.nav}>
          {navItems.map((navItem) => {
            const LinkIcon = navItem.icon;

            if (navItem.items) {
              return (
                <SideNavItemList
                  rootPath={navItem.rootPath}
                  key={navItem.label}
                  label={navItem.label}
                  icon={navItem.icon}
                  items={navItem.items}
                  pathname={pathname}
                />
              );
            }

            return (
              <Link
                className={clsx(
                  styles.link,
                  pathname === navItem.href && styles.linkActive
                )}
                key={navItem.label}
                href={navItem.href}
              >
                <LinkIcon />
                <p className={styles.linkLabel}>{navItem.label}</p>
              </Link>
            );
          })}
        </nav>
        <div className={styles.profileInfo}>
          <Image
            className={styles.profileInfoImage}
            width={32}
            height={32}
            src={accountPhoto ? String(accountPhoto) : "/user-placeholder.png"}
            alt="Usuário"
          />
          <Paragraph>
            {accountName},{" "}
            <Link onClick={onLogout} href="#">
              Sair
            </Link>
          </Paragraph>
        </div>
      </div>
      <button onClick={onClose} className={styles.overlay} />
    </div>
  );
}
