<script>
  import { base } from "$app/paths";
  import RotatingWheel from "$lib/components/RotatingWheel.svelte";
  
  export let data;
  
  // Separate posts into AI polished and human
  $: humanPosts = data.posts.filter(post => !post.ai_polished);
  $: aiPolishedPosts = data.posts.filter(post => post.ai_polished === true);
</script>

<div class="min-h-[calc(100vh-4rem)] bg-slate-950">
  <div class="container mx-auto px-4 py-20">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-20">
        <div class="flex justify-center mb-8">
          <RotatingWheel size={120} rotationSpeed={0.01} />
        </div>
      </div>

      <!-- Latest Blog Posts -->
      {#if data.posts.length > 0}
        {#if humanPosts.length > 0}
          <section class="mb-16">
            <div class="mb-12 border-b border-slate-800 pb-6">
              <h2 class="text-3xl font-light text-slate-200 tracking-tight">Latest Posts</h2>
            </div>
            <div class="space-y-1">
              {#each humanPosts.slice(0, 10) as post}
                <article class="group border-l-2 border-transparent hover:border-slate-700 transition-colors duration-300">
                  <a href={base + '/blog/' + post.slug} class="block py-6 px-4 hover:bg-slate-900/30 transition-colors">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex-1 min-w-0">
                        <h3 class="text-xl font-light mb-2 text-slate-300 group-hover:text-slate-200 transition-colors">
                          {post.title}
                        </h3>
                        {#if post.description}
                          <p class="text-sm text-slate-500 mb-3 line-clamp-2">{post.description}</p>
                        {/if}
                        <time class="text-xs text-slate-600 font-mono" datetime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </time>
                      </div>
                      <span class="text-slate-600 group-hover:text-slate-500 text-sm">→</span>
                    </div>
                  </a>
                </article>
              {/each}
            </div>
            
            {#if data.posts.length > 10 || humanPosts.length > 10}
              <div class="mt-12 text-center border-t border-slate-800 pt-8">
                <a href={base + '/blog'} class="text-slate-500 hover:text-slate-400 text-sm transition-colors font-light">
                  View All Posts →
                </a>
              </div>
            {/if}
          </section>
        {:else if aiPolishedPosts.length > 0}
          <section class="mb-16">
            <div class="mb-12 border-b border-slate-800 pb-6">
              <h2 class="text-3xl font-light text-slate-200 tracking-tight">Latest Posts</h2>
            </div>
            <div class="space-y-1">
              {#each aiPolishedPosts.slice(0, 10) as post}
                <article class="group border-l-2 border-transparent hover:border-slate-700 transition-colors duration-300">
                  <a href={base + '/blog/' + post.slug} class="block py-6 px-4 hover:bg-slate-900/30 transition-colors">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex-1 min-w-0">
                        <h3 class="text-xl font-light mb-2 text-slate-300 group-hover:text-slate-200 transition-colors">
                          {post.title}
                        </h3>
                        {#if post.description}
                          <p class="text-sm text-slate-500 mb-3 line-clamp-2">{post.description}</p>
                        {/if}
                        <time class="text-xs text-slate-600 font-mono" datetime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </time>
                      </div>
                      <span class="text-slate-600 group-hover:text-slate-500 text-sm">→</span>
                    </div>
                  </a>
                </article>
              {/each}
            </div>
            
            {#if data.posts.length > 10 || aiPolishedPosts.length > 10}
              <div class="mt-12 text-center border-t border-slate-800 pt-8">
                <a href={base + '/blog'} class="text-slate-500 hover:text-slate-400 text-sm transition-colors font-light">
                  View All Posts →
                </a>
              </div>
            {/if}
          </section>
        {/if}
      {:else}
        <div class="text-center py-20">
          <p class="text-slate-600 text-sm">No posts yet.</p>
        </div>
      {/if}
    </div>
  </div>
</div>
