import styles from "./style.module.css";
import {
  Cog6ToothIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type Props = {
  name: string;
  iconSize?: number;
  icon: MenuIcon;
} & Pick<React.LinkHTMLAttributes<HTMLLinkElement>, "href">;

const MENU_ICON = {
  home: (size: Props["iconSize"]) => <HomeIcon height={size} />,
  user: (size: Props["iconSize"]) => <UserCircleIcon height={size} />,
  setting: (size: Props["iconSize"]) => <Cog6ToothIcon height={size} />,
} as const;

type MenuIcon = keyof typeof MENU_ICON;

export const LinkButton: React.FC<Props> = ({
  name,
  href,
  iconSize = 40,
  icon,
}) => {
  return (
    <a href={href} className={styles.container}>
      <div className={styles.wrapper}>
        {MENU_ICON[icon](iconSize)}
        <p className={styles.text}>{name}</p>
      </div>
    </a>
  );
};
