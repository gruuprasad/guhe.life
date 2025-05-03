<script>
  import { base } from "$app/paths";
  let featuredProjects = [
    {
      title: 'Project One',
      description: 'A modern web application built with Svelte and Node.js',
      image: '/project1.jpg',
      link: '/projects/1'
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with real-time inventory management',
      image: '/project2.jpg',
      link: '/projects/2'
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
          I'm a full-stack developer passionate about creating beautiful and functional web applications.
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
              <a href={project.link} class="btn-primary inline-block">Learn More</a>
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
          <h3 class="text-xl font-semibold mb-4">Web Development</h3>
          <p class="text-gray-600">Building responsive and performant web applications using modern technologies.</p>
        </div>
        <div class="text-center p-6">
          <h3 class="text-xl font-semibold mb-4">UI/UX Design</h3>
          <p class="text-gray-600">Creating intuitive and engaging user interfaces with a focus on user experience.</p>
        </div>
        <div class="text-center p-6">
          <h3 class="text-xl font-semibold mb-4">Problem Solving</h3>
          <p class="text-gray-600">Developing efficient solutions to complex technical challenges.</p>
        </div>
      </div>
    </div>
  </section>
</div>
