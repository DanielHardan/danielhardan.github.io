# Daniel Hardan's Personal Website

A clean, minimal personal website built with pure HTML, CSS, and JavaScript, inspired by the al-folio theme.

## Features

- **Clean, minimal design** inspired by al-folio
- **Responsive layout** that works on all devices
- **Fast loading** with no build process required
- **SEO-friendly** with proper meta tags and semantic HTML
- **Accessible** with proper ARIA labels and keyboard navigation

## Structure

```
├── index.html              # Homepage
├── blog.html              # Blog listing page
├── about.html             # About page
├── contact.html           # Contact page
├── blog/                  # Individual blog posts
│   └── healthcare-data-quality-framework.html
├── assets/
│   ├── css/
│   │   └── main.css       # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Images directory
└── README.md
```

## Pages

### Home (`index.html`)
The main landing page featuring:
- Hero section with personal branding
- Recent blog posts preview
- Clean, welcoming design

### Blog (`blog.html`)
Blog listing page with:
- Featured blog posts
- Category and tag filtering
- Sidebar with categories and tags
- Responsive grid layout

### About (`about.html`)
Personal information page including:
- Professional background
- Interests and expertise
- Information about the website

### Contact (`contact.html`)
Contact information and methods:
- Professional networking links
- Email contact
- Response time expectations
- Areas of interest for collaboration

## Blog Posts

Currently includes:
- **A Comprehensive Framework for Healthcare Data Quality** - A detailed post about ensuring data quality in healthcare systems

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript** - Progressive enhancement and interactivity
- **Inter Font** - Clean, readable typography from Google Fonts

## Design Principles

- **Mobile-first responsive design**
- **Clean typography** with proper hierarchy
- **Consistent spacing** using CSS custom properties
- **Accessible color contrast**
- **Fast loading** with optimized assets

## Development

This is a static website that requires no build process. Simply open any HTML file in a web browser or serve the files with any static web server.

For local development with live reload, you can use:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## Deployment

This site is designed to work with GitHub Pages, Netlify, Vercel, or any static hosting service. Simply upload the files to your hosting provider.

## Customization

The website uses CSS custom properties (variables) for easy theming. Main customization points:

- Colors: Modify the `:root` section in `assets/css/main.css`
- Typography: Change font family in the CSS variables
- Layout: Adjust spacing variables and breakpoints
- Content: Update HTML content in the respective files

## License

© 2025 Daniel Hardan. All rights reserved.
