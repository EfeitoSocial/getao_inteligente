import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) return setError(error.message);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <h2 className="text-2xl">Login</h2>
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" />
        <input name="password" placeholder="Senha" type="password" onChange={handleChange} className="w-full p-2 border" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="bg-blue-500 text-white w-full py-2">Entrar</button>
      </form>
    </div>
  );
};

export default Login;