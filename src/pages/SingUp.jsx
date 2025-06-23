import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return setError('As senhas não coincidem');

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: { name: formData.name },
      },
    });
    if (error) return setError(error.message);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <h2 className="text-2xl">Cadastro</h2>
        <input name="name" placeholder="Nome completo" onChange={handleChange} className="w-full p-2 border" />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} className="w-full p-2 border" />
        <input name="password" placeholder="Senha" type="password" onChange={handleChange} className="w-full p-2 border" />
        <input name="confirmPassword" placeholder="Confirmar senha" type="password" onChange={handleChange} className="w-full p-2 border" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="bg-blue-500 text-white w-full py-2">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignUp;