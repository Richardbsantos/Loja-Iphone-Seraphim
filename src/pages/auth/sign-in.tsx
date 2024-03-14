import {Helmet} from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


export function SignIn(){
    return (
    <>
    <Helmet title="Login"/>    
    <div className="p-8">
      <div className=" w-[360px] flex-col justify-center fap-6">
        <div className="flex flex-col gap-2 text-center ">
            <h1 className=" text-2xl font-semibold tracking-tight">
                Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground ">
                Acompanhe suas vendas pelo Painel Administrativo!
            </p>

        </div>
        
        <form className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Seu Email </Label>
                <Input type="email" id="email" placeholder="Email" />
                </div>

            <Button className="w-full" type="submit">Acessar Painel</Button>

        </form>    
      </div>
    </div>
    </>

    )
 }