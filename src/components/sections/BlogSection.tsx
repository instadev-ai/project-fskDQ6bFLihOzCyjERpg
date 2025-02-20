import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

const recentPosts: BlogPost[] = [
  {
    title: "Getting Started with TypeScript",
    excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript development workflow.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "getting-started-with-typescript"
  },
  {
    title: "Building Modern UIs with React",
    excerpt: "Explore best practices and patterns for creating beautiful user interfaces with React.",
    date: "March 10, 2024",
    readTime: "8 min read",
    slug: "building-modern-uis-with-react"
  },
  {
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    date: "March 5, 2024",
    readTime: "6 min read",
    slug: "power-of-tailwind-css"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Latest Blog Posts</h2>
          <p className="text-muted-foreground">
            Thoughts, tutorials and insights about web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recentPosts.map((post, index) => (
            <Card key={index} className="group">
              <a href={`/blog/${post.slug}`}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
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
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <a href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;