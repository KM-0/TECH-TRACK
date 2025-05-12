import { LinkButton } from "@/components/atoms/LinkButton";
import styles from "./dashboard-layout.module.css";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <LinkButton href={"/"} name="Home" icon="home" />
        <LinkButton href={"/setting"} name="Setting" icon="setting" />
        <LinkButton href={"/"} name="User" icon="user" />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
