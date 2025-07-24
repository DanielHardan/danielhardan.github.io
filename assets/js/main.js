/**
 * Theme management class
 */
class Theme {
    static #modeKey = 'mode';
    static #modeAttr = 'data-mode';
    static #darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    static switchable = !document.documentElement.hasAttribute(this.#modeAttr);

    static get DARK() {
        return 'dark';
    }

    static get LIGHT() {
        return 'light';
    }

    static get #mode() {
        return (
            sessionStorage.getItem(this.#modeKey) ||
            document.documentElement.getAttribute(this.#modeAttr)
        );
    }

    static get #isDarkMode() {
        return this.#mode === this.DARK;
    }

    static get #hasMode() {
        return this.#mode !== null;
    }

    static get #sysDark() {
        return this.#darkMedia.matches;
    }

    static init() {
        if (!this.switchable) {
            return;
        }

        this.#darkMedia.addEventListener('change', () => {
            const lastMode = this.#mode;
            this.#clearMode();

            if (lastMode !== this.visualState) {
                this.#notify();
            }
        });

        if (!this.#hasMode) {
            return;
        }

        if (this.#isDarkMode) {
            this.#setDark();
        } else {
            this.#setLight();
        }
    }

    static flip() {
        if (this.#hasMode) {
            this.#clearMode();
        } else {
            this.#sysDark ? this.#setLight() : this.#setDark();
        }
        this.#notify();
    }

    static #setDark() {
        document.documentElement.setAttribute(this.#modeAttr, this.DARK);
        sessionStorage.setItem(this.#modeKey, this.DARK);
    }

    static #setLight() {
        document.documentElement.setAttribute(this.#modeAttr, this.LIGHT);
        sessionStorage.setItem(this.#modeKey, this.LIGHT);
    }

    static #clearMode() {
        document.documentElement.removeAttribute(this.#modeAttr);
        sessionStorage.removeItem(this.#modeKey);
    }

    static #notify() {
        window.postMessage({ id: 'theme-mode' }, '*');
    }

    static get visualState() {
        if (this.#hasMode) {
            return this.#mode;
        } else {
            return this.#sysDark ? this.DARK : this.LIGHT;
        }
    }
}

/**
 * Sidebar functionality
 */
class SidebarUtil {
    static #isExpanded = false;

    static toggle() {
        this.#isExpanded = !this.#isExpanded;
        document.body.toggleAttribute('sidebar-display', this.#isExpanded);
        
        const sidebar = document.getElementById('sidebar');
        const mask = document.getElementById('mask');
        
        if (sidebar) {
            sidebar.classList.toggle('z-2', this.#isExpanded);
        }
        
        if (mask) {
            mask.classList.toggle('d-none', !this.#isExpanded);
        }
    }
}

/**
 * Initialize all functionality
 */
function initSidebar() {
    const trigger = document.getElementById('sidebar-trigger');
    const mask = document.getElementById('mask');
    
    if (trigger) {
        trigger.onclick = () => SidebarUtil.toggle();
    }
    
    if (mask) {
        mask.onclick = () => SidebarUtil.toggle();
    }
}

function initTheme() {
    Theme.init();
    
    const toggle = document.getElementById('mode-toggle');
    if (toggle) {
        toggle.onclick = () => Theme.flip();
    }
}

function initTopbar() {
    const title = document.getElementById('topbar-title');
    if (title && window.location.pathname !== '/') {
        // You can customize this based on current page
        title.textContent = document.title || 'Daniel Hardan';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
    initTheme();
    initTopbar();
});

// Initialize theme immediately to prevent flash
Theme.init();
