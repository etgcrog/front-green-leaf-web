"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";

export default function RegisterForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    async function register(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email'),
            password: formData.get('password'),
        };

        // Verificar se as senhas coincidem
        if (password !== confirmPassword) {
            setPasswordError("As senhas não coincidem");
            return;
        } else {
            setPasswordError(""); // Limpar o erro se coincidir
        }

        // Implementar a lógica de registro, como chamada à API.
        console.log("Registrando usuário:", data);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg md:max-w-md">
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <Image src={logo} alt="Logo" className="mb-6 shadow-lg" width={300} height={300} />
                    <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Green Leaf Trail</h1>
                </div>
                <form onSubmit={register} className="space-y-6 w-full">
                    {/* Campo de nome */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 font-semibold">Nome</label>
                        <Input 
                            name="name" 
                            type="text" 
                            placeholder="Nome completo" 
                            className="w-full p-4 border border-gray-300 rounded-full focus:ring-4 focus:ring-green-400 focus:outline-none transition duration-300"
                        />
                    </div>
                    {/* Campo de sobrenome */}
                    <div className="flex flex-col">
                        <label htmlFor="surname" className="text-gray-700 font-semibold">Sobrenome</label>
                        <Input 
                            name="surname" 
                            type="text" 
                            placeholder="Sobrenome" 
                            className="w-full p-4 border border-gray-300 rounded-full focus:ring-4 focus:ring-green-400 focus:outline-none transition duration-300"
                        />
                    </div>
                    {/* Campo de email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
                        <Input 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-4 border border-gray-300 rounded-full focus:ring-4 focus:ring-green-400 focus:outline-none transition duration-300"
                        />
                    </div>
                    {/* Campo de senha */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-700 font-semibold">Senha</label>
                        <Input 
                            name="password" 
                            type="password" 
                            placeholder="Senha" 
                            className="w-full p-4 border border-gray-300 rounded-full focus:ring-4 focus:ring-green-400 focus:outline-none transition duration-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* Campo de confirmação de senha */}
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="text-gray-700 font-semibold">Confirme a senha</label>
                        <Input 
                            name="confirmPassword" 
                            type="password" 
                            placeholder="Confirme a senha" 
                            className="w-full p-4 border border-gray-300 rounded-full focus:ring-4 focus:ring-green-400 focus:outline-none transition duration-300"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {passwordError && (
                        <div className="text-red-500 text-sm mt-2 text-center">{passwordError}</div>
                    )}
                    {/* Botão de cadastro */}
                    <Button 
                        type="submit" 
                        className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-500 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        Cadastrar
                    </Button>
                </form>
            </div>
        </div>
    );
}
