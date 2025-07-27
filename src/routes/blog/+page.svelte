<script>
  import { base } from "$app/paths";
  let posts = [
    {
      title: "How to Build a Modern Web App",
      description: "A step-by-step guide to building scalable web applications using SvelteKit and Tailwind CSS.",
      slug: "how-to-build-modern-web-app"
    },
    {
      title: "DevOps Best Practices in 2024",
      description: "Explore the latest trends and best practices in DevOps, CI/CD, and cloud infrastructure.",
      slug: "devops-best-practices-2024"
    }
  ];
</script>

<section class="section gradient-bg">
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4 gradient-text">Blog</h1>
      <p class="text-slate-400 text-lg">Insights, tutorials, and stories from my journey as a developer.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-8">
      {#each posts as post}
        <div class="card p-6">
          <h2 class="text-2xl font-bold mb-2 text-white">{post.title}</h2>
          <p class="text-slate-400 mb-4">{post.description}</p>
          <a href={base + '/blog/' + post.slug} class="btn btn-secondary">Read More</a>
        </div>
      {/each}
    </div>
  </div>
</section> 