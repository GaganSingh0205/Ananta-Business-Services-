
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden'); 
        }

        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        function handleSubmit(event) {
            event.preventDefault();
            alert('Thank you for your message! This is a demo form. In a real website, your message would be sent to our team.');
        }

        function showTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all buttons
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('active');
            });
            
            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked button
            event.target.classList.add('active');
        }

        // Counter animation
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            
            function updateCounter() {
                start += increment;
                if (start < target) {
                    element.textContent = Math.floor(start);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            }
            updateCounter();
        }

        // Initialize counters when they come into view
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                    counterObserver.unobserve(counter);
                }
            });
        });

        // Set up counter targets and observe them
        document.addEventListener('DOMContentLoaded', function() {
            const counters = [
                { id: 'counter1', target: 500 },
                { id: 'counter2', target: 1200 },
                { id: 'counter3', target: 15 },
                { id: 'counter4', target: 50 }
            ];
            
            counters.forEach(counter => {
                const element = document.getElementById(counter.id);
                element.setAttribute('data-target', counter.target);
                counterObserver.observe(element);
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Add fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe various elements for animations
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.service-card, .testimonial-card, .pricing-card').forEach(card => {
                observer.observe(card);
            });
        });

        // Pricing card hover effects
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                if (!this.classList.contains('pricing-popular')) {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '';
                }
            });
        });

        // Add scroll-triggered animations
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Initialize tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Set first tab as active by default
            const firstTab = document.querySelector('.tab-button');
            const firstContent = document.querySelector('.tab-content');
            if (firstTab && firstContent) {
                firstTab.classList.add('active');
                firstContent.classList.add('active');
            }
        });

