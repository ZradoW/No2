// ============================================
// ULTRA PORTFOLIO - ELITE JAVASCRIPT
// ============================================

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingPercentage = document.querySelector('.loading-percentage');
    const loadingMessage = document.querySelector('.loading-message');
    
    const messages = [
        'Initializing Quantum Systems...',
        'Loading Neural Networks...',
        'Establishing Secure Connection...',
        'Preparing Elite Experience...',
        'Almost Ready...'
    ];
    
    let progress = 0;
    let messageIndex = 0;
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        loadingProgress.style.width = progress + '%';
        loadingPercentage.textContent = Math.floor(progress);
        
        if (progress >= 20 * (messageIndex + 1) && messageIndex < messages.length - 1) {
            messageIndex++;
            loadingMessage.textContent = messages[messageIndex];
        }
        
        if (progress === 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);
        }
    }, 100);
});

// ============================================
// CUSTOM CURSOR
// ============================================
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

// Only enable custom cursor on desktop
if (window.innerWidth > 1024) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {duration: 500, fill: 'forwards'});
    });

    // Cursor effects on hover
    document.querySelectorAll('a, button, .project-card, .skill-category, input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(2)';
            cursorOutline.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.transform = 'scale(1)';
        });
    });
} else {
    // Hide custom cursor on mobile/tablet
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorOutline) cursorOutline.style.display = 'none';
}

// ============================================
// SETTINGS PANEL
// ============================================
const settingsToggle = document.getElementById('settingsToggle');
const settingsPanel = document.getElementById('settingsPanel');

settingsToggle.addEventListener('click', () => {
    settingsPanel.classList.toggle('active');
});

// Theme Switcher
const themeButtons = document.querySelectorAll('.theme-btn');
themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        themeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const theme = btn.dataset.theme;
        document.body.setAttribute('data-theme', theme);
    });
});

// Color Scheme
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.dataset.color;
        const root = document.documentElement;
        
        switch(color) {
            case 'purple':
                root.style.setProperty('--primary', '#8B00D9');
                root.style.setProperty('--secondary', '#00FFFF');
                break;
            case 'blue':
                root.style.setProperty('--primary', '#00A8FF');
                root.style.setProperty('--secondary', '#00FFFF');
                break;
            case 'green':
                root.style.setProperty('--primary', '#00FF88');
                root.style.setProperty('--secondary', '#00FF00');
                break;
            case 'red':
                root.style.setProperty('--primary', '#FF006E');
                root.style.setProperty('--secondary', '#FF4500');
                break;
            case 'gold':
                root.style.setProperty('--primary', '#FFD700');
                root.style.setProperty('--secondary', '#FFA500');
                break;
        }
    });
});

// Particles Toggle
const particlesToggle = document.getElementById('particlesToggle');
particlesToggle.addEventListener('change', (e) => {
    const particles = document.getElementById('particles-js');
    particles.style.display = e.target.checked ? 'block' : 'none';
});

// Sound Toggle
const soundToggle = document.getElementById('soundToggle');
let soundEnabled = true;
soundToggle.addEventListener('change', (e) => {
    soundEnabled = e.target.checked;
});

// Animations Toggle
const animationsToggle = document.getElementById('animationsToggle');
animationsToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.style.animation = '';
    } else {
        document.body.style.animation = 'none';
    }
});

// ============================================
// NAVIGATION
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Audio Toggle
const audioToggle = document.getElementById('audioToggle');
let audioPlaying = false;

audioToggle.addEventListener('click', () => {
    audioPlaying = !audioPlaying;
    audioToggle.innerHTML = audioPlaying ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    
    if (audioPlaying) {
        playClickSound();
    }
});

// ============================================
// PARTICLES.JS CONFIGURATION
// ============================================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#8B00D9', '#00FFFF', '#FFD700']
        },
        shape: {
            type: ['circle', 'triangle', 'edge'],
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00FFFF',
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.8
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ============================================
// MATRIX RAIN EFFECT
// ============================================
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00FFFF';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ============================================
// TYPING ANIMATION
// ============================================
const dynamicText = document.querySelector('.dynamic-text');
const texts = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Creative Technologist',
    'Problem Solver',
    'Game Developer',
    'Open Source Contributor'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
        dynamicText.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else if (isDeleting && charIndex > 0) {
        dynamicText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeText, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    }
}

typeText();

// ============================================
// COUNTER ANIMATION
// ============================================
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ============================================
// SKILL BARS ANIMATION
// ============================================
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width;
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ============================================
// PROJECT FILTER
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ============================================
// AOS (Animate On Scroll) INITIALIZATION
// ============================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            playClickSound();
        }
    });
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    playClickSound();
});

// ============================================
// FORM SUBMISSION
// ============================================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success notification
    showNotification('Message sent successfully! 🚀', 'success');
    
    // Reset form
    contactForm.reset();
    
    playSuccessSound();
});

