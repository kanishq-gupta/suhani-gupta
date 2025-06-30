// Smooth scrolling for the scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroSection = document.querySelector('.hero-section');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const contentSection = document.querySelector('.content');
            contentSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-section');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Animate info cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        observer.observe(card);
    });

    // Add click effects to info cards
    infoCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a subtle pulse effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 100);
        });
    });

    // Floating particles animation
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: 100%;
            animation: floatUp ${Math.random() * 10 + 10}s linear infinite;
            pointer-events: none;
        `;
        
        const floatingParticles = document.querySelector('.floating-particles');
        if (floatingParticles) {
            floatingParticles.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 20000);
        }
    }

    // Create particles periodically
    setInterval(createFloatingParticle, 2000);

    // Add CSS for floating particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Image hover effects
    const plantImage = document.querySelector('.plant-image');
    if (plantImage) {
        plantImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        plantImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Add typing effect to the main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }

    // Add interactive hover effect to the flower animation
    const flowerAnimation = document.querySelector('.flower-animation');
    if (flowerAnimation) {
        flowerAnimation.addEventListener('mouseenter', function() {
            this.style.animationDuration = '0.5s';
        });
        
        flowerAnimation.addEventListener('mouseleave', function() {
            this.style.animationDuration = '4s';
        });
    }

    // Smooth reveal animation for name section
    const nameSection = document.querySelector('.name-section');
    if (nameSection) {
        const nameObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const plantName = entry.target.querySelector('.plant-name');
                    const nameDetails = entry.target.querySelector('.name-details');
                    
                    plantName.style.animation = 'slideInUp 1s ease forwards';
                    nameDetails.style.animation = 'slideInUp 1s ease 0.3s forwards';
                }
            });
        }, observerOptions);
        
        nameObserver.observe(nameSection);
    }
});

// Add dynamic color changing effect
function addColorTransition() {
    const cards = document.querySelectorAll('.info-card');
    const colors = ['#74b9ff', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e', '#e17055'];
    
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            const color = colors[index % colors.length];
            this.style.borderTop = `4px solid ${color}`;
            this.querySelector('.card-icon').style.filter = `hue-rotate(${index * 60}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderTop = 'none';
            this.querySelector('.card-icon').style.filter = 'none';
        });
    });
}

// Call the color transition function after DOM is loaded
document.addEventListener('DOMContentLoaded', addColorTransition);