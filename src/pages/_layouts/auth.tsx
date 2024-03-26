import {Outlet} from 'react-router-dom'
import { Smartphone } from 'lucide-react'

export function AuthLayout(){
return(
    <div className="grid min-h-screen grid-cols-2 antialiased">
        <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col  justify-between">
            
            <div className=" flex items-center gap-3 text-lg  text-foreground">
            <Smartphone className="h-5 w-5"/>
            <span className=" font-semibold">Seraphim.shop</span>
            </div>

            <footer className=" text-sm">             
                        Painel Administrativo &copy; <span className="font-semibold"> Seraphim.shop - {new Date().getFullYear()} </span>
            </footer>

              
        </div>
                <div className=" relative flex flex-col items-center justify-center">
                    <Outlet/>   
                </div>
    </div>

) 
}
