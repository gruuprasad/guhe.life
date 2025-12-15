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

<div class="min-h-[calc(100vh-4rem)] bg-slate-950">
  <div class="container mx-auto px-4 py-20">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="mb-16 border-b border-slate-800 pb-8">
        <h1 class="text-5xl font-light mb-3 text-slate-200 tracking-tight">Contact</h1>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <h2 class="text-xl font-light mb-6 text-slate-300">Send a message</h2>
          
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div>
              <label for="name" class="block text-xs font-light text-slate-500 mb-2 uppercase tracking-wider">Name</label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                class="w-full px-4 py-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-none focus:outline-none focus:border-slate-700 transition-colors font-light"
                required
              />
            </div>
            
            <div>
              <label for="email" class="block text-xs font-light text-slate-500 mb-2 uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                class="w-full px-4 py-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-none focus:outline-none focus:border-slate-700 transition-colors font-light"
                required
              />
            </div>
            
            <div>
              <label for="message" class="block text-xs font-light text-slate-500 mb-2 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                bind:value={formData.message}
                rows="6"
                class="w-full px-4 py-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-none focus:outline-none focus:border-slate-700 transition-colors font-light resize-none"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="w-full py-3 border border-slate-700 text-slate-300 hover:border-slate-600 hover:text-slate-200 transition-colors font-light text-sm uppercase tracking-wider">
              Send
            </button>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h2 class="text-xl font-light mb-4 text-slate-300">Information</h2>
            <p class="text-slate-500 text-sm font-light leading-relaxed">
              Feel free to reach out through the contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 