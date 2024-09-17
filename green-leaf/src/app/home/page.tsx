import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }

    return (
        <main>Welcome to home page {session?.user?.name}</main>
    )
}