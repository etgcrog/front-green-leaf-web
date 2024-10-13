"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {

    const searchParams = useSearchParams();

    const error = searchParams.get('error');
    
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        
        signIn('credentials', {
            ...data,
            callbackUrl: '/pages/home'
        })
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg md:max-w-md">
                <div className="flex flex-col items-center">
                    {/* Logo maior e mais destacado */}
                    <Image src={logo} alt="Logo" className="mb-6 shadow-lg" width={300} height={300} />
                    <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Green Leaf Trail</h1>
                </div>
                <form onSubmit={login} className="space-y-6 w-full">
                    {/* Rótulo e campo de email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
                        <Input 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-4 border border-gray-300 rounded-full focus:ring-4 focus:ring-green-400 focus:outline-none transition duration-300"
                        />
                    </div>
                    {/* Rótulo e campo de senha */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-700 font-semibold">Senha</label>
                        <Input 
                            name="password" 
                            type="password" 
                            placeholder="Senha" 
                            className="w-full p-4 border border-gray-300 rounded-full focus:ring-4 focus:ring-green-400 focus:outline-none transition duration-300"
                        />
                    </div>
                    {/* Botão com efeito de sombra e transição suave */}
                    <Button 
                        type="submit" 
                        className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-500 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        Entrar
                    </Button>
                    {error === "CredentialsSignin" && (
                        <div className="text-red-500 text-sm mt-2 text-center">Credenciais inválidas</div>
                    )}
                </form>
                {/* Links alinhados conforme solicitado */}
                <div className="mt-6 flex justify-between w-full">
                    <div className="flex flex-col">
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-800 transition duration-300">Esqueceu a senha?</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-800 transition duration-300">Necessita de acessibilidade?</a>
                    </div>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-800 transition duration-300 self-end">Cadastrar</a>
                </div>
            </div>
        </div>
    )
}