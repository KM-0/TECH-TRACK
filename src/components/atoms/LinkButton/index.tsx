import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = {
  linkText: string;
  icon: ReactNode;
} & Pick<LinkProps, "href">;

export const LinkButton: React.FC<Props> = ({ linkText, icon, href }) => {
  return (
    <Link href={href}>
      <div>
        <div>{icon}</div>
        <div>{linkText}</div>
      </div>
    </Link>
  );
};
