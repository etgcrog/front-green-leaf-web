"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react"; // Importando o useSession
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import logo from "@/assets/images/logoBg.png";
import 'leaflet/dist/leaflet.css';

// Configurações para o ícone do marcador
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // URL do ícone do marcador padrão
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // URL da sombra do ícone do marcador
  iconSize: [25, 41], // Tamanho do ícone
  iconAnchor: [12, 41], // Ponto de ancoragem
  popupAnchor: [1, -34], // Ponto de ancoragem do popup
});

// Define o tipo para a posição
type Position = [number, number];

const AddTrailPage = () => {
  const { data: session } = useSession(); // Obtendo a sessão
  const user = session?.user; // Acessando os dados do usuário da sessão

  const [trailData, setTrailData] = useState({
    name: '',
    difficulty: '',
    distance: 0,
    rating: 0,
    photo: '',
  });
  const [position, setPosition] = useState<Position | null>(null); // Posição do usuário

  // Função para obter a localização do usuário
  const fetchUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        console.error("Erro ao obter a localização:", error); // Tipo de erro
      }
    );
  };

  useEffect(() => {
    fetchUserLocation(); // Obtém a localização ao carregar a página
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        console.error("Erro ao obter a localização:", error); // Tipo de erro
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId); // Limpa o watch ao desmontar
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTrailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const response = await fetch('/api/trails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...trailData, createdBy: user?.id }),
    });

    if (response.ok) {
      alert('Trilha adicionada com sucesso!');
      // Redirecionar ou realizar outra ação
    } else {
      alert('Erro ao adicionar a trilha.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto my-8">
        <div className="flex items-center space-x-4 mb-8">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h2 className="text-4xl font-bold">Adicionar Nova Trilha</h2>
        </div>

        {/* Mapa para mostrar a localização */}
        {position && ( // Verifica se a posição do usuário foi definida
          <MapContainer center={position} zoom={13} className="h-64 mb-4">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={DefaultIcon}>
              <Popup>Você está aqui</Popup>
            </Marker>
          </MapContainer>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Nome da Trilha:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={trailData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="difficulty" className="block text-lg font-medium">Dificuldade:</label>
            <select
              name="difficulty"
              id="difficulty"
              value={trailData.difficulty}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Escolha uma dificuldade</option>
              <option value="fácil">Fácil</option>
              <option value="moderada">Moderada</option>
              <option value="difícil">Difícil</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="distance" className="block text-lg font-medium">Distância (km):</label>
            <input
              type="number"
              name="distance"
              id="distance"
              value={trailData.distance}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-lg font-medium">Avaliação:</label>
            <input
              type="number"
              name="rating"
              id="rating"
              value={trailData.rating}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              min={0}
              max={5}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="block text-lg font-medium">URL da Imagem:</label>
            <input
              type="text"
              name="photo"
              id="photo"
              value={trailData.photo}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button type="submit" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
            Adicionar Trilha
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddTrailPage;
