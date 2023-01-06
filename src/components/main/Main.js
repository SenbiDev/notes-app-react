import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import HomePage from '../../pages/HomePage';
import AddNewPage from '../../pages/AddNewPage';
import DetailPage from '../../pages/DetailPage';
import ArchivesPage from '../../pages/ArchivesPage';
import LoadingProgress from '../loading/LoadingProgress';
import PageNotFound from '../../pages/PageNotFound';
import { getUserLogged, putAccessToken } from '../../utils/network-data';
import { notesAppPath } from '../../utils/notes-app-path';

function Main({ isAuthenticationMode, setUserAuthenticated }) {
  const [initializing, setInitializing] = useState(true);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setUserAuthenticated(data);
  }

  useEffect(() => {
    async function fetchGetUserLogged() {
      const { data } = await getUserLogged();
      setUserAuthenticated(data);
      setInitializing(false);
    }

    fetchGetUserLogged();
  }, []);

  return (
    <main>
      { (initializing)
        ? <LoadingProgress />
        : ((isAuthenticationMode === null)
          ? (
            <Routes>
              <Route path={notesAppPath.home} element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path={notesAppPath.resgister} element={<RegisterPage />} />
              <Route path={notesAppPath.pageNotFound} element={<LoginPage loginSuccess={onLoginSuccess} />} />
            </Routes>

          )
          : (
            <Routes>
              <Route path={notesAppPath.home} element={<HomePage />} />
              <Route path={notesAppPath.archives} element={<ArchivesPage />} />
              <Route path={notesAppPath.addNewPage} element={<AddNewPage />} />
              <Route path={notesAppPath.detailPage} element={<DetailPage />} />
              <Route path={notesAppPath.pageNotFound} element={<PageNotFound />} />
            </Routes>
          ))}
    </main>
  );
}

Main.propTypes = {
  isAuthenticationMode: PropTypes.object,
  setUserAuthenticated: PropTypes.func.isRequired,
};

export default Main;
