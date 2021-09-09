import { Link } from "react-router-dom";
import {
  Header as HeaderStyles,
  Menu,
  HamburguerMenuButton,
} from "./HeaderStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartPreview from "../CartPreview/CartPreview";
import { RootState } from "../../redux/rootReducer";
import { removeToken } from "../../redux/auth/reducer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const [hidePreview, setHidePreview] = useState(true);

  const dispatch = useDispatch()

  const handleMenuClick = (e: MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  const handleActivatePreview = () => {
    // console.log(hidePreview)
    setHidePreview(false);
  }

  const handleDeactivatePreview = () => {
    setHidePreview(true);
  }

  const handleSignOut = () => {
    dispatch(removeToken())
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
        <Link to="/directory">Directory</Link>
      </div>
      <div className="header-links">
        {token ?
          <div>
            <button className="button danger" onClick={handleSignOut}>Sign Out</button>
          </div>
          : <div className="auth">
            <Link to="/login" className="button left">Login</Link>
            <Link to="/register" className="button right">Register</Link>
          </div>
        }
        <div className="cart" onMouseOver={handleActivatePreview} onMouseLeave={handleDeactivatePreview}>
          <Link to="/bag">
            <span className="link-title">My Bag</span>
            <FontAwesomeIcon icon={faShoppingBag} className="icon" />
          </Link>
          <CartPreview hide={hidePreview} />
        </div>
      </div>
    </Menu>
  </HeaderStyles>
  );
};

export default Header;
