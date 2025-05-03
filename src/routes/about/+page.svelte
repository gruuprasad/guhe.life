<script>
  let skills = [
    { name: 'Programming Languages', level: 'C, C++, Python, JavaScript' },
    { name: 'Machine Learning', level: 'Python with Numpy, Pandas, TensorFlow' },
    { name: 'Web Frameworks', level: 'Django, Flask, NodeJS' },
    { name: 'Tools & Technologies', level: 'CMake, gdb, Docker, LaTeX, vim, AWS, Terraform, Jenkins' }
  ];
</script>

<div class="container section">
  <h1 class="text-4xl font-bold mb-8">About Me</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-6">
      <h2 class="text-2xl font-semibold">Professional Background</h2>
      <p class="text-gray-700">
        I am a software engineer with extensive experience in system development, cloud technologies, and research. 
        Currently working as an Intermediate Software Design Engineer at Evertz India Pvt Ltd, I specialize in 
        implementing new features for ORT playout servers, live stream handling, and creating CI/CD pipelines. 
        My background includes research work at Max Planck Institute for Software Systems and DFKI, where I 
        contributed to compiler tools and multi-modal interaction software development.
      </p>
      
      <h2 class="text-2xl font-semibold">Education</h2>
      <div class="space-y-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="font-medium">University of Saarland</h3>
          <p class="text-gray-600">MSc in Computer Science (2016-2019)</p>
          <p class="text-gray-500">Saarbruecken, Germany</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="font-medium">B.M.S College of Engineering</h3>
          <p class="text-gray-600">B.E in Electronics and Communication (2010-2014)</p>
          <p class="text-gray-500">Bengaluru, Karnataka</p>
        </div>
      </div>

      <h2 class="text-2xl font-semibold">Volunteer Activities</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Wingman role in Make A Difference (MAD)</li>
        <li>Volunteer at the Sristi foundation, Pondicherry</li>
        <li>Organic farming in various farms at Auroville</li>
      </ul>
    </div>
    
    <div class="space-y-6">
      <h2 class="text-2xl font-semibold">Skills</h2>
      <div class="space-y-4">
        {#each skills as skill}
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="font-medium">{skill.name}</h3>
            <p class="text-gray-600">{skill.level}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
