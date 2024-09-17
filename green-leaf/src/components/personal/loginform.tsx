"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function LoginForm() {
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        
        signIn('credentials', {
            ...data,
            callbackUrl: '/home/'
        })
    }

    return(
        <form onSubmit={login} className="bg-slate-200 p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
            <Image src={logo} alt="Logo"></Image>
            <Input name="email" type="email" placeholder="email" className=""/>
            <Input name="password" type="password" placeholder="senha" className=""/>
            <Button type="submit" className="bg-green-300">Login</Button>
        </form>
    )
}