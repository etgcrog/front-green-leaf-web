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
import Image from 'next/image';
import LoginHandler from "./login";
import imgUrl from '../../public/assets/background_login.png';
import imgLogo from '../../public/assets/logo.png';
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
                <Card className="bg-[#E4FFFC] bg-opacity-80 w-1/3 h-screen card-custom border-0 shadow-none">
                        <div className="h-full flex items-center justify-center w-full flex-col">
                            <Image src={imgLogo} height={180} width={180} alt=""></Image>
                            <CardContent className="w-full">
                                <LoginHandler/>
                            </CardContent>
                        </div>
                </Card>
            </div>
        </main>
    );
}
