document.getElementById('toggleButton').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-btn');
    const nav = document.querySelector('header nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});