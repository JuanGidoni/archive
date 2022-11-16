import { ButtonProps } from "../../Types";

const Button = ({ children, onClick, className, type }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={className}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};

export default Button;
