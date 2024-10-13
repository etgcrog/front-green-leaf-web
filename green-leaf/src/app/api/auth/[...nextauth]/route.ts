import GetDotenvVariable from "@/config/dotenfconfig";
import NextAuth, { NextAuthOptions, Session, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

// Estendendo o tipo Session para incluir token e outros dados do usuário
declare module "next-auth" {
  interface Session {
    user: {
      token?: string;
      refreshToken?: string;
      profilePicture?: string;
      [key: string]: any; // Para outras propriedades dinâmicas
    } & DefaultSession["user"];
  }
}

console.log("Iniciando configuração do NextAuth");

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Autenticando o usuário...");
        const authDTO = {
          email: credentials?.email,
          password: credentials?.password,
        };
        const res = await fetch(
          `${GetDotenvVariable("ENVIROMENT")}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(authDTO),
            headers: { "Content-Type": "application/json" },
          }
        );

        const user = await res.json();
        console.log("Resposta da API de autenticação:", user); // Verifica a resposta completa da API

        if (res.ok && user) {
          console.log("Usuário autenticado:", user);
          return user; // Retorna o objeto `user`, que deve conter o token
        }

        console.log("Falha na autenticação");
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      console.log("Callback jwt chamado");

      if (user) {
        console.log("Usuário no callback jwt:", user);

        // Pega o token correto do objeto `tokens`
        token.token = user.tokens.access_token; // Atribui o access_token
        token.refreshToken = user.tokens.refresh_token; // Atribui o refresh_token
        token.profilePicture = user.profilePicture; // Pega a imagem de perfil

        console.log("Token no callback jwt:", token.token);
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      console.log("Callback session chamado");

      // Pega o token do JWT e adiciona à sessão
      session.user.token = token.token as string | undefined;
      session.user.refreshToken = token.refreshToken as string | undefined;
      session.user.profilePicture = token.profilePicture as string | undefined;

      console.log("Token no callback session:", session.user);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
