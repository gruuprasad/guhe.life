<script>
  let skills = [
    { name: 'Frontend Development', level: 'Advanced' },
    { name: 'Backend Development', level: 'Intermediate' },
    { name: 'UI/UX Design', level: 'Intermediate' },
    { name: 'Project Management', level: 'Advanced' }
  ];
</script>

<div class="container section">
  <h1 class="text-4xl font-bold mb-8">About Me</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-6">
      <h2 class="text-2xl font-semibold">Professional Background</h2>
      <p class="text-gray-700">
        I am a passionate developer with a strong focus on creating elegant, efficient, and user-friendly solutions. 
        With several years of experience in web development, I've worked on various projects ranging from small business 
        websites to complex web applications.
      </p>
      
      <h2 class="text-2xl font-semibold">Education</h2>
      <p class="text-gray-700">
        I hold a degree in Computer Science and continue to expand my knowledge through continuous learning and 
        practical experience in the field.
      </p>
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
