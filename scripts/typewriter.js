function typewriterEffect(element, speed) {
    return new Promise(resolve => {
        const originalHTML = element.innerHTML;
        const html = element.textContent;
        element.innerHTML = '';
        element.style.opacity = '0';

        let i = 0;
        const timer = setInterval(function () {
            if (i < html.length) {
                element.innerHTML += html.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(function () {
                    element.innerHTML = originalHTML;
                    resolve();
                }, 0);
            }
        }, speed);

        setTimeout(function () {
            element.style.opacity = '1';
        }, 100);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    const speed = 10;
    const delay = 500;

    function initObserver() {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    setTimeout(() => {
                        typewriterEffect(element, speed);
                    }, index * delay);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });

        typewriterElements.forEach((element, index) => {
            observer.observe(element);
        });
    }

    initObserver();

    document.addEventListener('click', function(event) {
        const target = event.target;
        let button = null;

        if (target.matches('#toggleButton')) {
            button = target;
        } else if (target.closest('#toggleButton')) {
            button = target.closest('#toggleButton');
        }

        if (button) {
            const projects = document.querySelector('.projects');
            const orderText = document.getElementById('orderText');

            projects.classList.toggle('reverse');

            if (orderText.textContent === 'du plus récent au plus ancien') {
                orderText.textContent = 'du plus ancien au plus récent';
            } else {
                orderText.textContent = 'du plus récent au plus ancien';
            }
        }
    });
});