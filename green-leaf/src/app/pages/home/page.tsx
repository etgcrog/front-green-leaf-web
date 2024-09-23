"use client"
import Header from "@/components/personal/header";
import LogoutButton from "@/components/personal/logoutbutton";
import TrailCard from "@/components/personal/trailCards";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = useSession();

    if (!session) {
        redirect("/");
    }
    console.log(session.data);

    return (
        <main>
            <div className="flex flex-row items-end">
                <h1 className="text-5xl font-serif">Trilhas</h1>
                <p className="pl-2">5 itens</p>
            </div>
            <hr className="mt-4 pt-2" />
            <div className="overflow-auto h-[80vh] w-[70%]"> {/* Contêiner com scroll */}
                <div className="grid grid-cols-1 gap-4 pr-4">
                    {Array.from({ length: 5 }, (_, index) => (
                        <TrailCard key={index} />
                    ))}
                </div>
            </div>
            <LogoutButton />
        </main>
    );
}
