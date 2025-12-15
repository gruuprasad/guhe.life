<script>
  import { base } from "$app/paths";
  
  export let data;
  
  const { metadata, html } = data.post;
</script>

<div class="min-h-[calc(100vh-4rem)] bg-slate-950">
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <!-- Back link -->
      <a href={base + '/blog'} class="text-slate-600 hover:text-slate-400 text-sm mb-8 inline-block transition-colors font-light">
        ← Back
      </a>
      
      <!-- Article -->
      <article class="mb-12">
        <header class="mb-12 border-b border-slate-800 pb-8">
          <h1 class="text-4xl font-light mb-4 text-slate-200 tracking-tight leading-tight">
            {metadata.title}
          </h1>
          {#if metadata.description}
            <p class="text-slate-500 text-base mb-4 font-light">{metadata.description}</p>
          {/if}
          <time class="text-xs text-slate-600 font-mono" datetime={metadata.date}>
            {new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </header>
        
        <div class="prose prose-invert prose-lg max-w-none prose-headings:text-slate-200 prose-headings:font-light prose-p:text-slate-400 prose-p:leading-relaxed prose-a:text-slate-300 prose-a:border-b prose-a:border-slate-700 prose-a:hover:border-slate-600 prose-strong:text-slate-300 prose-code:text-slate-300 prose-code:bg-slate-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-blockquote:border-l-slate-700 prose-blockquote:text-slate-500 prose-li:text-slate-400">
          {@html html}
        </div>
      </article>
      
      <!-- Footer -->
      <div class="border-t border-slate-800 pt-8">
        <a href={base + '/blog'} class="text-slate-600 hover:text-slate-400 text-sm transition-colors font-light">
          ← Back to Blog
        </a>
      </div>
    </div>
  </div>
</div>

