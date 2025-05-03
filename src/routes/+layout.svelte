<script>
  import '../app.css';
  import { base } from '$app/paths';
</script>

<div class="min-h-screen flex flex-col">
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <a href="{base}/" class="flex items-center">
            <span class="text-xl font-bold">Guruprasad Hegde</span>
          </a>
        </div>
        <div class="flex items-center space-x-4">
          <a href="{base}/" class="text-gray-700 hover:text-gray-900">Home</a>
          <a href="{base}/about" class="text-gray-700 hover:text-gray-900">About</a>
          <a href="{base}/experience" class="text-gray-700 hover:text-gray-900">Experience</a>
          <a href="{base}/projects" class="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="{base}/contact" class="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </div>
  </nav>

  <main class="flex-grow">
    <slot />
  </main>

  <footer class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Guruprasad Hegde. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div> 