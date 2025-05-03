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
  <section class="section gradient-bg">
    <div class="container">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-6 text-white">Guru Prasad</h1>
        <p class="text-xl text-white/90 mb-8">Full Stack Developer & DevOps Engineer</p>
        <div class="flex justify-center space-x-4">
          <a href={base + '/projects'} class="btn btn-primary">View My Work</a>
          <a href={base + '/contact'} class="btn bg-white/10 text-white hover:bg-white/20">Contact Me</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-slate-900">
    <div class="container">
      <h2 class="section-title">What I Do</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card p-6">
          <div class="text-indigo-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-white">Full Stack Development</h3>
          <p class="text-slate-400">Building modern web applications with React, Node.js, and cloud technologies.</p>
        </div>
        <div class="card p-6">
          <div class="text-indigo-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-white">DevOps & Cloud</h3>
          <p class="text-slate-400">Implementing CI/CD pipelines and managing cloud infrastructure on AWS.</p>
        </div>
        <div class="card p-6">
          <div class="text-indigo-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-white">System Architecture</h3>
          <p class="text-slate-400">Designing scalable and maintainable software systems.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-slate-800">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="card p-6">
          <h3 class="text-xl font-bold mb-2 text-white">Project One</h3>
          <p class="text-slate-400 mb-4">A full-stack web application built with React and Node.js.</p>
          <div class="flex flex-wrap gap-2">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">MongoDB</span>
          </div>
        </div>
        <div class="card p-6">
          <h3 class="text-xl font-bold mb-2 text-white">Project Two</h3>
          <p class="text-slate-400 mb-4">A cloud-native application deployed on AWS.</p>
          <div class="flex flex-wrap gap-2">
            <span class="tag">AWS</span>
            <span class="tag">Docker</span>
            <span class="tag">Kubernetes</span>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <a href={base + '/projects'} class="btn btn-primary">View All Projects</a>
      </div>
    </div>
  </section>
</div>
