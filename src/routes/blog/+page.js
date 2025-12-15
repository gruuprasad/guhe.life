import { getPosts } from '$lib/posts';
import { error } from '@sveltejs/kit';

export async function load() {
  try {
    const posts = await getPosts();
    return {
      posts
    };
  } catch (err) {
    console.error('Error loading posts:', err);
    // Return empty array on error instead of crashing
    return {
      posts: []
    };
  }
}

