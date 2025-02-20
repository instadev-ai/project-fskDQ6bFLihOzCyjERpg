import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    link: "#",
    category: "Web Development"
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website for a photographer",
    image: "/placeholder.svg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    category: "Web Design"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Material UI"],
    link: "#",
    category: "Web Development"
  },
  {
    title: "Restaurant Website",
    description: "A modern website for a local restaurant",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    category: "Web Design"
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather dashboard with data visualization",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "Weather API"],
    link: "#",
    category: "Web Development"
  },
  {
    title: "Blog Platform",
    description: "A custom blog platform with CMS integration",
    image: "/placeholder.svg",
    tags: ["Next.js", "Sanity.io", "Tailwind CSS"],
    link: "#",
    category: "Web Development"
  }
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">My Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              A collection of my best work in web development and design.
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
                    <div className="mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
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
    </div>
  );
};

export default PortfolioPage;