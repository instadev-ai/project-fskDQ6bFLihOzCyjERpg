import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import { useEffect } from "react";

interface BlogPost {
  title: string;
  content: any[];
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
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
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
      content: `// Basic types
const isDone: boolean = false;
const decimal: number = 6;
const color: string = "blue";
const list: number[] = [1, 2, 3];

// Object type
interface Point {
  x: number;
  y: number;
}

const point: Point = { x: 10, y: 20 };

// Union types
type Status = "pending" | "completed" | "failed";
const taskStatus: Status = "pending";

// Generic type
function identity<T>(arg: T): T {
  return arg;
}`
    },
    {
      type: "heading",
      content: "Interfaces and Types"
    },
    {
      type: "paragraph",
      content: "TypeScript's interfaces are powerful tools for defining contracts in your code:"
    },
    {
      type: "code",
      language: "typescript",
      content: `// Interface definition
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean;  // Optional property
  readonly createdAt: Date;  // Read-only property
}

// Implementing an interface
class Employee implements User {
  id: number;
  name: string;
  email: string;
  readonly createdAt: Date;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }
}

// Using the interface
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
};

// Type aliases
type UserRole = "admin" | "user" | "guest";
type UserWithRole = User & { role: UserRole };`
    },
    {
      type: "heading",
      content: "Advanced Features"
    },
    {
      type: "paragraph",
      content: "TypeScript also includes advanced features like generics and utility types:"
    },
    {
      type: "code",
      language: "typescript",
      content: `// Generic interface
interface Repository<T> {
  get(id: number): Promise<T>;
  save(item: T): Promise<void>;
}

// Utility types
type UserPartial = Partial<User>;  // All properties become optional
type UserReadonly = Readonly<User>;  // All properties become readonly

// Mapped types
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// Conditional types
type ExtractArray<T> = T extends Array<infer U> ? U : never;
type ItemType = ExtractArray<string[]>;  // Results in string`
    },
    {
      type: "heading",
      content: "Conclusion"
    },
    {
      type: "paragraph",
      content: "TypeScript provides a robust type system that helps catch errors early in development while maintaining compatibility with JavaScript. Its features like interfaces, generics, and utility types make it an excellent choice for large-scale applications."
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
      return <p className="mb-4 text-lg leading-relaxed">{content.content}</p>;
    }
    if (content.type === "heading") {
      return <h2 className="text-2xl font-bold mt-8 mb-4">{content.content}</h2>;
    }
    if (content.type === "list") {
      return (
        <ul className="list-disc list-inside mb-4 space-y-2">
          {content.items.map((item: string, index: number) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      );
    }
    if (content.type === "code") {
      return (
        <pre className="mb-6 rounded-lg overflow-x-auto bg-[#1e1e1e] p-4">
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

            <div className="mb-12">
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

            <div className="prose prose-lg prose-slate max-w-none">
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