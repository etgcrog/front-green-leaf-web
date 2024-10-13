"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";

// Definindo a interface para os dados da trilha
interface Trail {
  name: string;
  difficulty: string;
  distance: number;
  author: string;
  rating: number;
  photo: string; // Propriedade para a URL da imagem da trilha
}

export default function TrailCard({ trail }: { trail: Trail }) {
  const handleRedirect = () => {
    redirect("/profile");
  };

  return (
    <main>
      <Card className="w-full max-h-[150px] rounded-2xl bg-[#FAFAF5]" onClick={handleRedirect}>
        <div className="flex flex-row md:flex-row">
          <div className="w-40 h-[150px] relative overflow-hidden rounded-l-2xl">
            <Image 
              src={trail.photo} // A URL da imagem da trilha
              layout="fill" // Preenche o espaço disponível
              alt="Foto da trilha" 
              objectFit="cover" // Mantém a proporção da imagem
              priority // Carrega a imagem com prioridade
            />
          </div>
          <div className="flex flex-col w-full">
            <CardHeader>
              <CardTitle className="flex flex-row justify-between">
                <h1>{trail.name}</h1> {/* Nome da trilha */}
                <h1>{trail.difficulty}</h1> {/* Dificuldade */}
              </CardTitle>
              <CardDescription className="text-[#426B1F]"><strong>{trail.distance} Km</strong></CardDescription>
            </CardHeader>
            <CardContent className="w-[40%]">
              <div className="border rounded-xl bg-white flex justify-center">
                <p>{trail.author}</p> {/* Autor */}
              </div>
              <p>{trail.rating}</p> {/* Avaliação */}
            </CardContent>
            <CardFooter>
            </CardFooter>
          </div>
        </div>
      </Card>
    </main>
  );
}
