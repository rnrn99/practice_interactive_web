
window.onload = function() {
    var starBg = document.querySelector('.starBg');
    var title = document.querySelector('.title');
    var topBtn = document.querySelector('.topBtn');
    var li = document.querySelectorAll('li');
    var yOffset = this.scrollY;
    
    window.addEventListener('scroll', () => {
        starBg.style.transform = "translateY(" + (-yOffset)/3 + "px)";
        title.style.transform = "translateY(" + yOffset/1.7 + "px)";       
    });

    for(var i = 0; i < title.querySelectorAll('div').length; i++){
        var text = title.querySelectorAll('div')[i];

        TweenMax.from(text, 1, {
            autoAlpha: 0,
            delay: Math.random() * 1,
            ease: Power3.easeInOut
        });
    }

    TweenMax.to(window, 2, {
        scrollTo: {
            y: ".bottom"
        },
        delay: 1.7,
        ease: Power3.easeInOut
    });

    TweenMax.from(".bottom", 2.5, {
        scale: 0.7,
        y: 100,
        delay: 2.2,
        ease: Power3.easeInOut
    });
    
    TweenMax.set("ul", {perspective: 400});
    
    TweenMax.set("li", { rotateY: 45 });

    TweenMax.to("li", 2.5, {
        rotateY : 0,
        delay: 2.2,
        ease: Power3.easeInOut
    });

    li.forEach(function(li){

        li.addEventListener("mouseenter", function(e) {
            TweenMax.to(this, 0.5, {
                y: -20,
                ease: Power3.easeOut
            });
        });
    
        li.addEventListener("mouseleave", function(e){
            TweenMax.to(this, 0.5, {
                y: 0,
                ease: Power3.easeOut
            });
        });
    });
    
    topBtn.addEventListener('click', () => {
        TweenMax.to(window, 1.5, {
            scrollTo: {
                y: 0,
                autoKill: true
            },
            ease: Power3.easeInOut
        });
    });
}