// Add interactive effects
document.addEventListener('DOMContentLoaded', function () {
    // Add hover effects to form inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('transform', 'scale-105');
        });
        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('transform', 'scale-105');
        });
    });

    // Add ripple effect to submit button
    const button = document.querySelector('button[type="submit"]');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.add('animate-pulse');
        setTimeout(() => {
            this.classList.remove('animate-pulse');
        }, 600);
    });

    // Stagger animation delays for contact cards
    const cards = document.querySelectorAll(
        '.animate-slide-in-right > div > div',
    );
    cards.forEach((card, index) => {
        card.style.animationDelay = `${0.8 + index * 0.1}s`;
        card.style.opacity = '0';
        card.style.animationFillMode = 'forwards';
        card.classList.add('animate-fade-in');
    });
});
