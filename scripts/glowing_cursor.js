// ----- GLOWING CURSOR ----- //

document.addEventListener('mousemove', function(e) {
    const glowCursor = document.getElementById('glowing-cursor');
    glowCursor.style.transform = `translate(${e.clientX - glowCursor.offsetWidth / 2}px, ${e.clientY - glowCursor.offsetHeight / 2}px)`;
});