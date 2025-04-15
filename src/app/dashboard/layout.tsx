// import SideNav from "@/app/ui/dashboard/sidenav";
import styles from "./dashboard-layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>{/* <SideNav /> */}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
