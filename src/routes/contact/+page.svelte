<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  function handleSubmit() {
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    formData = {
      name: '',
      email: '',
      message: ''
    };
  }
</script>

<div class="container section">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold mb-12 text-center">Get in Touch</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-6">Send me a message</h2>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              bind:value={formData.message}
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          
          <button type="submit" class="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
      
      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
          <p class="text-gray-600">
            Feel free to reach out to me through the contact form.
          </p>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Location</h3>
          <p class="text-gray-600">
            Based in Your City, Country<br />
            Available for remote work worldwide
          </p>
        </div>
      </div>
    </div>
  </div>
</div> 