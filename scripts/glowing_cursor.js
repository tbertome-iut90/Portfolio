// ----- GLOWING CURSOR ----- //

document.addEventListener('mousemove', function(e) {
    const glowCursor = document.getElementById('glowing-cursor');
    glowCursor.style.transform = `translate(${e.pageX - glowCursor.offsetWidth / 2}px, ${e.pageY - glowCursor.offsetHeight / 2}px)`;
});