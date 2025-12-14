<script>
  import { base } from "$app/paths";
  
  export let data;
  
  const { metadata, html } = data.post;
</script>

<section class="section gradient-bg">
  <div class="container">
    <div class="max-w-3xl mx-auto">
      <a href={base + '/blog'} class="text-indigo-400 hover:text-indigo-300 mb-6 inline-block">
        ← Back to Blog
      </a>
      
      <article class="card p-8">
        <header class="mb-8">
          <h1 class="text-4xl font-bold mb-4 gradient-text">{metadata.title}</h1>
          {#if metadata.description}
            <p class="text-xl text-slate-400 mb-4">{metadata.description}</p>
          {/if}
          <time class="text-sm text-slate-500" datetime={metadata.date}>
            {new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </header>
        
        <div class="prose prose-invert prose-lg max-w-none">
          {@html html}
        </div>
      </article>
      
      <div class="mt-8 text-center">
        <a href={base + '/blog'} class="btn btn-secondary">Back to Blog</a>
      </div>
    </div>
  </div>
</section>