// ============================================
// DISCORD COPY FUNCTION
// ============================================
function copyDiscord(username) {
    navigator.clipboard.writeText(username).then(() => {
        showNotification(`✓ Discord username copied: ${username}`, 'success');
        playClickSound();
    }).catch(err => {
        showNotification('Failed to copy username', 'error');
        console.error('Copy error:', err);
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'linear-gradient(45deg, #43b581, #00FFFF)' : 'linear-gradient(45deg, #FF006E, #FF4500)'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.5s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ============================================
// SOUND EFFECTS
// ============================================
function playClickSound() {
    if (!soundEnabled) return;
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBThP0e+9dycFKHjH8NSKOgkSZLvs6aJVFAw+mv7sp1YUCkyo');
    audio.volume = 0.2;
    audio.play().catch(() => {});
}

function playSuccessSound() {
    if (!soundEnabled) return;
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBThP0e+9dycFKHjH8NSKOgkSZLvs6aJVFAw+mv7sp1YUCkyo');
    audio.volume = 0.3;
    audio.play().catch(() => {});
}

// Slide animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c🚀 Welcome to My Elite Portfolio!', 'font-size: 24px; color: #00FFFF; font-weight: bold; text-shadow: 0 0 10px #00FFFF;');
console.log('%c𝙅𝙍|Fahrenheit¹⁹³³☪', 'font-size: 20px; color: #8B00D9; font-weight: bold;');
console.log('%cDeveloped with 💜 using cutting-edge technologies', 'font-size: 14px; color: #FFD700;');
console.log('%cInterested in the code? Let\'s connect!', 'font-size: 12px; color: #00FFFF;');

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Ctrl + K: Open settings
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        settingsPanel.classList.toggle('active');
    }
    
    // Escape: Close settings
    if (e.key === 'Escape') {
        settingsPanel.classList.remove('active');
    }
});

// ============================================
// MUSIC PLAYER
// ============================================
const musicPlayer = document.getElementById('musicPlayer');
const musicToggle = document.getElementById('musicToggle');
const playerClose = document.getElementById('playerClose');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeBtn = document.getElementById('volumeBtn');
const progressFill = document.getElementById('progressFill');
const albumArt = document.getElementById('albumArt');

let isPlaying = false;
let currentTrack = 0;
let currentTime = 0;
let duration = 225; // 3:45 in seconds

const playlist = [
    { title: 'Cyberpunk Dreams', artist: 'Electronic Vibes', duration: 225 },
    { title: 'Neon Nights', artist: 'Synthwave Master', duration: 198 },
    { title: 'Digital Paradise', artist: 'Future Beats', duration: 267 }
];

musicToggle.addEventListener('click', () => {
    musicPlayer.classList.add('active');
    playClickSound();
});

playerClose.addEventListener('click', () => {
    musicPlayer.classList.remove('active');
});

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        albumArt.classList.add('playing');
        musicToggle.classList.add('playing');
        startPlayback();
    } else {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        albumArt.classList.remove('playing');
        musicToggle.classList.remove('playing');
        stopPlayback();
    }
    playClickSound();
});

prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack();
    playClickSound();
});

nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack();
    playClickSound();
});

let isMuted = false;
volumeBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    volumeBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    playClickSound();
});

function loadTrack() {
    const track = playlist[currentTrack];
    document.getElementById('trackTitle').textContent = track.title;
    document.getElementById('trackArtist').textContent = track.artist;
    duration = track.duration;
    currentTime = 0;
    updateTime();
    progressFill.style.width = '0%';
}

let playbackInterval;

function startPlayback() {
    playbackInterval = setInterval(() => {
        currentTime++;
        if (currentTime >= duration) {
            nextBtn.click();
            if (isPlaying) {
                playBtn.click();
                setTimeout(() => playBtn.click(), 100);
            }
        }
        updateTime();
        const progress = (currentTime / duration) * 100;
        progressFill.style.width = progress + '%';
    }, 1000);
}

function stopPlayback() {
    clearInterval(playbackInterval);
}

function updateTime() {
    document.getElementById('currentTime').textContent = formatTime(currentTime);
    document.getElementById('totalTime').textContent = formatTime(duration);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Click on progress bar to seek
document.querySelector('.progress-bar').addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    currentTime = Math.floor(percentage * duration);
    updateTime();
    progressFill.style.width = (percentage * 100) + '%';
});

// ============================================
// SUPER INTELLIGENT AI CHAT WIDGET
// ============================================
const chatWidget = document.getElementById('chatWidget');
const chatToggle = document.getElementById('chatToggle');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const chatBadge = document.querySelector('.chat-badge');

let chatOpen = false;
let conversationHistory = [];
let userLanguage = 'en'; // Default language

