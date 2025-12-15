<script>
  import { base } from "$app/paths";
  import { getPosts } from "$lib/posts";
  
  export let data;
</script>

<div class="min-h-[calc(100vh-4rem)] bg-slate-950">
  <div class="container mx-auto px-4 py-20">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-16 border-b border-slate-800 pb-8">
        <h1 class="text-5xl font-light mb-3 text-slate-200 tracking-tight">Blog</h1>
      </div>

      <!-- Posts List -->
      {#if data.posts.length > 0}
        <div class="space-y-1">
          {#each data.posts as post}
            <article class="group border-l-2 border-transparent hover:border-slate-700 transition-colors duration-300">
              <a href={base + '/blog/' + post.slug} class="block py-6 px-4 hover:bg-slate-900/30 transition-colors">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1 min-w-0">
                    <h2 class="text-xl font-light mb-2 text-slate-300 group-hover:text-slate-200 transition-colors">
                      {post.title}
                    </h2>
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
      {:else}
        <div class="text-center py-20">
          <p class="text-slate-600 text-sm">No posts yet.</p>
        </div>
      {/if}
    </div>
  </div>
</div> 