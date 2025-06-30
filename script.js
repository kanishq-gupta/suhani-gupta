// Enhanced Cosmic JavaScript for Ultra Beautiful Experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cosmic cursor
    initCosmicCursor();
    
    // Initialize magical scroll effects
    initMagicalScrolling();
    
    // Initialize particle systems
    initParticleSystems();
    
    // Initialize interactive elements
    initInteractiveElements();
    
    // Initialize cosmic animations
    initCosmicAnimations();
});

// Cosmic Cursor System
function initCosmicCursor() {
    const cursor = document.querySelector('.cosmic-cursor');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('.crystal-card, .scroll-portal, .detail-orb, .name-letter');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, #43e97b, #4facfe)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, #ff6b9d, #c44569)';
        });
    });
}

// Magical Scrolling System
function initMagicalScrolling() {
    const scrollPortal = document.querySelector('.scroll-portal');
    
    if (scrollPortal) {
        scrollPortal.addEventListener('click', () => {
            const contentSection = document.querySelector('.content');
            contentSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add magical scroll effect
            createScrollMagic();
        });
    }
    
    // Parallax effects
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        const floatingElements = document.querySelectorAll('.element');
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        floatingElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
        
        // Reveal animations
        revealOnScroll();
    });
}

// Particle Systems
function initParticleSystems() {
    createStarField();
    createFloatingPetals();
    createCosmicParticles();
    createImageParticles();
}

function createStarField() {
    const starsContainer = document.querySelector('.stars-container');
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'cosmic-star';
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        starsContainer.appendChild(star);
    }
}

function createFloatingPetals() {
    const petalsContainer = document.querySelector('.floating-petals');
    const petals = ['🌸', '🌺', '🌼', '🌻', '🌷'];
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}%;
            top: 100%;
            animation: floatUp ${Math.random() * 10 + 15}s linear infinite;
            pointer-events: none;
            opacity: ${Math.random() * 0.7 + 0.3};
        `;
        
        petalsContainer.appendChild(petal);
        
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 25000);
    }, 3000);
}

function createCosmicParticles() {
    const particlesContainer = document.querySelector('.cosmic-particles');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: radial-gradient(circle, #ff6b9d, #4facfe);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 8 + 5}s ease-in-out infinite;
            pointer-events: none;
        `;
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 13000);
    }, 1500);
}

function createImageParticles() {
    const imageContainer = document.querySelector('.image-particles');
    if (!imageContainer) return;
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.textContent = '✨';
        particle.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 15 + 10}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: sparkleRise ${Math.random() * 3 + 2}s ease-out infinite;
            pointer-events: none;
            color: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
        `;
        
        imageContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 5000);
    }, 2000);
}

// Interactive Elements
function initInteractiveElements() {
    // Crystal cards interactions
    const crystalCards = document.querySelectorAll('.crystal-card');
    
    crystalCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '10';
            createCardAura(card);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.zIndex = '1';
        });
        
        card.addEventListener('click', () => {
            createClickRipple(card);
        });
    });
    
    // Name letters interaction
    const nameLetters = document.querySelectorAll('.name-letter');
    
    nameLetters.forEach((letter, index) => {
        letter.addEventListener('mouseenter', () => {
            letter.style.textShadow = '0 0 30px currentColor';
            createLetterSparkles(letter);
        });
        
        letter.addEventListener('mouseleave', () => {
            letter.style.textShadow = 'none';
        });
    });
    
    // Image hover effects
    const imageContainer = document.querySelector('.image-container');
    if (imageContainer) {
        imageContainer.addEventListener('mouseenter', () => {
            createImageMagic();
        });
    }
}

// Cosmic Animations
function initCosmicAnimations() {
    // Typing effect for title
    animateTitle();
    
    // Constellation animations
    animateConstellations();
    
    // Aurora effects
    enhanceAurora();
}

function animateTitle() {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        const text = word.textContent;
        word.innerHTML = '';
        
        [...text].forEach((char, charIndex) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${(index * 0.5) + (charIndex * 0.1)}s`;
            span.style.animation = 'letterReveal 0.8s ease forwards';
            span.style.opacity = '0';
            word.appendChild(span);
        });
    });
}

function animateConstellations() {
    const constellationDots = document.querySelectorAll('.constellation-dot');
    
    constellationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            createConstellationBurst(dot);
        });
    });
}

