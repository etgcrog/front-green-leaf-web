"use client"
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#DDE5D4] py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
                {/* Coluna de Redes Sociais */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex space-x-4 mb-4">
                        <FaLinkedin className="text-gray-700 hover:text-green-600 cursor-pointer" size={24} />
                        <FaInstagram className="text-gray-700 hover:text-green-600 cursor-pointer" size={24} />
                        <FaWhatsapp className="text-gray-700 hover:text-green-600 cursor-pointer" size={24} />
                        <FaFacebook className="text-gray-700 hover:text-green-600 cursor-pointer" size={24} />
                    </div>
                    <div className="flex space-x-4">
                        <Image src="/app-store.png" alt="App Store" width={120} height={40} />
                        <Image src="/google-play.png" alt="Google Play" width={120} height={40} />
                    </div>
                </div>

                {/* Coluna de Serviços */}
                <div className="text-center">
                    <h3 className="font-bold mb-2">Serviços</h3>
                    <ul>
                        <li><Link href="/premium">Adquira o Premium</Link></li>
                        <li><Link href="/promote-trails">Promova suas trilhas</Link></li>
                    </ul>
                </div>

                {/* Coluna de Explorar Trilhas */}
                <div className="text-center">
                    <h3 className="font-bold mb-2">Explorar Trilhas</h3>
                    <ul>
                        <li><Link href="/about">Sobre nós</Link></li>
                        <li><Link href="/help">Central de ajuda</Link></li>
                        <li><Link href="/donations">Doadores</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
