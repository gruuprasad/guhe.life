<script>
  let experiences = [
    {
      company: 'Evertz India Pvt Ltd',
      position: 'Intermediate Software Design Engineer',
      duration: 'January 2021 - January 2024',
      location: 'Bengaluru, Karnataka',
      responsibilities: [
        'ORT playout server team - implement new features - live stream handling, health check',
        'Reflektor team - create CI/CD pipeline in Jenkins for the product involving multiple projects',
        'Build and deployment in AWS',
        'Technologies: C++, AWS services, protobuf, terraform, Jenkins, docker'
      ]
    },
    {
      company: 'Max Planck Institute for Software Systems',
      position: 'Research Assistant',
      duration: 'January - October 2019',
      location: 'Saarbruecken, Germany',
      responsibilities: [
        'Developed compiler tool using LLVM to automate the parallelization of TAS, tcp/ip network stack'
      ]
    },
    {
      company: 'DFKI',
      position: 'Research Assistant',
      duration: 'July - August 2018',
      location: 'Saarbruecken, Germany',
      responsibilities: [
        'Developed communication module for multi-modal interaction software'
      ]
    },
    {
      company: 'Xapian - Google Summer of Code',
      position: 'Intern',
      duration: 'May 2018 - August 2018',
      location: 'Remote',
      responsibilities: [
        'Worked on adding math search feature in xapian - a text search engine'
      ]
    },
    {
      company: 'Tejas Networks Ltd',
      position: 'Engineer',
      duration: '2014 - 2016',
      location: 'Bengaluru, India',
      responsibilities: [
        'Worked on testing OTN/DWDM products'
      ]
    }
  ];
</script>

<div class="container section">
  <h1 class="text-4xl font-bold mb-8">Work Experience</h1>
  
  <div class="space-y-8">
    {#each experiences as experience}
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h2 class="text-2xl font-semibold">{experience.company}</h2>
            <p class="text-xl text-gray-700">{experience.position}</p>
          </div>
          <div class="text-right mt-2 md:mt-0">
            <p class="text-gray-600">{experience.duration}</p>
            <p class="text-gray-500">{experience.location}</p>
          </div>
        </div>
        
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          {#each experience.responsibilities as responsibility}
            <li>{responsibility}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div> 