// script.js - BG LLC Professional Enhancements

document.addEventListener('DOMContentLoaded', () => {
    // ====================== NAVBAR ======================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    function handleNavbar() {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide navbar on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleNavbar);

    // ====================== SCROLL REVEAL ======================
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => revealObserver.observe(el));

    // ====================== HERO IMAGE ZOOM + PARALLAX ======================
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const rate = scrollY * -0.08;
            heroVisual.style.transform = `translateY(${rate}px)`;
        });
    }

    // ====================== FAQ ACCORDION ======================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Close all others
            faqItems.forEach(faq => faq.classList.remove('open'));
            
            // Toggle current
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // ====================== MOBILE MENU ======================
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ====================== CONTACT FORM ======================
    const form = document.getElementById('bgForm');
    const toast = document.getElementById('toast');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            if (!fullName || !phone || !service) {
                showToast("Por favor completa los campos obligatorios", true);
                return;
            }

            const text = `New BG LLC Request\n\n` +
                        `Name: ${fullName}\n` +
                        `Email: ${email}\n` +
                        `Phone: ${phone}\n` +
                        `Service: ${service}\n` +
                        `Message: ${message}`;

            const whatsappUrl = `https://wa.me/14075155785?text=${encodeURIComponent(text)}`;

            // Show toast
            showToast("Abriendo WhatsApp con tu solicitud...");
            
            // Open WhatsApp
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                form.reset();
            }, 800);
        });
    }

    // Toast helper
    function showToast(message, isError = false) {
        if (!toast) return;
        toast.textContent = message;
        toast.style.background = isError ? '#c23' : 'var(--deep-green)';
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3800);
    }

    // ====================== SERVICE CARDS HOVER ANIMATION ======================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.12) rotate(-8deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });

    // ====================== COUNTER ANIMATION (if you add numbers later) ======================
    function animateCounter(el, target, duration = 1800) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Example usage:
    // document.querySelectorAll('.stat-number').forEach(el => {
    //     const target = parseInt(el.getAttribute('data-target'));
    //     animateCounter(el, target);
    // });

    // ====================== KEYBOARD SUPPORT ======================
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            const openMenu = document.querySelector('.mobile-menu.open');
            if (openMenu) {
                openMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        }
    });

    // ====================== PERFORMANCE: LAZY LOAD IMAGES ======================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    console.log('%c✅ BG LLC script loaded successfully with premium animations', 
                'color: #3F7A57; font-family: Fraunces; font-size: 14px;');
});

// ====================== LEGAL MODALS ======================
const legalModal = document.getElementById('legalModal');
const legalTitle = document.getElementById('legalTitle');
const legalContent = document.getElementById('legalContent');
const closeLegalModal = document.getElementById('closeLegalModal');

const legalTexts = {
    terms: {
        title: "Terms of Use",
        content: `
            <p><strong>Last updated: June 23, 2026</strong></p>
            <p>Welcome to BG LLC. By accessing or using our website and services, you agree to be bound by these Terms of Use.</p>
            
            <h4>1. Services</h4>
            <p>BG LLC provides loan referral services, financial education classes, and credit repair assistance.</p>
            
            <h4>2. No Financial Advice</h4>
            <p>All information provided is for educational purposes only and does not constitute financial, legal, or tax advice.</p>
            
            <h4>3. User Responsibilities</h4>
            <p>You agree to provide accurate information and use our services lawfully.</p>
            
            <p style="margin-top:30px;opacity:0.7;font-size:13px;">© 2026 BG LLC. All rights reserved.</p>
        `
    },
    privacy: {
        title: "Privacy Policy",
        content: `
            <p><strong>Last updated: June 23, 2026</strong></p>
            <p>We respect your privacy. This Privacy Policy explains how we collect, use, and protect your information.</p>
            
            <h4>Information We Collect</h4>
            <ul>
                <li>Contact information (name, email, phone)</li>
                <li>Financial information for service processing</li>
                <li>Usage data and cookies</li>
            </ul>
            
            <h4>How We Use Your Information</h4>
            <p>To provide and improve our services, communicate with you, and comply with legal obligations.</p>
            
            <p style="margin-top:30px;opacity:0.7;font-size:13px;">We do not sell your personal data to third parties.</p>
        `
    },
    "ca-notice": {
        title: "California Notice of Collection",
        content: `
            <p><strong>California Residents – Notice of Collection</strong></p>
            <p>Under the California Consumer Privacy Act (CCPA/CPRA), we collect the following categories of personal information...</p>
            <!-- Add full required CCPA text here -->
        `
    },
    "data-use": {
        title: "Data Collection and Use",
        content: `
            <p>We collect data to improve your experience and deliver better financial services.</p>
            <!-- Add detailed explanation -->
        `
    },
    accessibility: {
        title: "Accessibility Statement",
        content: `
            <p>BG LLC is committed to ensuring digital accessibility for all users. We strive to meet WCAG 2.1 Level AA standards.</p>
        `
    },
    sec: {
        title: "SEC Filing",
        content: `
            <p>BG LLC is a registered entity. SEC filings and regulatory information available upon request.</p>
        `
    },
    disclosures: {
        title: "Disclosures and Agreements",
        content: `
            <p>All loan products are subject to lender approval. Rates and terms may vary.</p>
        `
    },
    "legal-requests": {
        title: "Legal Requests",
        content: `
            <p>For legal requests, subpoenas, or DMCA notices, please contact us at the provided WhatsApp number.</p>
        `
    },
    licenses: {
        title: "Licenses",
        content: `
            <p>BG LLC operates under applicable state and federal licenses for financial services.</p>
        `
    }
};

// Open legal modal
document.querySelectorAll('[data-legal]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const key = link.getAttribute('data-legal');
        const data = legalTexts[key];

        if (data) {
            legalTitle.textContent = data.title;
            legalContent.innerHTML = data.content;
            legalModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeLegalModal.addEventListener('click', () => {
    legalModal.classList.remove('show');
    document.body.style.overflow = '';
});

legalModal.addEventListener('click', (e) => {
    if (e.target === legalModal) {
        legalModal.classList.remove('show');
        document.body.style.overflow = '';
    }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && legalModal.classList.contains('show')) {
        legalModal.classList.remove('show');
        document.body.style.overflow = '';
    }
});