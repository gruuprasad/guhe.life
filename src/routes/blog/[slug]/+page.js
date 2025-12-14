import { getPost, getPosts } from '$lib/posts';
import { error } from '@sveltejs/kit';

// Disable prerendering when there are no posts
export const prerender = false;

export async function load({ params }) {
  try {
    const post = await getPost(params.slug);
    return {
      post
    };
  } catch (err) {
    throw error(404, 'Post not found');
  }
}

// Generate static paths for all posts
export async function entries() {
  const posts = await getPosts();
  // Return empty array if no posts to avoid prerender errors
  if (posts.length === 0) {
    return [];
  }
  return posts.map(post => ({ slug: post.slug }));
}

