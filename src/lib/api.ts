import axios from 'axios';

// Base API configuration
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API response types
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// API functions
export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>('/posts');
  return response.data;
};

export const fetchPost = async (id: number): Promise<Post> => {
  const response = await api.get<Post>(`/posts/${id}`);
  return response.data;
};

export const fetchPostComments = async (postId: number): Promise<Comment[]> => {
  const response = await api.get<Comment[]>(`/posts/${postId}/comments`);
  return response.data;
};

export const fetchUser = async (id: number): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};

export const createPost = async (post: Omit<Post, 'id'>): Promise<Post> => {
  const response = await api.post<Post>('/posts', post);
  return response.data;
};

export const updatePost = async (id: number, post: Partial<Post>): Promise<Post> => {
  const response = await api.put<Post>(`/posts/${id}`, post);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await api.delete(`/posts/${id}`);
};