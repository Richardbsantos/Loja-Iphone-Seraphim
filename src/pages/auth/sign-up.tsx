import {Helmet} from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import { toast } from 'sonner'
import {Link} from 'react-router-dom'
import {z} from 'zod'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
    name:z.string(),
    phone:z.string(),
    email:z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp(){
    const {register, handleSubmit, formState:{isSubmitting}} = useForm<SignUpForm>()

   async function handleSignUp(data:SignUpForm) {
      try{
        console.log(data)

        await new Promise(resolve => setTimeout(resolve, 2008))
        toast.success('Usuario Cadastrado com Sucesso!',{
            action:{
                label:'Reenviar',
                onClick:() => handleSignUp(data),
            }
        })
      } catch {
        toast.error('Erro ao cadastra Usuario.')
      }
   }

    return (
    <>
    <Helmet title="Cadastro"/>    
    <div className="p-8">
    <Button variant= "ghost" asChild className="absolute right-8 top-8">
         <Link to="/sign-in">
              Fazer Login 
         </Link>
         </Button>
      <div className=" w-[360px] flex-col justify-center fap-6">
        <div className="flex flex-col gap-2 text-center ">
            <h1 className=" text-2xl font-semibold tracking-tight">
                Comece já!
            </h1>
            <p className="text-sm text-muted-foreground ">
                Acompanhe suas vendas!
            </p>

        </div>
        
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Seu Nome </Label>
                <Input type="text" id="name"  {...register('name')} />
            </div>
             
            <div className="space-y-2">
                <Label htmlFor="email">Seu Email </Label>
                <Input type="email" id="email"  {...register('email')} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Seu celular </Label>
                <Input type="tel" id="phone"  {...register('phone')} />
            </div>


            <Button disabled={isSubmitting} className="w-full" type="submit">
                Finalizar Cadastro 
            </Button>
             <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                Ao continuar, você concorda com os nossos{' '} 
                <a className="underline underline-offset-4" href=''>termos de serviços</a> {' '}
                 e {' '} 
                <a className="underline underline-offset-4" href=''>privacidade.</a>
             </p>
        </form>    
      </div>
    </div>
    </>

    )
 }