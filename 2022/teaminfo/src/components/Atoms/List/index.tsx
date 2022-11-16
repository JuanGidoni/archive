import { Link } from "react-router-dom";
import { ItemProps, ListProps } from "../../Types";

const List = ({ items, className }: ListProps) => {
  return (
    <>
      {items &&
        items.map((item: ItemProps, index: number) => {
          return (
            <li className={className} key={index}>
              <Link className={item.className} to={item.to || "/undefined"}>
                {item.children}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default List;
