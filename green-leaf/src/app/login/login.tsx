// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { signIn } from "next-auth/react";
// import { redirect } from "next/navigation";

// export default function LoginHandler() {

//   const formSchema = z.object({
//     email: z
//       .string()
//       .min(10, { message: "O email deve ter pelo menos 10 caracteres" })
//       .max(50, { message: "O email deve ter até 50 caracteres" })
//       .email({ message: "Deve ser preenchido com um email válido" }),
//     password: z
//       .string()
//       .min(8, { message: "A senha deve ter pelo menos 8 caracteres." })
//       .max(8, { message: "A senha deve ter no máximo 8 caracteres." })
//       .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula." })
//       .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "A senha deve conter pelo menos um caractere especial." }),
//   });

//   const formLogin = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

  

//   function handleSubmit()  {
//     signIn('credentials', {
//       formLogin,
//       callbackUrl: "/home"
//     })
//   }
//   redirect

//   return (
//     <Form {...formLogin}>
//       <form className="flex flex-col space-y-3 self-center" onSubmit={handleSubmit()}>
//         <FormField
//           control={formLogin.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="email" {...field}></Input>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         ></FormField>
//         <FormField
//           control={formLogin.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Senha</FormLabel>
//               <FormControl>
//                 <Input placeholder="senha" {...field} type="password"></Input>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         ></FormField>

//         <Button className="w-full self-center" type="submit">
//           Log in
//         </Button>
//       </form>
//     </Form>
//   );
// }
