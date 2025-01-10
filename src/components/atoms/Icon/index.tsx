"use client";
import { ICONS, type Icons } from "@/components/atoms/Icon/constants/icons";

type Props = {
  name: Icons;
};

export const Icon: React.FC<Props> = ({ name }) => {
  const IconElement = ICONS[name];

  return <IconElement />;
};
