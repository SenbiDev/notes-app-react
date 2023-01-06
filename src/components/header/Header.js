import React, { useContext } from 'react';
import {
  MdLogout, MdLightMode, MdDarkMode, MdGTranslate,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LocaleContext from '../../contexts/LocaleContext';
import ThemeContext from '../../contexts/ThemeContext';
import { headerSectionContent } from '../../utils/contents';

function Header({ isAuthenticationMode, logout }) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { active, archived } = headerSectionContent[locale].notes;
  const display = (isAuthenticationMode) === null ? 'hidden' : 'block';
  const themeButton = (theme === 'light') ? <MdDarkMode className="inline" /> : <MdLightMode className="inline" />;
  const username = (isAuthenticationMode === null) ? 'user' : isAuthenticationMode.name;

  return (
    <header className="flex custom-sreen:flex-col custom-sreen:items-center flex-row flex-wrap justify-between m-2 items-baseline border-b-2 border-b-slate-800 pb-3">
      <h1>
        <Link to="/" className="font-bold text-2xl underline decoration-2">
          {active}
        </Link>
      </h1>
      <div id="options" className="flex items-baseline">
        <nav id="navigation" className={`mx-1.5 ${display}`}>
          <ul>
            <li>
              <Link to="/archives" className="font-bold text-2xl underline decoration-2">
                {archived}
              </Link>
            </li>
          </ul>
        </nav>
        <button
          id="toggle-locale"
          className="mx-1 text-2xl"
          type="button"
          onClick={toggleLocale}
        >
          <MdGTranslate className="inline" />
        </button>

        <button
          id="toggle-theme"
          className="mx-1 text-3xl"
          type="button"
          onClick={toggleTheme}
        >
          {themeButton}
        </button>

        <button
          id="button-logout"
          className={`mx-1 pb-1 px-1 text-2xl border-2 border-slate-800 rounded-md ${display}`}
          type="button"
          onClick={logout}
        >
          <MdLogout className="inline" />
          {username}
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  isAuthenticationMode: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default Header;
