"use client"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginHandler() {
    const formSchema = z.object({
        email: z.string().min(10,{message: "O email deve ter pelo menos 10 caracteres"}).max(50, {message: "O email deve ter ate 50 caracteres"}).email({message: "Deve ser preenchido com um email valido"}),
        password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres." })
        .max(8, { message: "A senha deve ter no máximo 8 caracteres." })
        .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula." })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "A senha deve conter pelo menos um caractere especial." })
    });
    
    const formLogin = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email:"",
            password:""
        }
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return(
        <Form {...formLogin}>
            <form className="flex flex-col space-y-3" onSubmit={formLogin.handleSubmit(onSubmit)}>
                <FormField control={formLogin.control} name="email" render={({field}) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="email" {...field}></Input>
                        </FormControl>
                    </FormItem>
                )}></FormField>
                <FormField control={formLogin.control} name="password" render={({field}) => (
                    <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                            <Input placeholder="senha" {...field} type="password"></Input>
                        </FormControl>
                    </FormItem>
                )}></FormField>
                
                <Button className="w-full self-center " type="submit">Log in</Button>
            </form>
        </Form>
    )
}