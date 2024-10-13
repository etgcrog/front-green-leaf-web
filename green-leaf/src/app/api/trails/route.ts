import { NextResponse } from "next/server";
import GetDotenvVariable from "@/config/dotenfconfig";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Definindo as interfaces para os dados das trilhas e usuários
interface User {
  id: string; // ID do usuário
  firstName: string; // Primeiro nome do usuário
  lastName: string; // Sobrenome do usuário
}

interface Trail {
  id: string; // ID da trilha
  name: string; // Nome da trilha
  difficulty: string; // Dificuldade da trilha
  distance: number; // Distância da trilha
  rating: number; // Nota da trilha
  photo: string; // Propriedade para a URL da imagem da trilha
  createdBy: User; // Propriedade para o usuário que criou a trilha
  author?: string; // Nome do autor da trilha (opcional)
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log("Sessão no backend:", session);

    if (!session || !session.user || !session.user.token) {
      console.log("Sessão não encontrada ou token ausente");
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    console.log("Token encontrado na sessão no backend:", session.user.token);

    const apiUrlTrails = `${GetDotenvVariable("ENVIROMENT")}/trails`; // URL das trilhas

    // Buscar trilhas
    const trailsResponse = await fetch(apiUrlTrails, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.user.token}`,
        "Content-Type": "application/json",
      },
    });

    if (!trailsResponse.ok) {
      throw new Error(`Erro ao buscar trilhas: ${trailsResponse.statusText}`);
    }

    const trailsData = await trailsResponse.json();
    console.log("Trilhas recebidas da API:", trailsData);

    // Combinar trilhas com dados dos usuários já inclusos
    const trailsWithAuthors = trailsData.data.map((trail: Trail) => {
      return {
        ...trail,
        author: trail.createdBy ? `${trail.createdBy.firstName} ${trail.createdBy.lastName}` : 'Autor Desconhecido', // Concatenar o nome e sobrenome
      };
    });

    console.log("Trilhas com autores:", trailsWithAuthors); // Verifica os dados finais das trilhas

    return NextResponse.json(trailsWithAuthors, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar trilhas:", error);
    return NextResponse.json({ message: "Erro ao buscar trilhas" }, { status: 500 });
  }
}
