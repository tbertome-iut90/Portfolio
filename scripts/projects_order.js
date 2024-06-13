document.addEventListener('DOMContentLoaded', function() {
    // Function to add the reverse class to every second project
    function applyReverseClass() {
        const years = document.querySelectorAll('.projects .year');
        years.forEach(year => {
            const projects = year.querySelectorAll('.project');
            projects.forEach((project, index) => {
                if (index % 2 !== 0) {
                    project.querySelector('.overview').classList.add('reverse');
                }
            });
        });
    }

    applyReverseClass();

    const projectsContainer = document.querySelector('.projects');
    const orderText = document.getElementById('orderText');

    document.addEventListener('click', function(event) {
        if (event.target.matches('#toggleButton') || event.target.closest('#toggleButton')) {
            projectsContainer.classList.toggle('reverse');

            if (orderText.textContent === 'du plus récent au plus ancien') {
                orderText.textContent = 'du plus ancien au plus récent';
            } else {
                orderText.textContent = 'du plus récent au plus ancien';
            }

            const years = Array.from(document.querySelectorAll('.projects .year'));
            projectsContainer.innerHTML = '';
            years.reverse().forEach(year => projectsContainer.appendChild(year));

            applyReverseClass();
        }
    });
});