// AI Knowledge Base
const aiKnowledge = {
    tr: {
        greetings: ['merhaba', 'selam', 'hey', 'hi', 'günaydın', 'iyi günler'],
        farewells: ['güle güle', 'hoşça kal', 'bay', 'görüşürüz'],
        questions: {
            name: ['adın ne', 'ismin ne', 'sen kimsin'],
            skills: ['yeteneklerin', 'neler yapabilirsin', 'beceriler', 'teknolojiler'],
            projects: ['projelerin', 'ne yaptın', 'çalışmalar'],
            experience: ['deneyimin', 'tecrüben', 'iş geçmişin'],
            contact: ['iletişim', 'nasıl ulaşırım', 'mail', 'discord'],
            location: ['neredesin', 'nerede yaşıyorsun', 'konum'],
            education: ['eğitim', 'okul', 'üniversite'],
            services: ['hizmetler', 'ne sunuyorsun', 'servisler']
        },
        responses: {
            greeting: ['Merhaba! 👋 Ben JR|Fahrenheit yapay zeka asistanıyım. Size nasıl yardımcı olabilirim?', 'Selam! 🙋‍♂️ Hoş geldiniz! Sormak istediğiniz bir şey var mı?'],
            farewell: ['Görüşmek üzere! 👋 İyi günler!', 'Hoşça kalın! 🌟 Tekrar görüşmek dileğiyle!'],
            name: ['Ben JR|Fahrenheit AI asistanıyım! 🤖 Full-stack developer olan sahibim hakkında bilgi verebilirim.'],
            skills: ['JR|Fahrenheit şu teknolojilerde uzman:\n\n💻 Frontend: HTML, CSS, JavaScript, React, Vue.js\n⚙️ Backend: Node.js, Python, MongoDB, PostgreSQL\n🛠️ Tools: Git, Docker, AWS, CI/CD\n\nDetaylı bilgi için Skills bölümünü ziyaret edebilirsiniz!'],
            projects: ['JR|Fahrenheit birçok harika proje geliştirdi! 🚀\n\n- AI-Powered Dashboard\n- Modern E-Shop Platform\n- Fitness Tracker Pro\n- Discord Bot\n- Game Mod Tool\n\nProjects bölümünde tüm projeleri görebilirsiniz!'],
            experience: ['JR|Fahrenheit 5+ yıllık deneyime sahip:\n\n🏢 2023-Şimdi: Senior Full-Stack Developer\n🏢 2021-2023: Full-Stack Developer\n🏢 2019-2021: Frontend Developer\n\nExperience bölümünde detayları bulabilirsiniz!'],
            contact: ['Benimle iletişime geçmek için:\n\n💬 Discord: tr_aytekin\n🌍 Location: Germany\n📧 Email: contact@jrfahrenheit.dev\n\nContact bölümünden mesaj gönderebilirsiniz!'],
            location: ['JR|Fahrenheit Almanya\'da 🇩🇪 yaşıyor ve remote çalışmaya açık!'],
            education: ['Computer Science & Engineering mezunu. Sürekli öğrenmeye ve gelişmeye devam ediyor! 📚'],
            services: ['Sunduğumuz hizmetler:\n\n🌐 Web Development\n📱 Mobile Apps\n🎨 UI/UX Design\n🤖 Discord Bots\n\nServices bölümünde detayları görebilirsiniz!'],
            unknown: ['İlginç bir soru! 🤔 Şunları sorabilirsiniz:\n\n- Yeteneklerin neler?\n- Projelerin nedir?\n- Deneyimin nasıl?\n- İletişim bilgileri\n- Hizmetlerin neler?']
        }
    },
    en: {
        greetings: ['hello', 'hi', 'hey', 'good morning', 'good day', 'howdy'],
        farewells: ['bye', 'goodbye', 'see you', 'farewell', 'later'],
        questions: {
            name: ['your name', 'who are you', 'what is your name'],
            skills: ['skills', 'what can you do', 'abilities', 'technologies'],
            projects: ['projects', 'what did you build', 'portfolio', 'work'],
            experience: ['experience', 'background', 'work history'],
            contact: ['contact', 'reach you', 'email', 'discord'],
            location: ['where are you', 'location', 'live'],
            education: ['education', 'school', 'university', 'degree'],
            services: ['services', 'what do you offer', 'hire']
        },
        responses: {
            greeting: ['Hello! 👋 I am JR|Fahrenheit AI assistant. How can I help you?', 'Hi there! 🙋‍♂️ Welcome! What would you like to know?'],
            farewell: ['Goodbye! 👋 Have a great day!', 'See you later! 🌟 Feel free to come back anytime!'],
            name: ['I am JR|Fahrenheit AI assistant! 🤖 I can tell you about my creator who is a full-stack developer.'],
            skills: ['JR|Fahrenheit is expert in:\n\n💻 Frontend: HTML, CSS, JavaScript, React, Vue.js\n⚙️ Backend: Node.js, Python, MongoDB, PostgreSQL\n🛠️ Tools: Git, Docker, AWS, CI/CD\n\nCheck the Skills section for more details!'],
            projects: ['JR|Fahrenheit has built amazing projects! 🚀\n\n- AI-Powered Dashboard\n- Modern E-Shop Platform\n- Fitness Tracker Pro\n- Discord Bot\n- Game Mod Tool\n\nVisit the Projects section to see them all!'],
            experience: ['JR|Fahrenheit has 5+ years of experience:\n\n🏢 2023-Now: Senior Full-Stack Developer\n🏢 2021-2023: Full-Stack Developer\n🏢 2019-2021: Frontend Developer\n\nFind details in the Experience section!'],
            contact: ['Get in touch:\n\n💬 Discord: tr_aytekin\n🌍 Location: Germany\n📧 Email: contact@jrfahrenheit.dev\n\nYou can send a message from the Contact section!'],
            location: ['JR|Fahrenheit is based in Germany 🇩🇪 and available for remote work!'],
            education: ['Computer Science & Engineering graduate. Always learning and improving! 📚'],
            services: ['Services offered:\n\n🌐 Web Development\n📱 Mobile Apps\n🎨 UI/UX Design\n🤖 Discord Bots\n\nCheck the Services section for details!'],
            unknown: ['Interesting question! 🤔 You can ask me:\n\n- What are your skills?\n- What are your projects?\n- Tell me about your experience\n- Contact information\n- What services do you offer?']
        }
    }
};

