import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  linkText: string;
  icon: ReactNode;
} & Pick<LinkProps, "href">;

export const LinkButton: React.FC<Props> = ({ linkText, icon, href }) => {
  return (
    <Link href={href} className={styles.container}>
      <div className={styles.wrapper}>
        <div style={{ width: 20 }}>{icon}</div>
        <div>{linkText}</div>
      </div>
    </Link>
  );
};
