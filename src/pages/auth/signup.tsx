import { Button } from "@/components/ui/button";
import { ClipLoader } from 'react-spinners';
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from 'sonner';
import { useForm } from "react-hook-form";
import  { z } from 'zod'

const signUpFormSchema = z.object({
    restaurantName: z.string(),
    email: z.string().email(),
    managerName: z.string(),
    phone: z.string(),

})
type SignUpForm = z.infer<typeof signUpFormSchema>
export function SignUp (){

    async function handleSignUp (data : SignUpForm) {
        try {
        
        } catch (error) {
           toast.error('E-mail invalido, verifique seu se esta correto', {className:'bg-red-500 text-yellow-300'}) 
        }
        
    }
    const {register, handleSubmit, formState:{ isSubmitting }} = useForm<SignUpForm>({
    })
    return (
        <>
           <Helmet title='Cadastro'/>
           <div className="p-8">
           <Button asChild variant={'ghost'} className="absolute right-8 top-8 ">
               <Link to='/signin'>Fazer login</Link>
               </Button>
               <div className="flex w-[350px] flex-col justify-center items-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Criar conta
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Seja um parceiro e controle suas vendas
                        </p>
                    </div>

                    <form className="space-y-4 w-full" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-4">
                            <Label htmlFor='email'>Seu E-mail</Label>
                            <Input  id="email" type="email" {...register('email')}/>
                        </div>
                        {isSubmitting ? 
                        <div className="flex items-center justify-center p-2 bg-gray-500 border-radius rounded-md ">
                            <ClipLoader size={24}/>
                        </div> 
                        :<Button className="w-full">Cadastrar</Button>}
                    </form>
               </div>
           </div>
                  

        </>
    )
}


