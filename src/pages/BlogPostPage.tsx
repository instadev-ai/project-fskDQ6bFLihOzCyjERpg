import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import { useEffect } from "react";

interface BlogPost {
  title: string;
  content: string[];
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
  content: [
    {
      type: "paragraph",
      content: "TypeScript is a powerful superset of JavaScript that adds static typing to the language. This makes it easier to write and maintain large applications by catching errors early in development."
    },
    {
      type: "heading",
      content: "Why TypeScript?"
    },
    {
      type: "paragraph",
      content: "TypeScript offers several benefits over plain JavaScript:"
    },
    {
      type: "list",
      items: [
        "Static typing",
        "Better IDE support",
        "Enhanced code readability",
        "Improved maintainability"
      ]
    },
    {
      type: "heading",
      content: "Getting Started"
    },
    {
      type: "paragraph",
      content: "To start using TypeScript in your project, you first need to install it:"
    },
    {
      type: "code",
      language: "bash",
      content: "npm install typescript --save-dev"
    },
    {
      type: "paragraph",
      content: "Then, create a tsconfig.json file:"
    },
    {
      type: "code",
      language: "json",
      content: `{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  }
}`
    },
    {
      type: "heading",
      content: "Basic Types"
    },
    {
      type: "paragraph",
      content: "TypeScript includes several basic types:"
    },
    {
      type: "code",
      language: "typescript",
      content: `let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];`
    },
    {
      type: "heading",
      content: "Interfaces"
    },
    {
      type: "paragraph",
      content: "Interfaces are one of TypeScript's core features:"
    },
    {
      type: "code",
      language: "typescript",
      content: `interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "John",
  id: 1,
};`
    },
    {
      type: "heading",
      content: "Conclusion"
    },
    {
      type: "paragraph",
      content: "TypeScript is an excellent choice for large-scale JavaScript projects. It provides the benefits of static typing while maintaining the flexibility of JavaScript."
    }
  ],
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

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const renderContent = (content: any) => {
    if (content.type === "paragraph") {
      return <p className="mb-4">{content.content}</p>;
    }
    if (content.type === "heading") {
      return <h2 className="text-2xl font-bold mt-8 mb-4">{content.content}</h2>;
    }
    if (content.type === "list") {
      return (
        <ul className="list-disc list-inside mb-4">
          {content.items.map((item: string, index: number) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      );
    }
    if (content.type === "code") {
      return (
        <pre className="mb-4 rounded-lg overflow-x-auto">
          <code className={`language-${content.language}`}>
            {content.content}
          </code>
        </pre>
      );
    }
    return null;
  };

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
              {post.content.map((section, index) => (
                <div key={index}>{renderContent(section)}</div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;