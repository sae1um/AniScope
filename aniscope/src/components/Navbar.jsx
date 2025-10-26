"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-tight hover:opacity-75">
                    <Link href={"/"}>
                        Ani<span className="text-primary">Scope</span>.
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    {/* <Link href={"/browse"} className="text-foreground hover:text-primary transition-colors"> */}
                    <Link href={"/browse"} className={`${pathname === '/browse' ? 'text-foreground hover:text-primary': 'text-muted-foreground hover:text-foreground '} transition-colors`} >
                        Browse
                    </Link>
                    <Link href={"/trending"} className={`${pathname === '/trending' ? 'text-foreground hover:text-primary': 'text-muted-foreground hover:text-foreground '} transition-colors`}>
                        Trending
                    </Link>
                    <Link href={"/profile/favourites"} className={`${pathname === '/profile/favourites' ? 'text-foreground hover:text-primary': 'text-muted-foreground hover:text-foreground '} transition-colors`}>
                        Favourites
                    </Link>
                </nav>
                <Button size="sm" className="hidden md:flex hover:opacity-80">
                    Sign In
                </Button>
            </div>
        </header>
    )
}