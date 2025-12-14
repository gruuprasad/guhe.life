<script>
  import { base } from "$app/paths";
  import RotatingWheel from "$lib/components/RotatingWheel.svelte";
  
  export let data;
</script>

<div class="min-h-[calc(100vh-4rem)]">
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="flex justify-center">
          <RotatingWheel size={120} rotationSpeed={0.01} />
        </div>
      </div>

      <!-- Latest Blog Posts -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-indigo-400">Latest Posts</h2>
        <div class="space-y-6">
          {#each data.posts.slice(0, 10) as post}
            <article class="card p-6 hover:border-indigo-500/50 transition-all">
              <h3 class="text-2xl font-bold mb-2 text-white">
                <a href={base + '/blog/' + post.slug} class="hover:text-indigo-400 transition-colors">
                  {post.title}
                </a>
              </h3>
              {#if post.description}
                <p class="text-slate-400 mb-4">{post.description}</p>
              {/if}
              <div class="flex items-center justify-between">
                <time class="text-sm text-slate-500" datetime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <a href={base + '/blog/' + post.slug} class="btn btn-secondary text-sm">
                  Read More →
                </a>
              </div>
            </article>
          {/each}
        </div>
        
        {#if data.posts.length > 10}
          <div class="text-center mt-8">
            <a href={base + '/blog'} class="btn btn-primary">View All Posts</a>
          </div>
        {:else if data.posts.length > 0}
          <div class="text-center mt-8">
            <a href={base + '/blog'} class="btn btn-primary">View All Posts</a>
          </div>
        {/if}
      </section>
    </div>
  </div>
</div>
