import { NavLink } from 'react-router-dom';
import NewsSearchForm from '../newsSearchForm/NewsSearchForm';

import './header.scss';

import logo from '../../resources/logo.jpg';
import pinterest from '../../resources/icons/pinterest.svg';
import facebook from '../../resources/icons/facebook.svg';
import instagram from '../../resources/icons/instagram.svg';

interface Props {
  setValueSearchForm: React.Dispatch<React.SetStateAction<string>>;
}

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>

            <NewsSearchForm setValueSearchForm={props.setValueSearchForm} />
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <nav className="header__nav">
              <div className="header__nav-link">
                <NavLink
                  to="/"
                  style={({ isActive }) => ({ color: isActive ? '#c3c3c3' : 'inherit' })}>
                  HOME
                </NavLink>
              </div>
              <div className="header__nav-link">
                <NavLink
                  to="/posts"
                  style={({ isActive }) => ({ color: isActive ? '#c3c3c3' : 'inherit' })}>
                  POSTS
                </NavLink>
              </div>
              <div className="header__nav-link">
                <NavLink
                  to="/contacts"
                  style={({ isActive }) => ({ color: isActive ? '#c3c3c3' : 'inherit' })}>
                  CONTACTS
                </NavLink>
              </div>
            </nav>

            <div className="social">
              <a href="" className="social__link">
                <img src={pinterest} alt="pinterest" />
              </a>
              <a href="" className="social__link">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="" className="social__link">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
