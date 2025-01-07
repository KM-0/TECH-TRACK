import trash from "@/assets/trash.svg";
import pencilSquare from "@/assets/pencil-square.svg";
import photo from "@/assets/photo.svg";
import exclamationCircle from "@/assets/exclamation-circle.svg";
import checkCircle from "@/assets/check-circle.svg";
import xMark from "@/assets/x-mark.svg";
import barsArrowDown from "@/assets/bars-arrow-down.svg";
import barsArrowUp from "@/assets/bars-arrow-up.svg";
import arrowPath from "@/assets/arrow-path.svg";
import question from "@/assets/question.svg";

export const ICONS = {
  trash: trash,
  pencilSquare: pencilSquare,
  photo: photo,
  exclamationCircle: exclamationCircle,
  checkCircle: checkCircle,
  xMark: xMark,
  barsArrowDown: barsArrowDown,
  barsArrowUp: barsArrowUp,
  arrowPath: arrowPath,
  question: question,
} as const satisfies Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

export type Icons = keyof typeof ICONS;
