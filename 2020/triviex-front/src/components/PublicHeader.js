import React from "react";
import { AuthContext } from "../App";
import Logo from '../assets/logo.png';
export const PublicHeader = () => {
  const { state, dispatch } = React.useContext(AuthContext);
  return (
    <nav className="text-center bg-main w-100 main-nav">
    <img src={Logo} className="cursor-pointer main-logo"  onClick={() =>
      dispatch({
        type: "REFRESH"
      })}/>
    </nav>
  );
};

export default PublicHeader;