chatToggle.addEventListener('click', () => {
    chatOpen = !chatOpen;
    if (chatOpen) {
        chatWidget.classList.add('active');
        chatBadge.style.display = 'none';
        musicPlayer.classList.remove('active');
        chatInput.focus();
    } else {
        chatWidget.classList.remove('active');
    }
    playClickSound();
});

chatClose.addEventListener('click', () => {
    chatWidget.classList.remove('active');
    chatOpen = false;
});

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function detectLanguage(text) {
    const turkishChars = /[çğıöşüÇĞİÖŞÜ]/;
    const turkishWords = ['merhaba', 'selam', 'naber', 'nasılsın', 'günaydın', 'iyi'];
    
    if (turkishChars.test(text)) return 'tr';
    
    const lowerText = text.toLowerCase();
    for (let word of turkishWords) {
        if (lowerText.includes(word)) return 'tr';
    }
    
    return 'en';
}

function getAIResponse(userMessage) {
    const lang = detectLanguage(userMessage);
    userLanguage = lang;
    const kb = aiKnowledge[lang];
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for greetings
    for (let greeting of kb.greetings) {
        if (lowerMessage.includes(greeting)) {
            return kb.responses.greeting[Math.floor(Math.random() * kb.responses.greeting.length)];
        }
    }
    
    // Check for farewells
    for (let farewell of kb.farewells) {
        if (lowerMessage.includes(farewell)) {
            return kb.responses.farewell[Math.floor(Math.random() * kb.responses.farewell.length)];
        }
    }
    
    // Check for specific questions
    for (let [topic, keywords] of Object.entries(kb.questions)) {
        for (let keyword of keywords) {
            if (lowerMessage.includes(keyword)) {
                return kb.responses[topic];
            }
        }
    }
    
    // Unknown question
    return kb.responses.unknown[0];
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';
    conversationHistory.push({ role: 'user', message });
    
    // Show typing indicator
    showTypingIndicator();
    
    // Get AI response
    setTimeout(() => {
        hideTypingIndicator();
        const response = getAIResponse(message);
        addChatMessage(response, 'bot');
        conversationHistory.push({ role: 'bot', message: response });
        playClickSound();
    }, 1000 + Math.random() * 1000);
}

function addChatMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + 
                 now.getMinutes().toString().padStart(2, '0');
    
    messageDiv.innerHTML = `
        <p>${text.replace(/\n/g, '<br>')}</p>
        <span class="message-time">${time}</span>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    if (type === 'user') {
        playClickSound();
    }
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing-indicator';
    typingDiv.id = 'typing';
    typingDiv.innerHTML = `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
}

// Auto-send welcome message after delay
setTimeout(() => {
    if (!chatOpen) {
        chatBadge.style.display = 'flex';
        chatBadge.textContent = '1';
    }
}, 5000);

// ============================================
// 3D TILT EFFECT
// ============================================
const tiltElements = document.querySelectorAll('[data-tilt]');

tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ============================================
// ENHANCED PARTICLE INTERACTIONS
// ============================================
let particleHue = 0;
setInterval(() => {
    particleHue += 1;
    if (particleHue > 360) particleHue = 0;
}, 50);

