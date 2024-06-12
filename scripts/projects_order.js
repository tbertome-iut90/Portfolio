document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const projects = document.querySelector('.projects');
    const orderText = document.getElementById('orderText');

    toggleButton.addEventListener('click', function() {
        projects.classList.toggle('reverse');

        if (orderText.textContent === 'du plus récent au plus ancien') {
            orderText.textContent = 'du plus ancien au plus récent';
        } else {
            orderText.textContent = 'du plus récent au plus ancien';
        }
    });
});