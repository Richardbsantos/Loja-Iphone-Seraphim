import {Helmet} from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { toast } from 'sonner'

const signUpForm = z.object({
    email:z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp(){
    const {register, handleSubmit, formState:{isSubmitting}} = useForm<SignUpForm>()

   async function handleSignIn(data:SignUpForm) {
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
    <Helmet title="Cadastro"/>    
    <div className="p-8">
      <div className=" w-[360px] flex-col justify-center fap-6">
        <div className="flex flex-col gap-2 text-center ">
            <h1 className=" text-2xl font-semibold tracking-tight">
                Comece já!
            </h1>
            <p className="text-sm text-muted-foreground ">
                Comece Já!
            </p>

        </div>
        
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Seu Email </Label>
                <Input type="email" id="email" placeholder="Email" {...register('email')} />
                </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
                Finalizar Cadastro 
            </Button>

        </form>    
      </div>
    </div>
    </>

    )
 }