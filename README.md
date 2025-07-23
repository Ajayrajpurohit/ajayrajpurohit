# Personal Portfolio - Spotlight Theme

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS v4.

## Features

- 🌟 Modern design with clean typography
- 🌗 Dark/light theme toggle
- 📱 Fully responsive design
- 📝 MDX-powered blog articles
- ⚡ Fast performance with Next.js 14
- 🎨 Tailwind CSS v4 for styling
- 📊 RSS feed generation
- 🔍 SEO optimized
- ♿ Accessibility focused

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```bash
   cp .env.example .env.local
   ```
   Update `NEXT_PUBLIC_SITE_URL` in `.env.local`

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Customization

### 1. Personal Information
- Update `src/app/layout.tsx` - Site title and description
- Update `src/app/about/page.tsx` - Your personal bio
- Replace images in `src/images/` with your photos

### 2. Projects
- Edit `src/app/projects/page.tsx` - Add your real projects
- Add project logos to `src/images/logos/`

### 3. Articles/Blog
- Create new MDX files in `src/app/articles/[slug]/page.mdx`
- Follow the existing format with frontmatter metadata

### 4. Social Links
- Update social links in `src/app/about/page.tsx`
- Update links in home page components

### 5. Contact Information
- Update email addresses throughout the site
- Customize the contact form in `src/app/contact/page.tsx`

## Content Structure

```
src/app/
├── about/           # About page
├── articles/        # Blog articles (MDX)
├── contact/         # Contact form
├── projects/        # Portfolio projects
├── speaking/        # Speaking engagements
└── uses/           # Tools and equipment
```

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
