// Простая анимация при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');
    window.addEventListener('scroll', () => {
        services.forEach(service => {
            if (window.scrollY + window.innerHeight > service.offsetTop + service.offsetHeight / 2) {
                service.classList.add('visible');
            }
        });
    });
});
