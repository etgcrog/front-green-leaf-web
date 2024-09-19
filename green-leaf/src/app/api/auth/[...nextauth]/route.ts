import GetDotenvVariable from "@/config/dotenfconfig";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const authDTO = {
                    email: credentials?.email,
                    password: credentials?.password
                };
                const res = await fetch(`${GetDotenvVariable("ENVIROMENT")}/users/authenticate`, {
                    method: 'POST',
                    body: JSON.stringify(authDTO),
                    headers: { "Content-Type": "application/json" }
                });

                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }
                return null;
            }
        })
    ],
});
export { handler as GET, handler as POST };
