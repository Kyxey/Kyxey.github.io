export interface Post {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  videoUrl?: string;
  publishedAt: string;
  url: string;
  platform: 'medium' | 'linkedin' | 'x';
}

export interface PaginatedResponse {
  posts: Post[];
  hasMore: boolean;
  nextCursor?: string;
}
