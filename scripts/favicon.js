function updateFavicon() {
    const favicon = document.getElementById('favicon');
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkMode) {
        favicon.href = 'favicons/logo-dark.ico';
    } else {
        favicon.href = 'favicons/logo.ico';
    }
}

updateFavicon();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);