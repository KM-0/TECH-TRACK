import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  children: ReactNode;
} & Pick<LinkProps, "href">;

export const LinkButton: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href} className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </Link>
  );
};
