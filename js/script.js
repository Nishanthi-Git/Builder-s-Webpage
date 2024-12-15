const navimg = document.getElementsByClassName('navimg')[0];
const navlinks = document.getElementsByClassName('navlinks')[0];

navimg.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});



document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





  