<script>
  let projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      technologies: ['Svelte', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/project1.jpg',
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['SvelteKit', 'PostgreSQL', 'WebSocket'],
      image: '/project2.jpg',
      link: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with SvelteKit and Tailwind CSS.',
      technologies: ['SvelteKit', 'Tailwind CSS', 'Vite'],
      image: '/project3.jpg',
      link: 'https://github.com/yourusername/project3'
    }
  ];
</script>

<div class="container section">
  <h1 class="text-4xl font-bold mb-12 text-center">My Projects</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each projects as project}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-3">{project.title}</h2>
          <p class="text-gray-600 mb-4">{project.description}</p>
          
          <div class="mb-4">
            <h3 class="font-medium mb-2">Technologies Used:</h3>
            <div class="flex flex-wrap gap-2">
              {#each project.technologies as tech}
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
          
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary inline-block"
          >
            View Project
          </a>
        </div>
      </div>
    {/each}
  </div>
</div> 