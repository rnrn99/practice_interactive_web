window.onload = function() {
    var starBg = document.querySelector('.starBg');
    var title = document.querySelector('.title');

    window.addEventListener('scroll', () => {
        var yOffset = this.scrollY;
        starBg.style.transform = "translateY(" + (-scroll)/3 + "px)";
        title.style.transform = "translateY(" + scroll/1.7 + "px)";       
    });

    setTimeout(function() {
        window.scrollTo({
            top: document.querySelector('bottom').offsetTop,
            behavior: 'smooth'
        });       
    }, 1000);
}