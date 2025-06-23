import React from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ session }) => {
  const navigate = useNavigate();
  const user = session?.user;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Bem-vindo, {user?.user_metadata?.name || user?.email}</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">Sair</button>
    </div>
  );
};

export default Dashboard;
