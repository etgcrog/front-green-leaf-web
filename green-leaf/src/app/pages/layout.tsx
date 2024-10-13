"use client"
import Header from "@/components/personal/header";
import Footer from "@/components/personal/footer"; // Importar o Footer
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Header />
        <main className="flex-grow mt-32">
          <SessionProvider>
            {children}
          </SessionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
