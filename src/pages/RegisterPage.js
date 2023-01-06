import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/authentication/RegisterInput';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <RegisterInput onRegisterHandler={onRegisterHandler} />
  );
}

export default RegisterPage;
