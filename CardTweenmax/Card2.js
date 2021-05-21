window.onload = function() {
    var cards = document.querySelectorAll('.cardItem');
    var btn = document.querySelectorAll('button');
    var pageNum = 0;

    for(var i = 0; i< btn.length; i++){
        (function(index){
            btn[index].onclick = () => {
                pageNum = index;
                cardSetting();
            }
        })(i);
    }

    TweenMax.from("h1", 1, {
        top: -50,
        autoAlpha: 0,
        delay: 0.2,
        ease: Power3.easeOut
    });

    btn.forEach((item, i) => {
        TweenMax.from(item, 0.4, {
            top: 100,
            autoAlpha: 0,
            ease: Power3.easeOut,
            delay: i * 0.1 + 1
        });
    });

    TweenMax.set("section", { perspective: 400 });
    
    function cardSetting() {

    }
}