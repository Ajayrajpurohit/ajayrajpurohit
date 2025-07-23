# Portfolio Personalization Checklist

## 🎯 Priority 1: Essential Content Updates

### Personal Information
- [ ] Update site title and description in `src/app/layout.tsx`
- [ ] Replace "Your Name" with your actual name
- [ ] Update the site description to reflect your work

### About Page (`src/app/about/page.tsx`)
- [ ] Replace Spencer Sharp's bio with your personal story
- [ ] Update the page title and meta description
- [ ] Replace profile image (`src/images/portrait.jpg`)
- [ ] Update social media links (GitHub, LinkedIn, Twitter, Instagram)
- [ ] Update contact email address

### Home Page (`src/app/page.tsx`)
- [ ] Update the main hero text and description
- [ ] Replace avatar image (`src/images/avatar.jpg`)
- [ ] Update the work history section with your experience
- [ ] Update company logos in `src/images/logos/`
- [ ] Update newsletter signup email handling

### Projects Page (`src/app/projects/page.tsx`)
- [ ] Replace fictional projects with your real work
- [ ] Add descriptions of your actual projects
- [ ] Update project links to point to live demos/GitHub repos
- [ ] Replace project logos in `src/images/logos/`

## 🎯 Priority 2: Content & Features

### Articles/Blog
- [ ] Delete template articles in `src/app/articles/`
- [ ] Write your first blog post
- [ ] Update articles page description

### Contact Form
- [ ] ✅ Contact page already added
- [ ] Set up form handling (use services like Formspree, Netlify Forms, or Vercel)
- [ ] Test contact form functionality

### Social Links
- [ ] Update all placeholder social media links
- [ ] Ensure all links open to your actual profiles
- [ ] Remove any social platforms you don't use

### Images
- [ ] Replace all placeholder images with your photos
- [ ] Optimize images for web (next/image handles this automatically)
- [ ] Update alt text for accessibility

## 🎯 Priority 3: Technical Improvements

### SEO & Meta Data
- [ ] Update favicon (`src/app/favicon.ico`)
- [ ] Set up proper Open Graph images
- [ ] Update site URL in environment variables
- [ ] Test meta descriptions across pages

### Performance
- [ ] ✅ Browserslist updated
- [ ] Run Lighthouse audit
- [ ] Optimize any heavy images
- [ ] Test mobile responsiveness

### Analytics (Optional)
- [ ] Add Google Analytics or similar
- [ ] Set up performance monitoring
- [ ] Add error tracking

## 🎯 Priority 4: Advanced Features

### Content Management
- [ ] Consider adding a CMS if you'll blog frequently
- [ ] Set up automated social media sharing for new posts
- [ ] Add comment system to blog posts (optional)

### Deployment
- [ ] Set up production deployment (Vercel recommended)
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Test production build locally

### Additional Features
- [ ] Add project filtering/categories
- [ ] Add search functionality for articles
- [ ] Add reading time estimates for blog posts
- [ ] Add table of contents for long articles
- [ ] Add "Back to top" button
- [ ] Add loading states and animations

## 📁 Files to Update

### Critical Files
1. `src/app/layout.tsx` - Site metadata
2. `src/app/page.tsx` - Homepage content
3. `src/app/about/page.tsx` - About page
4. `src/app/projects/page.tsx` - Projects
5. `src/images/` - All images
6. `.env.local` - Environment variables

### Optional Files
1. `src/app/uses/page.tsx` - Tools and equipment you use
2. `src/app/speaking/page.tsx` - Speaking engagements
3. `src/styles/tailwind.css` - Custom styling
4. `typography.ts` - Typography customization

## 🚀 Quick Start Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Notes

- The site is currently running on http://localhost:3001
- Contact page has been added to navigation
- Environment file created with local URL
- README updated with comprehensive instructions
- All placeholder content needs to be replaced with your information

Remember: Start with Priority 1 items first - these are the most visible changes that will make the biggest impact!
