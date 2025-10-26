import { Button } from "@/components/ui/button";
import PopularGrid from "./PopularGrid";
export default function PopularSection() {
    return (
        <div className="container mx-auto">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                        Popular This Week
                    </h2>
                    <p className="text-muted-foreground">
                        Curated picks from the community
                    </p>
                </div>
                <Button variant="ghost" className="hidden md:flex">
                    View All →
                </Button>
            </div>
            <PopularGrid />
        </div>
    );
}