// ============================================
// TYPING SOUND EFFECT
// ============================================
let typingSoundEnabled = true;

chatInput.addEventListener('input', () => {
    if (typingSoundEnabled && soundEnabled) {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBThP0e+9dycFKHjH8NSKOgkSZLvs6aJVFAw+mv7sp1YUCkyo');
        audio.volume = 0.1;
        audio.play().catch(() => {});
    }
});

// ============================================
// ADVANCED SCROLL ANIMATIONS
// ============================================
let scrollProgress = 0;

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    scrollProgress = (window.scrollY / documentHeight) * 100;
    
    // Update scroll progress indicator
    document.documentElement.style.setProperty('--scroll-progress', scrollProgress + '%');
    
    // Parallax effect for gradient orbs
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.15);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('fade-in-up');
        }
    });
});

// Add smooth reveal animation to sections
const revealSections = document.querySelectorAll('section');
const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

// ============================================
// SECTION INTERSECTION OBSERVER
// ============================================
const sections = document.querySelectorAll('section');
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// HAKKIMDA DETAYLI BÖLÜMÜ İÇİN ETKİLEŞİMLER
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Hakkımda detaylı bölümündeki istatistik kartları için animasyon
    const statCards = document.querySelectorAll('.stat-card');
    
    // Sayfa yüklendiğinde istatistik kartlarını göster
    setTimeout(() => {
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }, 500);
    
    // Hakkımda detaylı bölümündeki metin animasyonu
    const aboutDetailText = document.querySelector('.about-detail-text');
    if (aboutDetailText) {
        aboutDetailText.style.opacity = '0';
        aboutDetailText.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            aboutDetailText.style.transition = 'all 0.8s ease';
            aboutDetailText.style.opacity = '1';
            aboutDetailText.style.transform = 'translateX(0)';
        }, 300);
    }
});

// ============================================
// BLOG BÖLÜMÜ İÇİN ETKİLEŞİMLER
// ============================================
// Blog kartları için hover efekti
document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ============================================
// YETENEK BÖLÜMÜ GENİŞLETME
// ============================================
// Yeni yetenekler eklemek için fonksiyon
function addNewSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    // Yeni yetenek kategorisi ekle
    const newSkillCategory = document.createElement('div');
    newSkillCategory.className = 'skill-category';
    newSkillCategory.setAttribute('data-aos', 'zoom-in');
    newSkillCategory.setAttribute('data-aos-delay', '300');
    
    newSkillCategory.innerHTML = `
        <div class="category-icon">
            <i class="fas fa-cloud"></i>
        </div>
        <h3>Cloud & DevOps</h3>
        <div class="skills-list">
            <div class="skill-item">
                <div class="skill-header">
                    <span>AWS</span>
                    <span class="skill-percent">85%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-width="85%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-header">
                    <span>Docker</span>
                    <span class="skill-percent">90%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-width="90%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-header">
                    <span>Kubernetes</span>
                    <span class="skill-percent">75%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-width="75%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-header">
                    <span>CI/CD</span>
                    <span class="skill-percent">80%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-width="80%"></div>
                </div>
            </div>
        </div>
    `;
    
    // Yetenek ızgarasının sonuna yeni kategoriyi ekle
    skillsGrid.appendChild(newSkillCategory);
    
    // Yeni yetenekler için animasyonları başlat
    setTimeout(() => {
        const newSkillFills = newSkillCategory.querySelectorAll('.skill-fill');
        newSkillFills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            fill.style.width = width;
        });
    }, 100);
}

// Sayfa yüklendiğinde yeni yetenekleri ekle
document.addEventListener('DOMContentLoaded', () => {
    // 3 saniye sonra yeni yetenekleri ekle
    setTimeout(addNewSkills, 3000);
});

// ============================================
// PROJE FİLTRELEME GELİŞTİRME
// ============================================
// Proje filtreleme işlevini geliştir
function enhanceProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Tüm butonlardan active sınıfını kaldır
            filterButtons.forEach(b => b.classList.remove('active'));
            // Tıklanan butona active sınıfını ekle
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                // Tüm kartları gizle
                card.style.display = 'none';
                
                // Tüm kartlara fadeOut animasyonu ekle
                card.style.animation = 'fadeOut 0.3s';
                
                // Filtreleme işlemi
                setTimeout(() => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        // Yeni animasyon ekle
                        card.style.animation = 'fadeIn 0.5s';
                    }
                }, 300);
            });
        });
    });
}

