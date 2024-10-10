"use client";

import Image from 'next/image';
import { useState } from 'react';
import logo from "@/assets/images/logoBg.png";
import trilha from "@/assets/images/trilhaexemplo.jpg";

const AccountPage = () => {
  const [user] = useState({
    name: "Usuário",
    profileImage: "/profile.png",
    trailsVisited: 22,
    totalDistance: 1080,
  });

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto my-8">
        <div className="flex items-center space-x-4 mb-8">
          <Image
            src={logo}
            alt="Foto do perfil"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h2 className="text-4xl font-bold">Minha Conta</h2>
        </div>

        <div className="mb-6">
          <Image
            src={trilha}
            alt="Minhas Trilhas"
            width={800}
            height={200}
            className="w-full object-cover rounded"
          />
          <h3 className="text-2xl font-bold text-center mt-2">Minhas Trilhas</h3>
        </div>
        <div className="bg-green-200 p-4 rounded-lg text-lg mb-6">
          <p>Trilhas Visitadas: <span className="font-bold">{user.trailsVisited}</span></p>
          <p>Distância Percorrida: <span className="font-bold">{user.totalDistance} KM</span></p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-lg text-center">
          <h4 className="font-bold">Minha Pontuação</h4>
        </div> 
        <div className="flex justify-end mt-6">
          <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Adicionar</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;