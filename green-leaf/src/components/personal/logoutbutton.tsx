import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function LogoutButton() {
    return(
        <Button className="" onClick={() => signOut()}>Sair</Button>
    )
}