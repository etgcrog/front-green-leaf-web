import { z } from "zod";
import './style.css';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoginHandler from "./login";
import imgUrl from '../../public/assets/background_login.png'; // Caminho da imagem

export default function Login() {
    return (
        <main
            style={{
                backgroundImage: `url(${imgUrl.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }}
            className="w-screen h-screen"
        >
            <div className="w-screen h-screen flex items-center justify-end">
                <Card className="bg-[#213F3C] bg-opacity-90 w-1/3 h-screen card-custom border-0 shadow-none">
                    <CardHeader>Green Leaf</CardHeader>
                    <CardContent>
                        <LoginHandler />
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
