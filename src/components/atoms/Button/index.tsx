type Props = {
  children: string;
} & Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled" | "onClick"
>;
export const Button: React.FC<Props> = ({
  children,
  type = "button",
  disabled = false,
  onClick,
}) => {
  return (
    <button className="" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
