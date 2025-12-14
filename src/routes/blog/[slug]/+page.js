import { getPost, getPosts } from '$lib/posts';
import { error } from '@sveltejs/kit';

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
  return posts.length > 0 ? posts.map(post => ({ slug: post.slug })) : [];
}

