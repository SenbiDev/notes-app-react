import React from 'react';
import PropTypes from 'prop-types';
import LoginInput from '../components/authentication/LoginInput';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LoginInput login={onLogin} />
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
