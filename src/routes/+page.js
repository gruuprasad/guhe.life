import { getPosts } from '$lib/posts';

export async function load() {
  try {
    const posts = await getPosts();
    return {
      posts: posts.slice(0, 10) // Get latest 10 posts for homepage
    };
  } catch (error) {
    console.error('Error loading posts:', error);
    // Return empty array if posts fail to load
    return {
      posts: []
    };
  }
}

