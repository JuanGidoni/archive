import { Card } from "../../Atoms";
import { CardProps } from "../../Types";

const CardLayout = ({ children }: CardProps) => {
  return <Card>{children}</Card>;
};

export default CardLayout;
