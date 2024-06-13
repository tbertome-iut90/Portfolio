document.addEventListener('DOMContentLoaded', function() {
    // Function to add the reverse class to every second project
    function applyReverseClass() {
        const years = document.querySelectorAll('.projects .year');
        years.forEach(year => {
            const projects = year.querySelectorAll('.project');
            projects.forEach((project, index) => {
                if (index % 2 !== 0) { // Apply reverse class to every second project (1-based index)
                    project.querySelector('.overview').classList.add('reverse');
                }
            });
        });
    }

    applyReverseClass();

    const projects = document.querySelector('.projects');
    const orderText = document.getElementById('orderText');

    document.addEventListener('click', function(event) {
        if (event.target.matches('#toggleButton') || event.target.closest('#toggleButton')) {
            projects.classList.toggle('reverse');

            if (orderText.textContent === 'du plus récent au plus ancien') {
                orderText.textContent = 'du plus ancien au plus récent';
            } else {
                orderText.textContent = 'du plus récent au plus ancien';
            }

            // Toggle the reverse class on each year's projects
            const years = document.querySelectorAll('.projects .year');
            years.forEach(year => {
                const yearProjects = year.querySelector('.year-projects');
                yearProjects.classList.toggle('reverse');
            });

            // Reverse the order of the years in the main container
            const yearsArray = Array.from(years);
            projects.innerHTML = '';
            yearsArray.reverse().forEach(year => projects.appendChild(year));

            // Reapply the reverse class to every second project after reordering
            applyReverseClass();
        }
    });
});