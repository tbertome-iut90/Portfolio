document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelector('.projects');
    const orderText = document.getElementById('orderText');

    document.addEventListener('click', function(event) {
        if (event.target.matches('#toggleButton')) {
            projects.classList.toggle('reverse');

            if (orderText.textContent === 'du plus récent au plus ancien') {
                orderText.textContent = 'du plus ancien au plus récent';
            } else {
                orderText.textContent = 'du plus récent au plus ancien';
            }
        }
    });
});