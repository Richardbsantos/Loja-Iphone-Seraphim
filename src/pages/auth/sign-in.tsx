import {Helmet} from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import { toast } from 'sonner'
import {Link} from 'react-router-dom'
import {z} from 'zod'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
    email:z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn(){
    const {register, 
           handleSubmit, 
           formState:{isSubmitting},
          } = useForm<SignInForm>()

   async function handleSignIn(data:SignInForm) {
      try{
        

        await new Promise(resolve => setTimeout(resolve, 2008))
        toast.success('Enviamos um email de autenticação para seu email.',{
            action:{
                label:'Reenviar',
                onClick:() => handleSignIn(data),
            }
        })
      } catch {
        toast.error('Credenciais inválidas.')
      }
   }

    return (
    <>
    <Helmet title="Login"/>    
    <div className="p-8">
        <Button variant= "ghost" asChild className="absolute right-8 top-8">
         <Link to="/sign-up">
              Novo Cadastro 
         </Link>
         </Button>
      <div className=" w-[360px] flex-col justify-center fap-6">
        <div className="flex flex-col gap-2 text-center ">
            <h1 className=" text-2xl font-semibold tracking-tight">
                Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground ">
                Acompanhe suas vendas pelo Painel Administrativo!
            </p>

        </div>
        
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Seu Email </Label>
                <Input type="email" id="email" placeholder="Email" {...register('email')} />
                </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
                Acessar Painel
            </Button>

        </form>    
      </div>
    </div>
    </>

    )
 }