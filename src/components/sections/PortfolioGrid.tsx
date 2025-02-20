import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with modern design",
    image: "/placeholder.svg",
    tags: ["Next.js", "Redux", "Node.js"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "Real-time dashboard with data visualization",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "Firebase"],
    link: "#"
  }
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of my favorite works across web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <a href={project.link} className="block">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;