<script>
  import { base } from "$app/paths";
  let featuredProjects = [
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

<div class="min-h-screen">
  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
    <div class="container">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p class="text-xl mb-8">
          I'm a software engineer with expertise in system development, cloud technologies, and research.
        </p>
        <div class="space-x-4">
          <a href="/projects" class="btn bg-white text-blue-600 hover:bg-gray-100">View My Work</a>
          <a href="/contact" class="btn border-2 border-white hover:bg-white hover:text-blue-600">Contact Me</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section class="py-20 bg-gray-50">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each featuredProjects as project}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-2">{project.title}</h3>
              <p class="text-gray-600 mb-4">{project.description}</p>
              <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                  {#each project.technologies as tech}
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" class="btn-primary inline-block">Learn More</a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Skills Preview -->
  <section class="py-20">
    <div class="container">
      <h2 class="section-title">What I Do</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <h3 class="text-xl font-semibold mb-4">System Development</h3>
          <p class="text-gray-600">Building robust and efficient systems using C++ and Python.</p>
        </div>
        <div class="text-center p-6">
          <h3 class="text-xl font-semibold mb-4">Cloud Technologies</h3>
          <p class="text-gray-600">Implementing cloud solutions and CI/CD pipelines with Docker and Jenkins.</p>
        </div>
        <div class="text-center p-6">
          <h3 class="text-xl font-semibold mb-4">Research & Development</h3>
          <p class="text-gray-600">Contributing to cutting-edge research in compiler tools and software systems.</p>
        </div>
      </div>
    </div>
  </section>
</div>
