# guhe.life

A personal blog and content sharing platform built with SvelteKit and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 📝 Markdown-based blog posts
- 🎯 Easy content publishing
- 🌙 Dark theme optimized for reading

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Marked](https://marked.js.org/) - Markdown parser
- [GitHub Pages](https://pages.github.com/) - Hosting

## Pages

- **Home**: Latest blog posts
- **Blog**: All blog posts listing
- **Contact**: Contact information and social links

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gruuprasad/guhe.life.git
   cd guhe.life
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

## Adding New Blog Posts

To add a new blog post:

1. Create a new markdown file in `src/lib/posts/` using the date as the filename: `YYYY-MM-DD.md` (e.g., `2024-01-15.md`)
2. Add frontmatter at the top of the file:
   ```markdown
   ---
   title: Your Post Title
   date: 2024-01-15
   description: A brief description of your post
   ---
   
   Your markdown content here...
   ```
3. Write your content in markdown below the frontmatter
4. The post will automatically appear on the homepage and blog listing page

### Naming Rule

**Simple rule: Use the date as the filename in `YYYY-MM-DD.md` format. For multiple posts on the same day, add a number: `YYYY-MM-DD-2.md`, `YYYY-MM-DD-3.md`, etc.**

The filename should match the date in the frontmatter. For example:
- First post: `2024-01-15.md` with `date: 2024-01-15`
- Second post same day: `2024-01-15-2.md` with `date: 2024-01-15`
- Third post same day: `2024-01-15-3.md` with `date: 2024-01-15`

### Frontmatter Fields

- `title` (required): The title of your blog post
- `date` (required): Publication date in YYYY-MM-DD format (must match filename)
- `description` (optional): A brief description/summary of the post

### Example Post

```markdown
---
title: My First Blog Post
date: 2024-01-15
description: This is my first blog post on the new platform
---

# Welcome

This is the content of my blog post. You can use **markdown** formatting here.

- Lists
- Code blocks
- And more!
```

**File location:** `src/lib/posts/2024-01-15.md`

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: gruuprasada@gmail.com
- GitHub: [@gruuprasad](https://github.com/gruuprasad)
