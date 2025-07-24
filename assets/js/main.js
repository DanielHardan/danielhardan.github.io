// Simple JavaScript for enhanced functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for table of contents links
    const tocLinks = document.querySelectorAll('.table-of-contents a[href^="#"]');
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Filter blog posts by category (for future use)
    const categoryLinks = document.querySelectorAll('[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterPostsByCategory(category);
        });
    });

    // Filter blog posts by tag (for future use)
    const tagLinks = document.querySelectorAll('[data-tag]');
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tag = this.getAttribute('data-tag');
            filterPostsByTag(tag);
        });
    });

    // Reading time calculator
    const postContent = document.querySelector('.post-content');
    if (postContent) {
        const readingTime = calculateReadingTime(postContent.textContent);
        const readingTimeElement = document.querySelector('.reading-time');
        if (readingTimeElement && readingTime > 0) {
            readingTimeElement.textContent = `${readingTime} min read`;
        }
    }

    // Mobile navigation toggle (for future responsive enhancements)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu--open');
        });
    }

    // Add copy button to code blocks (for future use)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        addCopyButton(block);
    });

    // Lazy loading for images (basic implementation)
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

// Function to calculate reading time
function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
}

// Function to filter posts by category
function filterPostsByCategory(category) {
    const posts = document.querySelectorAll('.post-card');
    posts.forEach(post => {
        const categories = post.querySelectorAll('.category');
        let hasCategory = false;
        categories.forEach(cat => {
            if (cat.textContent.toLowerCase().includes(category.toLowerCase())) {
                hasCategory = true;
            }
        });
        
        if (hasCategory || category === 'all') {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Function to filter posts by tag
function filterPostsByTag(tag) {
    const posts = document.querySelectorAll('.post-card');
    posts.forEach(post => {
        const tags = post.querySelectorAll('.tag');
        let hasTag = false;
        tags.forEach(t => {
            if (t.textContent.toLowerCase().includes(tag.toLowerCase())) {
                hasTag = true;
            }
        });
        
        if (hasTag || tag === 'all') {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Function to add copy button to code blocks
function addCopyButton(codeBlock) {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.textContent).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        });
    });
    
    const pre = codeBlock.parentNode;
    pre.style.position = 'relative';
    pre.appendChild(button);
}

// Theme switcher (for future dark mode support)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Initialize theme on load
loadTheme();
