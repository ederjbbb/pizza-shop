import { Button } from "@/components/ui/button";
import { ClipLoader } from 'react-spinners';
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from 'sonner';
import { useForm } from "react-hook-form";
import  { z } from 'zod'

const signInFormSchema = z.object({
    email: z.string().email(),
})
type SignInForm = z.infer<typeof signInFormSchema>
export function SignIn (){

    async function handleSignIn (data : SignInForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            toast.success('Cadastramento feito com sucesso', {
                action: {
                  onClick: () => handleSignIn(data)  
                },
            })
        } catch (error) {
           toast.error('E-mail invalido, verifique seu se esta correto', {className:'bg-red-500 text-yellow-300'}) 
        }
        
    }
    const {register, handleSubmit, formState:{ isSubmitting }} = useForm<SignInForm>({
    })
    return (
        <>
           <Helmet title='SignIn'/>

           <div className="p-8">
               <Button asChild variant={'ghost'} className="absolute right-8 top-8 ">
               <Link to='/signup'>Nao tem cadastro ?</Link>
               </Button>
               
               <div className="flex w-[350px] flex-col justify-center items-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Acessar Painel
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Acompanhe suas vendas pelo painel
                        </p>
                    </div>

                    <form className="space-y-4 w-full" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="space-y-4">
                            <Label htmlFor='email'>Seu E-mail</Label>
                            <Input  id="email" type="email" {...register('email')}/>
                        </div>
                        {isSubmitting ? 
                        <div className="flex items-center justify-center p-2 bg-gray-500 border-radius rounded-md ">
                            <ClipLoader size={24}/>
                        </div> 
                        :<Button className="w-full">Acessar painel</Button>}
                    </form>
               </div>
           </div>
                  

        </>
    )
}


