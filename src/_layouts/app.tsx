import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'
export function AppLayout () {
    return(
    <div className="flex felx-col min-h-screen antialiased ">
        <Header/>
        
        <div className="flex-1 flex-col gap-4 --8 pt-6">
            <Outlet/>
        </div>
    </div>
    ) 
}