// Fade in ve fade out animasyonları için CSS ekle
function addFilterAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
    `;
    document.head.appendChild(style);
}

// Sayfa yüklendiğinde proje filtreleme işlevini geliştir
document.addEventListener('DOMContentLoaded', () => {
    addFilterAnimations();
    enhanceProjectFiltering();
});

// ============================================
// İLETİŞİM FORMU GELİŞTİRME
// ============================================
// İletişim formunu geliştir ve doğrulama ekle
function enhanceContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Form alanlarını al
            const name = contactForm.querySelector('input[type="text"]');
            const email = contactForm.querySelector('input[type="email"]');
            const subject = contactForm.querySelector('input[type="text"][placeholder="Subject"]');
            const message = contactForm.querySelector('textarea');
            
            // Basit doğrulama
            if (!name.value.trim()) {
                showNotification('Lütfen adınızı girin', 'error');
                name.focus();
                return;
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showNotification('Lütfen geçerli bir e-posta adresi girin', 'error');
                email.focus();
                return;
            }
            
            if (!subject.value.trim()) {
                showNotification('Lütfen konu girin', 'error');
                subject.focus();
                return;
            }
            
            if (!message.value.trim()) {
                showNotification('Lütfen mesajınızı girin', 'error');
                message.focus();
                return;
            }
            
            // Formu gönder (simülasyon)
            showNotification('Mesajınız başarıyla gönderildi!', 'success');
            contactForm.reset();
        });
    }
}

// E-posta doğrulama fonksiyonu
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Sayfa yüklendiğinde iletişim formunu geliştir
document.addEventListener('DOMContentLoaded', () => {
    enhanceContactForm();
});

// ============================================
// BLOG BÖLÜMÜ İÇİN YENİ İÇERİK EKLEME
// ============================================
// Yeni blog gönderisi eklemek için fonksiyon
function addNewBlogPost() {
    const blogGrid = document.querySelector('.blog-grid');
    
    // Yeni blog gönderisi oluştur
    const newBlogPost = document.createElement('article');
    newBlogPost.className = 'blog-card';
    newBlogPost.setAttribute('data-aos', 'flip-left');
    newBlogPost.setAttribute('data-aos-delay', '600');
    newBlogPost.setAttribute('data-tilt', '');
    
    // Rastgele kategori ve tarih oluştur
    const categories = ['Tutorial', 'Development', 'Design', 'AI & ML', 'Analytics', 'Security'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    // Rastgele tarih oluştur (son 30 gün içinde)
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    newBlogPost.innerHTML = `
        <div class="blog-image">
            <img src="https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}" alt="Blog">
            <span class="blog-category">${category}</span>
        </div>
        <div class="blog-content">
            <div class="blog-meta">
                <span><i class="fas fa-calendar"></i> ${formattedDate}</span>
                <span><i class="fas fa-clock"></i> ${Math.floor(Math.random() * 10) + 5} min read</span>
            </div>
            <h3>Yeni Teknoloji Trendleri ${new Date().getFullYear()}</h3>
            <p>Yazılım geliştirme dünyasında bu yıl gözlemlediğimiz yeni teknoloji trendlerini ve bunların gelecekteki etkilerini inceliyoruz.</p>
            <a href="#" class="blog-link">Devamını Oku <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    
    // Blog ızgarasının başına yeni gönderiyi ekle
    blogGrid.insertBefore(newBlogPost, blogGrid.firstChild);
    
    // Tilt efektini yeniden başlat
    initializeTiltEffect(newBlogPost);
}

// Tilt efektini başlatmak için fonksiyon
function initializeTiltEffect(element) {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}

// Sayfa yüklendiğinde yeni blog gönderisi ekle
document.addEventListener('DOMContentLoaded', () => {
    // 5 saniye sonra yeni blog gönderisi ekle
    setTimeout(addNewBlogPost, 5000);
});

// ============================================
// FOOTER GÜNCELLEME
// ============================================
// Footer'da yıl bilgisini güncelle
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        const copyrightText = footerBottom.querySelector('p');
        if (copyrightText) {
            copyrightText.innerHTML = `&copy; ${currentYear} 𝙅𝙍|Fahrenheit. All rights reserved.`;
        }
    }
});


const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, revealOptions);

revealSections.forEach(section => {
    revealOnScroll.observe(section);
});

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    showNotification('🎉 KONAMI CODE ACTIVATED! Elite Mode Unlocked!', 'success');
    document.body.style.animation = 'rainbow 3s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 10000);
}

// Rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// ============================================
// ENHANCED NOTIFICATIONS WITH ICONS
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: '✓',
        error: '✗',
        info: 'ℹ',
        warning: '⚠'
    };
    
    const gradients = {
        success: 'linear-gradient(45deg, #43b581, #00FFFF)',
        error: 'linear-gradient(45deg, #FF006E, #FF4500)',
        info: 'linear-gradient(45deg, #00A8FF, #00FFFF)',
        warning: 'linear-gradient(45deg, #FFD700, #FFA500)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 1rem 1.5rem;
        background: ${gradients[type]};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10001;
        animation: slideIn 0.5s ease;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 350px;
    `;
    
    notification.innerHTML = `
        <span style="font-size: 1.5rem;">${icons[type]}</span>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, 'color: #FFD700; font-size: 14px; font-weight: bold;');
    });
}

