document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        content.classList.toggle('shifted');
    });
});
