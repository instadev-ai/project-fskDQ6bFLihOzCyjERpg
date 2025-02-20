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

const post = {
  title: "API Fetching with TypeScript and Axios",
  content: [
    {
      type: "paragraph",
      content: "Learn how to build type-safe API calls using TypeScript and Axios. We'll cover setting up Axios, creating typed API functions, and handling responses with proper TypeScript types."
    },
    {
      type: "heading",
      content: "Setting Up Axios with TypeScript"
    },
    {
      type: "paragraph",
      content: "First, let's install the required dependencies:"
    },
    {
      type: "code",
      language: "bash",
      content: "npm install axios @tanstack/react-query"
    },
    {
      type: "paragraph",
      content: "Create a base API configuration with proper types:"
    },
    {
      type: "code",
      language: "typescript",
      content: `import axios from 'axios';

// Base API configuration
export const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API response types
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
}`
    },
    {
      type: "heading",
      content: "Creating Type-Safe API Functions"
    },
    {
      type: "paragraph",
      content: "Let's create strongly-typed API functions using TypeScript:"
    },
    {
      type: "code",
      language: "typescript",
      content: `// API functions with proper typing
export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/users');
  return response.data;
};

export const fetchUser = async (id: number): Promise<User> => {
  const response = await api.get<User>(\`/users/\${id}\`);
  return response.data;
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await api.post<User>('/users', user);
  return response.data;
};

export const updateUser = async (
  id: number, 
  user: Partial<User>
): Promise<User> => {
  const response = await api.put<User>(\`/users/\${id}\`, user);
  return response.data;
};`
    },
    {
      type: "heading",
      content: "Using with React Query"
    },
    {
      type: "paragraph",
      content: "React Query makes it easy to manage server state in React applications. Here's how to use it with our typed API functions:"
    },
    {
      type: "code",
      language: "typescript",
      content: `import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUsers, createUser, User } from '../lib/api';

// Component using the API
const UserList = () => {
  const queryClient = useQueryClient();

  // Query for fetching users
  const { data: users, isLoading, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  // Mutation for creating a user
  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch users query
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users?.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      type: "heading",
      content: "Error Handling"
    },
    {
      type: "paragraph",
      content: "Let's implement proper error handling with TypeScript:"
    },
    {
      type: "code",
      language: "typescript",
      content: `// Custom error type
interface ApiError {
  message: string;
  code: number;
  details?: Record<string, string[]>;
}

// Error handling wrapper
const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const apiError: ApiError = {
      message: error.response?.data?.message || error.message,
      code: error.response?.status || 500,
      details: error.response?.data?.details,
    };
    throw apiError;
  }
  throw new Error('An unexpected error occurred');
};

// Using the error handler
export const fetchUserSafely = async (id: number): Promise<User> => {
  try {
    const response = await api.get<User>(\`/users/\${id}\`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};`
    },
    {
      type: "heading",
      content: "Request Interceptors"
    },
    {
      type: "paragraph",
      content: "Add type-safe request and response interceptors:"
    },
    {
      type: "code",
      language: "typescript",
      content: `// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

// Handle response errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);`
    },
    {
      type: "heading",
      content: "Best Practices"
    },
    {
      type: "list",
      items: [
        "Always define proper types for API responses",
        "Use TypeScript's utility types like Partial<T> and Omit<T, K>",
        "Implement proper error handling with type checking",
        "Use React Query for efficient server state management",
        "Add type-safe interceptors for common operations"
      ]
    },
    {
      type: "heading",
      content: "Conclusion"
    },
    {
      type: "paragraph",
      content: "Using TypeScript with Axios provides excellent type safety and autocompletion support, making API integrations more reliable and maintainable. Combined with React Query, it creates a robust foundation for handling server state in React applications."
    }
  ],
  date: "March 20, 2024",
  readTime: "8 min read",
  category: "Development",
  tags: ["TypeScript", "API", "Axios", "React"],
  author: {
    name: "John Doe",
    avatar: "/placeholder.svg"
  }
};

const BlogPostPage = () => {
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