// ============================================
// AUTO-SAVE PREFERENCES
// ============================================
function savePreferences() {
    const prefs = {
        theme: document.body.getAttribute('data-theme') || 'dark',
        soundEnabled: soundEnabled,
        particlesEnabled: document.getElementById('particlesToggle').checked
    };
    localStorage.setItem('portfolioPreferences', JSON.stringify(prefs));
}

function loadPreferences() {
    const saved = localStorage.getItem('portfolioPreferences');
    if (saved) {
        const prefs = JSON.parse(saved);
        if (prefs.theme) document.body.setAttribute('data-theme', prefs.theme);
        soundEnabled = prefs.soundEnabled !== false;
        if (prefs.particlesEnabled === false) {
            document.getElementById('particlesToggle').checked = false;
            document.getElementById('particles-js').style.display = 'none';
        }
    }
}

// Save preferences on change
window.addEventListener('beforeunload', savePreferences);
loadPreferences();

// ============================================
// FINAL INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Ultra Portfolio Initialized Successfully!');
    
    // Load initial track
    loadTrack();
    
    // Add loaded class to body
    setTimeout(() => {
        document.body.classList.add('loaded');
        
        // Immediately show hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.classList.add('revealed');
        }
    }, 100);
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to my Elite Portfolio! 🚀', 'success');
    }, 2000);
    
    // Add stagger animation to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
    
    // Add entrance animations to cards
    setTimeout(() => {
        const cards = document.querySelectorAll('.project-card, .service-card, .skill-category, .blog-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
        });
    }, 0);
    
    // Smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'instant' });
});

// ============================================
// HAKKIMDA DETAYLI BÖLÜMÜ İÇİN ETKİLEŞİMLER
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Hakkımda detaylı bölümündeki istatistik kartları için animasyon
    const statCards = document.querySelectorAll('.stat-card');
    
    // Sayfa yüklendiğinde istatistik kartlarını göster
    setTimeout(() => {
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }, 500);
    
    // Hakkımda detaylı bölümündeki metin animasyonu
    const aboutDetailText = document.querySelector('.about-detail-text');
    if (aboutDetailText) {
        aboutDetailText.style.opacity = '0';
        aboutDetailText.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            aboutDetailText.style.transition = 'all 0.8s ease';
            aboutDetailText.style.opacity = '1';
            aboutDetailText.style.transform = 'translateX(0)';
        }, 300);
    }
});

// ============================================
// BLOG BÖLÜMÜ İÇİN ETKİLEŞİMLER
// ============================================
// Blog kartları için hover efekti
document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ============================================
// YETENEK BÖLÜMÜ GENİŞLETME
// ============================================
// Yeni yetenekler eklemek için fonksiyon
function addNewSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    // Yeni yetenek kategorisi ekle
    const newSkillCategory = document.createElement('div');
    newSkillCategory.className = 'skill-category';
    newSkillCategory.setAttribute('data-aos', 'zoom-in');
    newSkillCategory.setAttribute('data-aos-delay', '300');
    
    newSkillCategory.innerHTML = `
        <div class="category-icon">
            <i class="fas fa-cloud"></i>
        </div>
        <h3>Cloud & DevOps</h3>
        <div class="skills-list">
            <div class="skill-item">
                <div class="skill-header">
                    <span>AWS</span>
                    <span class="skill-percent">85%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-width="85%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-header">
                    <span>Docker</span>
                    <span class="skill-percent">90%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-width="90%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-header">
                    <span>Kubernetes</span>
                    <span class="skill-percent">75%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-width="75%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-header">
                    <span>CI/CD</span>
                    <span class="skill-percent">80%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-width="80%"></div>
                </div>
            </div>
        </div>
    `;
    
    // Yetenek ızgarasının sonuna yeni kategoriyi ekle
    skillsGrid.appendChild(newSkillCategory);
    
    // Yeni yetenekler için animasyonları başlat
    setTimeout(() => {
        const newSkillFills = newSkillCategory.querySelectorAll('.skill-fill');
        newSkillFills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            fill.style.width = width;
        });
    }, 100);
}

// Sayfa yüklendiğinde yeni yetenekleri ekle
document.addEventListener('DOMContentLoaded', () => {
    // 3 saniye sonra yeni yetenekleri ekle
    setTimeout(addNewSkills, 3000);
});

