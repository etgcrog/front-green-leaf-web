import Image from "next/image";
import logo from "@/assets/images/logoBg.png";
import Link from "next/link";
import { Button } from "../ui/button";
export default function Header() {
    return(
        <header className="h-[8vh] pl-3 pr-3 flex flex-row items-center">
            <div className="w-12">
                <Image src={logo} alt="Logo" layout="responsive"></Image>
            </div>
            
            <h1 className="text-[#426B1F] font-medium font-sans text-2xl pl-4">Green Leaf Trail</h1>
            <div className="flex items-end ml-auto space-x-4">
                <Link href={"/shopping"}>Shopping</Link>
                <Link href={"/novidades"}>Novidades</Link>
                <Link href={"/quem-somos"}>Quem somos?</Link>
                <Link href={"/perfil"}>Perfil</Link>
                
            </div>
            <Button className="bg-[#426B1F] text-white ml-5 hover:bg-emerald-900 rounded-3xl">Trilhas</Button>
        </header>
    )
}