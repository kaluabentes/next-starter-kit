import { BiMenu, BiUser } from "react-icons/bi";

import Dropdown from "@/ui/components/Dropdown";

import styles from "./AppBar.module.scss";

interface AppBarProps {
  title: string;
  onMenuClick: () => void;
  onLogout: () => void;
}

export default function AppBar({ title, onMenuClick, onLogout }: AppBarProps) {
  return (
    <header className={styles.header}>
      <button onClick={onMenuClick} className={styles.iconButton}>
        <BiMenu />
      </button>
      <h1 className={styles.title}>{title}</h1>
      <Dropdown
        trigger={
          <button className={styles.iconButton}>
            <BiUser />
          </button>
        }
      >
        <Dropdown.Item onSelect={onLogout}>Sair</Dropdown.Item>
      </Dropdown>
    </header>
  );
}
