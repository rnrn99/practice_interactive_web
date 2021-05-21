window.onload = function() {
    var cards = document.querySelectorAll('.cardItem');
    var randomBtn = document.querySelectorAll('button')[0];
    var resetBtn = document.querySelectorAll('button')[1];
    var Width, Height;

    randomBtn.addEventListener('click', () => {
        cardRandom();
    });

    resetBtn.addEventListener('click', () => {
        cardSetting();
    });

    window.addEventListener('resize', () => {
        resize();
    });
    
    function resize() {
        Width = window.innerWidth;
        Height = window.innerHeight;
        cardSetting();
    }

    function cardSetting() {
        cards.forEach((item, i) => {
            TweenMax.to(item, 1, {
                top: Height / 2 - (i * 40),
                left: Width / 2 + (i * 40 - 200),
                rotation: 0,
                ease: Power3.easeInOut,
                delay: i * 0.2
            });
        });
    }

    function cardRandom() {
        cards.forEach((item, i) => {
            TweenMax.to(item, 1, {
                top: Math.random() * Height,
                left: Math.random() * Width,
                rotation: Math.random() * 180,
                ease: Power3.easeInOut,
                delay: i * 0.2
            });
        });
    }

    resize();

}