import { marked } from 'marked';

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true
});

/**
 * Parse frontmatter from markdown content
 * @param {string} content - Markdown content with frontmatter
 * @returns {{ frontmatter: object, content: string }}
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('Frontmatter not found in markdown file');
  }
  
  const frontmatterText = match[1];
  const markdownContent = match[2];
  
  // Parse frontmatter (simple YAML-like parsing)
  const frontmatter = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: markdownContent };
}

/**
 * Get all blog posts
 * @returns {Promise<Array>} Array of post metadata
 */
export async function getPosts() {
  // Use Vite's glob import to get all markdown files
  const modules = import.meta.glob('/src/lib/posts/*.md', { 
    eager: false,
    query: '?raw'
  });
  
  const posts = [];
  
  for (const path in modules) {
    const module = await modules[path]();
    // When using ?raw, the module is the string content directly
    const content = module.default || module;
    const { frontmatter, content: markdownContent } = parseFrontmatter(content);
    
    // Extract slug from filename
    const slug = path.split('/').pop().replace('.md', '');
    
    posts.push({
      slug,
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || new Date().toISOString(),
      description: frontmatter.description || '',
      ...frontmatter
    });
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get a single post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<{ metadata: object, html: string }>}
 */
export async function getPost(slug) {
  // Use glob to find the post
  const modules = import.meta.glob('/src/lib/posts/*.md', { 
    eager: false,
    query: '?raw'
  });
  
  const postPath = `/src/lib/posts/${slug}.md`;
  
  if (!modules[postPath]) {
    throw new Error(`Post not found: ${slug}`);
  }
  
  const module = await modules[postPath]();
  // When using ?raw, the module is the string content directly
  const content = module.default || module;
  const { frontmatter, content: markdownContent } = parseFrontmatter(content);
  
  // Convert markdown to HTML
  const html = marked.parse(markdownContent);
  
  return {
    metadata: {
      slug,
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || new Date().toISOString(),
      description: frontmatter.description || '',
      ...frontmatter
    },
    html
  };
}

