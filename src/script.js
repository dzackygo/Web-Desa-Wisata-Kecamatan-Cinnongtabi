document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                entry.target.classList.remove('is-hidden');
            } else {
                if (entry.target.classList.contains('is-visible')) {
                    entry.target.classList.remove('is-visible');
                    entry.target.classList.add('is-hidden');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});