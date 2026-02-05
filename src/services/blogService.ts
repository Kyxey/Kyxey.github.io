import type { Post, PaginatedResponse } from '@/types/blog';

const POSTS_PER_PAGE = 6;

interface RSSItem {
  guid: string;
  title: string;
  description: string;
  thumbnail?: string;
  content: string;
  pubDate: string;
  link: string;
}

interface RSSResponse {
  status: string;
  items: RSSItem[];
}

// Medium RSS to JSON API
export async function fetchMediumPosts(
  username: string,
  page: number = 1
): Promise<PaginatedResponse> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    );
    const data = (await response.json()) as RSSResponse;

    if (data.status !== 'ok') {
      throw new Error('Failed to fetch Medium posts');
    }

    const allPosts: Post[] = data.items.map((item: RSSItem) => {
      const imageUrl = item.thumbnail || extractImageFromContent(item.content);
      return {
        id: item.guid,
        title: item.title,
        excerpt: `${item.description.replace(/<[^>]*>/g, '').substring(0, 150)}...`,
        ...(imageUrl && { imageUrl }),
        publishedAt: item.pubDate,
        url: item.link,
        platform: 'medium' as const,
      };
    });

    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const posts = allPosts.slice(startIndex, endIndex);

    return {
      posts,
      hasMore: endIndex < allPosts.length,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching Medium posts:', error);
    return { posts: [], hasMore: false };
  }
}

function extractImageFromContent(content: string): string | undefined {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : undefined;
}
