import {
  Link
} from "react-router-dom";

const NavbarList = ({
  text,
  to,
  image
}) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to}>
        {
          image ? <img src={image} alt={text} />
            : ""
        }
        <span className="link-text">
          {text}
        </span>
      </Link>
    </li>
  )
}

export default NavbarList
