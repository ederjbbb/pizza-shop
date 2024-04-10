import { Outlet } from "react-router-dom";
import { Pizza } from "lucide-react";

export function AuthLayout () {
    return (
        <div className="min-h-screen lg:grid grid-cols-2 sm:gird grid-row-2 antialiased">
            <div className=" h-full border-r border-foreground1/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
                <div className="flex items-center gap-2 text-lg font-medium text-foreground">
                    <Pizza className="h-5 w-5 " />
                    <span className="font-semibold">Pizza Shop</span>
                </div>
                <footer className="text-sm">
                    Eder Brito &copy; Pizza Shop - {new Date().getFullYear()}
                </footer>
            </div>

            <div className="relative flex flex-col items-center justify-center">
                <Outlet/>
            </div>

        </div>
    )
}