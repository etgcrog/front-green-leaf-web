// app/api/trails/route.ts
import { NextResponse } from "next/server";
import GetDotenvVariable from "@/config/dotenfconfig";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Importando authOptions

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log("Sessão no backend:", session); // Imprime a sessão no backend

    if (!session || !session.user || !session.user.token) {
      console.log("Sessão não encontrada ou token ausente");
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    console.log("Token encontrado na sessão no backend:", session.user.token); // Imprime o token no backend

    const apiUrl = `${GetDotenvVariable("ENVIROMENT")}/trails`;
    console.log("API URL:", apiUrl); // Verifica a URL da API

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.user.token}`, // Envia o token JWT no cabeçalho
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar trilhas: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Trilhas recebidas da API:", data); // Verifica os dados recebidos

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar trilhas na API:", error);
    return NextResponse.json({ message: "Erro ao buscar trilhas" }, { status: 500 });
  }
}
