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
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Adjusted grid columns for potentially better spacing if only two items -->
    {#each projects as project}
      <!-- Added border, transition, and hover effects -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-3 text-gray-800">{project.title}</h2>
          <p class="text-gray-600 mb-5">{project.description}</p> <!-- Increased bottom margin -->
          
          <div class="mb-6"> <!-- Increased bottom margin -->
            <h3 class="font-medium mb-2 text-gray-700">Technologies Used:</h3>
            <div class="flex flex-wrap gap-2">
              {#each project.technologies as tech}
                 <!-- Adjusted tag styling -->
                <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full text-xs font-medium">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
          
          <!-- Assuming btn-primary handles hover, added explicit transition -->
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary inline-block transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    {/each}
  </div>
</div> 