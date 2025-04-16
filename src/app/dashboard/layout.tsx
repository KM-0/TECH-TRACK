// import SideNav from "@/app/ui/dashboard/sidenav";
import { LinkButton } from "@/components/atoms/LinkButton";
import styles from "./dashboard-layout.module.css";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <LinkButton linkText="Home" href={"/"} icon={<HomeIcon />}></LinkButton>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
