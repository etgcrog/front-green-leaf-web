import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

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
            async authorize(credentials, req) {
            //   const res = await fetch("/your/endpoint", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            //   })

            //   const user = await res.json()

            //   if (res.ok && user) {
            //     return user
            //   }
            //   return null
            if (!credentials) {
                return null;
            }
            if (credentials.email === "eduardo@gmail.com" && credentials.password === "1234") {
                return {
                    id: "1",
                    name: "Eduardo",
                    email: "eduardo@gmail.com",
                    image: "/avatar.jpg",
                    roles: ["admin"]
                }
            }
            
            return null;

            }
        })
    ]
})

export { handler as GET, handler as POST }