import { GlobeAltIcon } from "@heroicons/react/24/outline";
import styles from "./acme-logo.module.css";

export default function AcmeLogo() {
  return (
    <div className={styles.container}>
      <GlobeAltIcon className={styles.icon} />
      <p className={styles.logoText}>Acme</p>
    </div>
  );
}
