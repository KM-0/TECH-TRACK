import "../app/globals.css";
import styles from "./fonts.module.css";

import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${styles.fontInter} ${styles.antialiased}`}
        style={inter.style}
      >
        {children}
      </body>
    </html>
  );
}
