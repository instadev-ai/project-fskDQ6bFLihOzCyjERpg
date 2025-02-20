import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
}

const posts: BlogPost[] = [
  {
    title: "Getting Started with TypeScript",
    excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript development workflow.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Development",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    slug: "getting-started-with-typescript"
  },
  {
    title: "Building Modern UIs with React",
    excerpt: "Explore best practices and patterns for creating beautiful user interfaces with React.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Development",
    tags: ["React", "UI/UX", "Web Development"],
    slug: "building-modern-uis-with-react"
  },
  {
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Design",
    tags: ["CSS", "Tailwind", "Web Design"],
    slug: "power-of-tailwind-css"
  },
  {
    title: "Mastering Git Workflows",
    excerpt: "Learn advanced Git techniques and workflows for better team collaboration.",
    date: "March 1, 2024",
    readTime: "10 min read",
    category: "Development",
    tags: ["Git", "DevOps", "Collaboration"],
    slug: "mastering-git-workflows"
  },
  {
    title: "Responsive Design Best Practices",
    excerpt: "Essential tips and techniques for creating responsive web designs that work across all devices.",
    date: "February 25, 2024",
    readTime: "7 min read",
    category: "Design",
    tags: ["Responsive Design", "CSS", "Web Design"],
    slug: "responsive-design-best-practices"
  },
  {
    title: "Introduction to Web Accessibility",
    excerpt: "Understanding the importance of web accessibility and how to implement it in your projects.",
    date: "February 20, 2024",
    readTime: "9 min read",
    category: "Development",
    tags: ["Accessibility", "HTML", "Web Development"],
    slug: "introduction-to-web-accessibility"
  }
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thoughts, tutorials and insights about web development and design.
            </p>
            <Input
              type="search"
              placeholder="Search posts..."
              className="max-w-md mx-auto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="group">
                <a href={`/blog/${post.slug}`}>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
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

export default BlogPage;