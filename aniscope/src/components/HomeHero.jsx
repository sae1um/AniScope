import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Separator } from "./ui/separator";

export default function HomeHero() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-2">
                <TrendingChip />
                <HeroHeader />
            </div>
            <HeroSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
    );
}

function TrendingChip() {
    return (
        <Badge variant={"outline"} className="border-accent text-accent">
            <TrendingUp className="h-3 w-3" />
            Trending Now
        </Badge>
    );
}

function HeroHeader() {
    return (
        <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                Find Your Next <span className="text-primary">Obsession</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Explore thousands of anime titles, track your favouritesm and
                discover hidden gems in our curated colleciton.
            </p>
            <div className="space-x-3">
                <Button>Start Eploring</Button>
                <Button variant={"outline"}>View Trending</Button>
            </div>
        </div>
    );
}

function HeroSearch({searchQuery, setSearchQuery}) {
    return(
        <Card>
            <CardHeader>
                <CardTitle className="text-muted-foreground font-medium tracking-wider">
                    QUICK SEARCH
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center pb-2">
                    <Search className="absolute mx-4 h5 w-5"/>
                    <Input
                        placeholder="Search anime titles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 py-7 h-4 text-base border-border"
                    />
                </div>
                <Separator />
                {/* REPLACE PLACEHOLDER VALUES */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-1">
                        <div className="text-2xl font-bold text-primary">
                            12K+
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Anime Titles
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-2xl font-bold text-accent">
                            850+
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Studios
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-2xl font-bold">4.8★</div>
                        <div className="text-xs text-muted-foreground">
                            Avg Rating
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
