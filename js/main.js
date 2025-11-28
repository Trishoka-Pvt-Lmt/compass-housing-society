
// ============= DARK MODE TOGGLE =============
const modeToggle = document.getElementById('modeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Initialize mode from localStorage
const savedMode = localStorage.getItem('mode') || 'light';
body.classList.add(savedMode + '-mode');
updateModeIcon(savedMode);

modeToggle.addEventListener('click', () => {
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newMode = currentMode === 'dark' ? 'light' : 'dark';

    body.classList.remove(currentMode + '-mode');
    body.classList.add(newMode + '-mode');
    localStorage.setItem('mode', newMode);
    updateModeIcon(newMode);
});

function updateModeIcon(mode) {
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
const savedDir = localStorage.getItem('dir') || 'ltr';
htmlElement.dir = savedDir;

rtlToggle.addEventListener('click', () => {
    const currentDir = htmlElement.dir === 'ltr' ? 'ltr' : 'rtl';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    htmlElement.dir = newDir;
    localStorage.setItem('dir', newDir);
});

// ============= STICKY NAVBAR SCROLL EFFECT =============
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// ============= SMOOTH SCROLL TO SECTIONS =============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Update active nav link
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
        if (this.classList.contains('active')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    });
});

// ============= ACTIVE NAV LINK ON SCROLL =============
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============= PAGE LOADER HIDE =============
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1800);
});

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
// ============= GO TO TOP BUTTON =============
const goTopBtn = document.getElementById('goTopBtn');

if (goTopBtn) {
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      goTopBtn.classList.add('show');
    } else {
      goTopBtn.classList.remove('show');
    }
  });

  // Scroll to top on click
  goTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
