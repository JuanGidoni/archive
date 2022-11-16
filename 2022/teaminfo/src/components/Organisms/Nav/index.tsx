import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import { Collapse, UnOrderList } from "../../Molecules";
import { BasicPropsComponent } from "../../Types";

const Nav = ({ className }: BasicPropsComponent) => {
  const { navList } = useContext<any>(DataContext);
  return (
    <nav className={className}>
      <Collapse />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <UnOrderList className="navbar-nav mr-auto" items={navList} />
      </div>
    </nav>
  );
};
export default Nav;
