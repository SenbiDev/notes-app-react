import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { putAccessToken } from './utils/network-data';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isUserAuthenticated, setUserAuthenticated] = useState(null);
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (localStorage.getItem('locale') === null) { localStorage.setItem('locale', 'id'); }
    if (localStorage.getItem('theme') === null) { localStorage.setItem('theme', 'light'); }
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
  }, []);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  };

  const localeContextValue = useMemo(() => ({
    locale,
    toggleLocale,
  }), [locale]);

  const ThemeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  const onLogout = () => {
    setUserAuthenticated(null);
    putAccessToken('');
  };

  return (
    <ThemeProvider value={ThemeContextValue}>
      <LocaleProvider value={localeContextValue}>
        <div id="app-container" className="">
          <Header isAuthenticationMode={isUserAuthenticated} logout={onLogout} />
          <Main isAuthenticationMode={isUserAuthenticated} setUserAuthenticated={setUserAuthenticated} />
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
