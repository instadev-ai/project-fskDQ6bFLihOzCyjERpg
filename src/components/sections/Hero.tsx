import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Creative Developer &
            <span className="text-primary block mt-2">Digital Creator</span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Welcome to my digital space where I showcase my work in development,
            design, and share my thoughts through my blog.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#portfolio">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/blog">
                Read My Blog
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;