function enhanceAurora() {
    const aurora = document.querySelector('.aurora-bg');
    
    setInterval(() => {
        const intensity = Math.random() * 0.3 + 0.7;
        aurora.style.opacity = intensity;
    }, 3000);
}

// Magical Effects
function createScrollMagic() {
    const magic = document.createElement('div');
    magic.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, rgba(255, 107, 157, 0.8), transparent);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: scrollMagic 1s ease-out forwards;
        pointer-events: none;
        z-index: 9999;
    `;
    
    document.body.appendChild(magic);
    
    setTimeout(() => {
        if (magic.parentNode) {
            magic.parentNode.removeChild(magic);
        }
    }, 1000);
}

function createCardAura(card) {
    const aura = document.createElement('div');
    aura.className = 'card-hover-aura';
    aura.style.cssText = `
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background: linear-gradient(45deg, #ff6b9d, #4facfe, #43e97b);
        border-radius: 35px;
        opacity: 0;
        animation: auraGlow 0.5s ease forwards;
        z-index: -1;
        pointer-events: none;
    `;
    
    card.appendChild(aura);
    
    setTimeout(() => {
        if (aura.parentNode) {
            aura.parentNode.removeChild(aura);
        }
    }, 500);
}

function createClickRipple(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: rippleEffect 0.6s ease-out forwards;
        pointer-events: none;
        z-index: 10;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

function createLetterSparkles(letter) {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 10 + 8}px;
            animation: sparkleFloat ${Math.random() * 2 + 1}s ease-out forwards;
            pointer-events: none;
            z-index: 10;
        `;
        
        letter.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }
}

function createImageMagic() {
    const imageContainer = document.querySelector('.image-container');
    
    for (let i = 0; i < 10; i++) {
        const magic = document.createElement('div');
        magic.textContent = ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)];
        magic.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 15}px;
            animation: magicRise ${Math.random() * 3 + 2}s ease-out forwards;
            pointer-events: none;
            z-index: 5;
        `;
        
        imageContainer.appendChild(magic);
        
        setTimeout(() => {
            if (magic.parentNode) {
                magic.parentNode.removeChild(magic);
            }
        }, 5000);
    }
}

function createConstellationBurst(dot) {
    for (let i = 0; i < 8; i++) {
        const burst = document.createElement('div');
        burst.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 2px;
            background: #ff6b9d;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: burstOut 1s ease-out forwards;
            animation-delay: ${i * 0.1}s;
            pointer-events: none;
        `;
        
        dot.appendChild(burst);
        
        setTimeout(() => {
            if (burst.parentNode) {
                burst.parentNode.removeChild(burst);
            }
        }, 1500);
    }
}

function revealOnScroll() {
    const elements = document.querySelectorAll('.crystal-card, .detail-orb, .cosmic-caption');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

// Add dynamic CSS animations
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes letterReveal {
        from { opacity: 0; transform: translateY(20px) rotateX(90deg); }
        to { opacity: 1; transform: translateY(0) rotateX(0deg); }
    }
    
    @keyframes scrollMagic {
        to { transform: translate(-50%, -50%) scale(3); opacity: 0; }
    }
    
    @keyframes auraGlow {
        to { opacity: 0.3; }
    }
    
    @keyframes rippleEffect {
        to { width: 200px; height: 200px; opacity: 0; }
    }
    
    @keyframes sparkleFloat {
        to { transform: translateY(-50px); opacity: 0; }
    }
    
    @keyframes magicRise {
        to { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes burstOut {
        to { transform: translate(-50%, -50%) translateX(${Math.random() * 100 - 50}px) translateY(${Math.random() * 100 - 50}px); opacity: 0; }
    }
    
    @keyframes sparkleRise {
        to { transform: translateY(-30px) rotate(180deg); opacity: 0; }
    }
    
    @keyframes particleFloat {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes floatUp {
        to { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    .revealed {
        animation: revealMagic 1s ease forwards;
    }
    
    @keyframes revealMagic {
        from { opacity: 0; transform: translateY(50px) scale(0.8); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
`;

document.head.appendChild(dynamicStyles);

// Performance optimization
let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

function updateAnimations() {
    // Update any performance-heavy animations here
    ticking = false;
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌟 Cosmic Portulaca Website Initialized! 🌟');
});
