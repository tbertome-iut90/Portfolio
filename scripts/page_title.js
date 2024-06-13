document.addEventListener('DOMContentLoaded', () => {
    let title = document.title;

    window.addEventListener('blur', () => {
        document.title = 'Revenez! 😢😢';
    });
    window.addEventListener('focus', () => {
        document.title = title;
    });
});