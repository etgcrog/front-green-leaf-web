"use client"
import Header from "@/components/personal/header";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main style={{ marginTop: '8vh' }}>
          <SessionProvider>
            {children}
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
