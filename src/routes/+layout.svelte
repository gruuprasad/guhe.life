<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import '../app.css';
  import RotatingWheel from '$lib/components/RotatingWheel.svelte';

  const navItems = [
    { href: base, label: 'Home' },
    { href: base + '/blog', label: 'Blog' },
    { href: base + '/contact', label: 'Contact' }
  ];
</script>

<div class="min-h-screen flex flex-col">
  <header class="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
    <nav class="container mx-auto py-4">
      <div class="flex justify-between items-center">
        <a href={base} class="flex items-center hover:opacity-80 transition-opacity" data-sveltekit-preload-data>
          <RotatingWheel size={40} rotationSpeed={0.01} />
        </a>
        <div class="hidden md:flex space-x-8">
          {#each navItems as { href, label }}
            <a
              href={href}
              class="link"
              class:font-bold={$page.url.pathname === href || ($page.url.pathname === (base === '' ? '/' : base) && href === base)}
              data-sveltekit-preload-data
            >
              {label}
            </a>
          {/each}
        </div>
        <button class="md:hidden btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  </header>

  <main class="flex-grow">
    <slot />
  </main>

  <footer class="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700/50">
    <div class="container mx-auto py-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-slate-400">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</div> 