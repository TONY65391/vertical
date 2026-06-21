const header = document.querySelector('header');
const menu = header.querySelector('.menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
})
window.addEventListener('click', (e) => {
    if (!e.target.matches(".menu")){
        menu.classList.remove('open');
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 20){header.classList.add('scroll')}
    else{header.classList.remove('scroll')};
})