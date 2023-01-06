import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getEmailPattern from '../../utils/email-pattern';
import useInput from '../../hooks/useInput';
import LocaleContext from '../../contexts/LocaleContext';
import { loginPageContent } from '../../utils/contents';

function LoginInput({ login }) {
  const [inputs, onValueChangeHandler] = useInput({});
  const { locale } = useContext(LocaleContext);
  const { header, userState, link } = (locale === 'id') ? loginPageContent.id : loginPageContent.en;
  const pattern = getEmailPattern();

  const onClickEventHandler = (event) => {
    event.preventDefault();
    if (inputs.email === '' || inputs.email === undefined) { alert('email tidak boleh kosong'); return; }
    if (pattern.test(inputs.email) === false) { alert('format penulisan email harus valid'); return; }
    if (inputs.password === '' || inputs.password === undefined) { alert('password tidak boleh kosong'); return; }

    login({ email: inputs.email, password: inputs.password });
  };

  return (
    <div>
      <section id="login-page" className="flex flex-col my-8 mx-10 custom-sreen:mx-5">
        <h2 className="text-2xl font-medium">
          {header}
        </h2>
        <div id="input-login" className="my-7 text-center">
          <label className="block text-2xl text-left pb-2" htmlFor="email">
            Email
            <input
              id="email"
              className="block w-full p-2 mb-2 border-4 rounded-lg border-slate-800"
              name="email"
              type="email"
              value={inputs.email || ''}
              onChange={onValueChangeHandler}
            />
          </label>

          <label className="block text-2xl text-left pb-2" htmlFor="password">
            Password
            <input
              id="password"
              className="block w-full p-2 mb-5 border-4 rounded-lg border-slate-800"
              name="password"
              type="password"
              value={inputs.password || ''}
              onChange={onValueChangeHandler}
            />
          </label>

          <button
            type="button"
            className="text-2xl font-medium p-3 bg-slate-900 text-slate-200 rounded-lg w-full"
            onClick={onClickEventHandler}
          >
            Login
          </button>
        </div>

        <p className="font-medium">
          {userState}
          {' '}
          <Link className="underline decoration-2" to="/register">
            {link}
          </Link>
        </p>
      </section>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
