import { mockAnimeData } from "@/lib/mock/mockAnimeData";
import { Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const PLACEHOLDER_IMG =
    "https://imgs.search.brave.com/bpR3rkzw_qY2y4ekY5X07rHr1hUXG-1cCFtsnahrxRQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb3Jl/bWlwc3VtLmltZ2l4/Lm5ldC81aVRRZDNK/Y0M1ZTA3MDN6Qk1u/eE43L2VmMWE1Njkw/YzQ4MTNlNzE3MzEx/NzFiZDc1YTQzZGQ2/L3BsYWNlaG9sZGVy/cy5kZXYtMTI4MHg3/MjAucG5nP3c9MTky/MCZxPTYwJmF1dG89/Zm9ybWF0LGNvbXBy/ZXNz";
export default function PopularGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-4 gap-6 auto-rows-auto">
            {mockAnimeData.map((anime) => (
                <div
                    key={anime.id}
                    className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                        anime.size === "large"
                            ? "md:col-span-2 md:row-span-2"
                            : anime.size === "medium"
                            ? "md:row-span-2"
                            : "row-span-1"
                    }`}
                >
                    <div className="relative aspect-[3/4] overflow-hidden w-full h-full">
                        <img
                            src={anime.imageUrl || PLACEHOLDER_IMG}
                            alt={anime.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <button>
                            <Heart
                            //  IMPLEMENT FUNCTIONALITY
                            // className={`h-5 w-5 ${
                            //     favorites.includes(anime.id)
                            //         ? "fill-primary text-primary"
                            //         : "text-foreground"
                            // }`}
                            />
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                            <div className="flex items-center gap-2 flex-wrap">
                                {/* ADD ACTUAL BADGE INFO */}
                                <Badge
                                    variant="secondary"
                                    className="bg-primary/20 text-primary border-primary/30"
                                >
                                    <Star className="h-3 w-3 mr-1 fill-primary" />
                                    {anime.rating}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    {anime.episodes} eps
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    {anime.status}
                                </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                {anime.title}
                            </h3>
                            <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                                {anime.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
