// ============= APPLY SAVED MODE IMMEDIATELY =============
(function() {
    const savedMode = localStorage.getItem('mode') || 'light';
    const savedDir = localStorage.getItem('dir') || 'ltr';
    
    // Remove any existing mode classes first
    document.body.classList.remove('light-mode', 'dark-mode');
    
    // Apply saved mode
    document.body.classList.add(savedMode + '-mode');
    document.documentElement.dir = savedDir;
})();

document.addEventListener('DOMContentLoaded', () => {

    // ============= DARK MODE TOGGLE =============
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    const htmlElement = document.documentElement;

    if (modeToggle) {
        // Set initial icon based on current mode
        const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
        updateModeIcon(currentMode);

        modeToggle.addEventListener('click', () => {
            const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newMode = currentMode === 'dark' ? 'light' : 'dark';

            // Remove both modes first
            body.classList.remove('light-mode', 'dark-mode');
            
            // Add new mode
            body.classList.add(newMode + '-mode');
            
            localStorage.setItem('mode', newMode);
            updateModeIcon(newMode);
        });
    }

    function updateModeIcon(mode) {
        if (!modeToggle) return;
        if (mode === 'dark') {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            modeToggle.title = 'Toggle Light Mode';
        } else {
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            modeToggle.title = 'Toggle Dark Mode';
        }
    }

    // ============= RTL TOGGLE =============
    const rtlToggle = document.getElementById('rtlToggle');
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentDir = htmlElement.dir === 'ltr' ? 'ltr' : 'rtl';
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            htmlElement.dir = newDir;
            localStorage.setItem('dir', newDir);
        });
    }

    // ============= STICKY NAVBAR SCROLL EFFECT =============
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // ============= SMOOTH SCROLL TO SECTIONS =============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // ============= FAVORITE BUTTON TOGGLE =============
    document.querySelectorAll('.property-favorite').forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                if (this.classList.contains('active')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            }
        });
    });

    // ============= ACTIVE NAV LINK ON SCROLL =============
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    link.classList.remove('active');
                    if (href.slice(1) === current) {
                        link.classList.add('active');
                    }
                }
            });
        });
    }

    // ============= GO TO TOP BUTTON =============
    const goTopBtn = document.getElementById('goTopBtn');
    if (goTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                goTopBtn.classList.add('show');
            } else {
                goTopBtn.classList.remove('show');
            }
        });

        goTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============= FORM VALIDATION =============
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', function () {
            const email = this.value;
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (email && !isValid) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '';
            }
        });
    });

});

// ============= PAGE LOADER HIDE =============
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1800);
    }
});
