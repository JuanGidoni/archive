import Logo from "../../atoms/Logo"
import NavbarItem from "../../atoms/NavbarItem"
import TwitchIcon from "../../assets/images/twitch.png"

const NavbarList = () => {
  return (
    <ul className="navbar-nav">
      <Logo
        text="Clipedia"
        image={TwitchIcon}
        to="/" />
      <NavbarItem
        text="Twitch"
        image={TwitchIcon}
        to="/twitch" />
      <NavbarItem
        text="Not Found"
        to="/asd" />
    </ul>
  )
}

export default NavbarList
