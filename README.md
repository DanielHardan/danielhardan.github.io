# Dan Hardan's Personal Website

A professional personal website and blog built with Jekyll and the Chirpy theme, hosted on GitHub Pages.

## Features

- **Clean, professional design** using the Chirpy Jekyll theme
- **Responsive layout** that works perfectly on all devices
- **Fast, optimized performance** with Jekyll static site generation
- **SEO-friendly** with built-in optimization and social media integration
- **Blog functionality** with categories, tags, and search
- **GitHub Pages compatible** with automated deployment

## Structure

```
├── _config.yml            # Site configuration
├── _posts/                # Blog posts in Markdown
├── _tabs/                 # Static pages (About, Contact, etc.)
├── _data/                 # Data files for site configuration
├── assets/                # CSS, JS, and images
├── Gemfile                # Ruby dependencies
└── index.html             # Homepage layout
```

## Pages

### Home (`index.html`)
The main landing page featuring:
- Recent blog posts
- Professional introduction
- Clean, welcoming design with the Chirpy theme

### Blog
Accessible through the navigation, featuring:
- All blog posts with categorization
- Tag and category filtering
- Search functionality
- Archive organization

### About (`_tabs/about.md`)
Professional information including:
- Professional background and expertise
- Technology focus areas
- Information about the website

## Technologies Used

- **Jekyll** - Static site generator
- **Chirpy Theme** - Professional Jekyll theme
- **Ruby/Gems** - Dependency management
- **Markdown** - Content writing format
- **GitHub Pages** - Hosting and deployment

## Local Development

### Prerequisites
- Ruby (3.0 or higher)
- Jekyll
- Bundler

### Setup
```bash
# Install dependencies
bundle install

# Build the site
bundle exec jekyll build

# Start development server
bundle exec jekyll serve

# Or use the provided tools
./tools/run.sh    # Start server with live reload
./tools/test.sh   # Build for production
```

The site will be available at `http://localhost:4000`

## Deployment

This site is configured for GitHub Pages deployment. Simply push to the main branch and GitHub Actions will automatically build and deploy the site.

## Customization

The site uses the Chirpy theme configuration in `_config.yml`. Key customization points:

- Site information: Title, description, and social links in `_config.yml`
- Content: Pages in `_tabs/` and posts in `_posts/`
- Styling: Theme customization through Chirpy's built-in options
- Navigation: Automatically generated from `_tabs/` files

## Writing Blog Posts

Create new posts in the `_posts/` directory with the filename format:
```
YYYY-MM-DD-title-with-hyphens.md
```

Include front matter with title, date, categories, and tags:
```yaml
---
title: Your Post Title
date: YYYY-MM-DD HH:MM:SS -0500
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
description: Brief description for SEO
---
```

## License

© 2025 Dan Hardan. All rights reserved.
