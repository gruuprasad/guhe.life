<script>
  import { base } from "$app/paths";
  import { getPosts } from "$lib/posts";
  
  export let data;
</script>

<section class="section gradient-bg">
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4 gradient-text">Blog</h1>
      <p class="text-slate-400 text-lg">Insights, tutorials, and stories from my journey as a developer.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-8">
      {#each data.posts as post}
        <div class="card p-6">
          <h2 class="text-2xl font-bold mb-2 text-white">{post.title}</h2>
          <p class="text-slate-400 mb-4">{post.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <a href={base + '/blog/' + post.slug} class="btn btn-secondary">Read More</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> 