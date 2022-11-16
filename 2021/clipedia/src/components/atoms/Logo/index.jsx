import {
  Link
} from "react-router-dom";

const Logo = ({ image, text, to  }) => {
  return (
    <li className="logo">
      <Link className="nav-link" to={to}>
        {
          image ? <img src={image} alt={"Logo"} />
            : ""
        }
        <span classNam="link-text logo-text">{text}</span>
      </Link>
    </li>
  )
}

export default Logo
