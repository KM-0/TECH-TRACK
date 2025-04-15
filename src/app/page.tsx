import AcmeLogo from "../app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.header}>
        <AcmeLogo />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftPanel}>
          <p className={styles.welcomeText}>Welcome!!</p>
          <Link href="/login" className={styles.loginButton}>
            <span>Log in</span> <ArrowRightIcon className={styles.arrowIcon} />
          </Link>
        </div>
        <div className={styles.rightPanel}>{/* Add Hero Images Here */}</div>
      </div>
    </main>
  );
}
