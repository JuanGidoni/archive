import { CardProps } from "../../Types";

const Card = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
};

export default Card;
