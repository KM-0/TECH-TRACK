import AcmeLogo from "../app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

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
        <div className={styles.rightPanel}>
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className={styles.image}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
