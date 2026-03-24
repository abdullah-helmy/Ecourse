const navlink = document.querySelectorAll('.nav-item');
const logo = document.querySelector('.nav-logo');

logo.addEventListener('click', () => {
    navlink.forEach(item => {
        item.classList.remove('active');
    });
});

navlink.forEach(link => {
    link.addEventListener('click', () => {
        navlink.forEach(item => {
            item.classList.remove('active');
        });

        link.classList.add('active');
    });
});