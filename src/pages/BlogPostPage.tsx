import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

// This would typically come from an API or CMS
const post: BlogPost = {
  title: "Getting Started with TypeScript",
  content: `
    TypeScript is a powerful superset of JavaScript that adds static typing to the language. 
    This makes it easier to write and maintain large applications by catching errors early in development.

    ## Why TypeScript?

    TypeScript offers several benefits over plain JavaScript:
    - Static typing
    - Better IDE support
    - Enhanced code readability
    - Improved maintainability

    ## Getting Started

    To start using TypeScript in your project, you first need to install it:

    \`\`\`bash
    npm install typescript --save-dev
    \`\`\`

    Then, create a tsconfig.json file:

    \`\`\`json
    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true
      }
    }
    \`\`\`

    ## Basic Types

    TypeScript includes several basic types:

    \`\`\`typescript
    let isDone: boolean = false;
    let decimal: number = 6;
    let color: string = "blue";
    let list: number[] = [1, 2, 3];
    \`\`\`

    ## Interfaces

    Interfaces are one of TypeScript's core features:

    \`\`\`typescript
    interface User {
      name: string;
      id: number;
    }

    const user: User = {
      name: "John",
      id: 1,
    };
    \`\`\`

    ## Conclusion

    TypeScript is an excellent choice for large-scale JavaScript projects. 
    It provides the benefits of static typing while maintaining the flexibility of JavaScript.
  `,
  date: "March 15, 2024",
  readTime: "5 min read",
  category: "Development",
  tags: ["TypeScript", "JavaScript", "Web Development"],
  author: {
    name: "John Doe",
    avatar: "/placeholder.svg"
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();

  // In a real application, you would fetch the post based on the slug
  // For now, we'll just use our mock data

  return (
    <div className="min-h-screen pt-16">
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" className="mb-8" asChild>
              <a href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </a>
            </Button>

            <div className="flex items-center gap-4 mb-8">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  {post.date} • {post.readTime}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{post.category}</Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;