// ============================================
// PROJE FİLTRELEME GELİŞTİRME
// ============================================
// Proje filtreleme işlevini geliştir
function enhanceProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Tüm butonlardan active sınıfını kaldır
            filterButtons.forEach(b => b.classList.remove('active'));
            // Tıklanan butona active sınıfını ekle
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                // Tüm kartları gizle
                card.style.display = 'none';
                
                // Tüm kartlara fadeOut animasyonu ekle
                card.style.animation = 'fadeOut 0.3s';
                
                // Filtreleme işlemi
                setTimeout(() => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        // Yeni animasyon ekle
                        card.style.animation = 'fadeIn 0.5s';
                    }
                }, 300);
            });
        });
    });
}

// Fade in ve fade out animasyonları için CSS ekle
function addFilterAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
    `;
    document.head.appendChild(style);
}

// Sayfa yüklendiğinde proje filtreleme işlevini geliştir
document.addEventListener('DOMContentLoaded', () => {
    addFilterAnimations();
    enhanceProjectFiltering();
});

// ============================================
// İLETİŞİM FORMU GELİŞTİRME
// ============================================
// İletişim formunu geliştir ve doğrulama ekle
function enhanceContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Form alanlarını al
            const name = contactForm.querySelector('input[type="text"]');
            const email = contactForm.querySelector('input[type="email"]');
            const subject = contactForm.querySelector('input[type="text"][placeholder="Subject"]');
            const message = contactForm.querySelector('textarea');
            
            // Basit doğrulama
            if (!name.value.trim()) {
                showNotification('Lütfen adınızı girin', 'error');
                name.focus();
                return;
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showNotification('Lütfen geçerli bir e-posta adresi girin', 'error');
                email.focus();
                return;
            }
            
            if (!subject.value.trim()) {
                showNotification('Lütfen konu girin', 'error');
                subject.focus();
                return;
            }
            
            if (!message.value.trim()) {
                showNotification('Lütfen mesajınızı girin', 'error');
                message.focus();
                return;
            }
            
            // Formu gönder (simülasyon)
            showNotification('Mesajınız başarıyla gönderildi!', 'success');
            contactForm.reset();
        });
    }
}

// E-posta doğrulama fonksiyonu
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Sayfa yüklendiğinde iletişim formunu geliştir
document.addEventListener('DOMContentLoaded', () => {
    enhanceContactForm();
});

// ============================================
// BLOG BÖLÜMÜ İÇİN YENİ İÇERİK EKLEME
// ============================================
// Yeni blog gönderisi eklemek için fonksiyon
function addNewBlogPost() {
    const blogGrid = document.querySelector('.blog-grid');
    
    // Yeni blog gönderisi oluştur
    const newBlogPost = document.createElement('article');
    newBlogPost.className = 'blog-card';
    newBlogPost.setAttribute('data-aos', 'flip-left');
    newBlogPost.setAttribute('data-aos-delay', '600');
    newBlogPost.setAttribute('data-tilt', '');
    
    // Rastgele kategori ve tarih oluştur
    const categories = ['Tutorial', 'Development', 'Design', 'AI & ML', 'Analytics', 'Security'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    // Rastgele tarih oluştur (son 30 gün içinde)
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    newBlogPost.innerHTML = `
        <div class="blog-image">
            <img src="https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}" alt="Blog">
            <span class="blog-category">${category}</span>
        </div>
        <div class="blog-content">
            <div class="blog-meta">
                <span><i class="fas fa-calendar"></i> ${formattedDate}</span>
                <span><i class="fas fa-clock"></i> ${Math.floor(Math.random() * 10) + 5} min read</span>
            </div>
            <h3>Yeni Teknoloji Trendleri ${new Date().getFullYear()}</h3>
            <p>Yazılım geliştirme dünyasında bu yıl gözlemlediğimiz yeni teknoloji trendlerini ve bunların gelecekteki etkilerini inceliyoruz.</p>
            <a href="#" class="blog-link">Devamını Oku <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    
    // Blog ızgarasının başına yeni gönderiyi ekle
    blogGrid.insertBefore(newBlogPost, blogGrid.firstChild);
    
    // Tilt efektini yeniden başlat
    initializeTiltEffect(newBlogPost);
}

// Tilt efektini başlatmak için fonksiyon
function initializeTiltEffect(element) {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}

// Sayfa yüklendiğinde yeni blog gönderisi ekle
document.addEventListener('DOMContentLoaded', () => {
    // 5 saniye sonra yeni blog gönderisi ekle
    setTimeout(addNewBlogPost, 5000);
});

// ============================================
// FOOTER GÜNCELLEME
// ============================================
// Footer'da yıl bilgisini güncelle
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        const copyrightText = footerBottom.querySelector('p');
        if (copyrightText) {
            copyrightText.innerHTML = `&copy; ${currentYear} 𝙅𝙍|Fahrenheit. All rights reserved.`;
        }
    }
});
