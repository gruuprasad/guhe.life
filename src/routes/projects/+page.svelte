<script>
  let projects = [
    {
      title: 'ORT Playout Server',
      description: 'Implemented new features for ORT playout servers and live stream handling at Evertz India Pvt Ltd.',
      technologies: ['C++', 'Python', 'Docker', 'Jenkins'],
      link: 'https://evertz.com'
    },
    {
      title: 'Compiler Tools Development',
      description: 'Contributed to compiler tools development at Max Planck Institute for Software Systems.',
      technologies: ['C++', 'LLVM', 'CMake'],
      link: 'https://www.mpi-sws.org'
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
            Learn More
          </a>
        </div>
      </div>
    {/each}
  </div>
</div> 