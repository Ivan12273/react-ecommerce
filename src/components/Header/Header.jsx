import { Link } from "react-router-dom";
import {
  Header as HeaderStyles,
  Menu,
  HamburguerMenuButton,
} from "./HeaderStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();
    console.log(!menuOpen)
    setMenuOpen(!menuOpen);
  }

  return (
  <HeaderStyles>
    <div className="hamburguer-menu-wrapper">
      <div className="brand">
        <Link className="logo" to="/">Clothes Shop</Link>
      </div>
      <HamburguerMenuButton className="" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </HamburguerMenuButton>
    </div>
    <Menu className={menuOpen ? "open" : ""}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Category</Link>
        <Link to="/">Directory</Link>
      </div>
      <div className="header-links">
        <Link to="/">
          <span className="link-title">My Bag {" "}</span>
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />
        </Link>
        <Link to="/">
        <span className="link-title">My Profile {" "}</span>
        <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
      </div>
    </Menu>
  </HeaderStyles>
  );
};

export default Header;
