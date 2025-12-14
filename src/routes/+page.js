import { getPosts } from '$lib/posts';

export async function load() {
  const posts = await getPosts();
  return {
    posts: posts.slice(0, 10) // Get latest 10 posts for homepage
  };
}

