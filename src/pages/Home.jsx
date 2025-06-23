import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ session }) => {
  const navigate = useNavigate();
  if (session) navigate('/dashboard');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Bem-vindo ao Sistema</h1>
      <div className="space-x-4">
        <Link to="/signup" className="text-blue-500">Cadastrar</Link>
        <Link to="/login" className="text-blue-500">Login</Link>
      </div>
    </div>
  );
};

export default Home;