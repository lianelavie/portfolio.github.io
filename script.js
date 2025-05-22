// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('closeSidebar');

if (hamburger && sidebar && overlay && closeSidebar) {
    hamburger.addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
}

// Loader functionality
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.onscroll = function() {
    if (backToTop) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    }
};

window.topFunction = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 600,
        once: true
    });
}