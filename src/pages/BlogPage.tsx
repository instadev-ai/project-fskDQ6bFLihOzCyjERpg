import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchUsers, Post, User } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { HoverCard, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  const getUserName = (userId: number) => {
    const user = users?.find(u => u.id === userId);
    return user?.name || 'Anonymous';
  };

  const getExcerpt = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const filteredPosts = posts?.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSkeleton = () => (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="group">
          <CardHeader>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-20" />
          </CardContent>
        </Card>
      ))}
    </>
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

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsLoading ? (
              renderSkeleton()
            ) : (
              filteredPosts?.map((post) => (
                <StaggerItem key={post.id}>
                  <HoverCard>
                    <Card className="group h-full flex flex-col">
                      <a href={`/blog/${post.id}`} className="flex-1">
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Badge variant="secondary">Article</Badge>
                            <span>•</span>
                            <span>{getUserName(post.userId)}</span>
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">
                            {getExcerpt(post.body)}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">
                              API
                            </Badge>
                            <Badge variant="outline">
                              Tutorial
                            </Badge>
                          </div>
                        </CardContent>
                      </a>
                    </Card>
                  </HoverCard>
                </StaggerItem>
              ))
            )}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;