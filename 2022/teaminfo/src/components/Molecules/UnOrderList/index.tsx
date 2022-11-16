import { ListProps } from "../../Types";
import { List } from "../../Atoms";

const UnOrderList = ({ className, items }: ListProps) => {
  return (
    <ul className={className}>
      <List items={items} className="nav-item" />
    </ul>
  );
};

export default UnOrderList;
