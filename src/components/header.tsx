import { Home, Smartphone} from "lucide-react";

import { Separator } from "@radix-ui/react-separator";
import { NavLink } from "./nav-link";

export function Header(){
    return(
        <div className="border-b">
           <div className="flex h-16 items-center gap-6  px-6">
            <Smartphone className="h-6 w-6"/>
            
            <Separator orientation="vertical" />

            <nav className="flex items-center  space-x-4 lg:space-x-6">
                <NavLink to="/">
                      <Home className="h-4  w-4"/>
                      Inicio
                </NavLink>
                <NavLink to="/orders">
                      <Smartphone className="h-4  w-4"/>
                      Pedidoss
                </NavLink> 
            </nav>
           </div>
        </div>
    )
}