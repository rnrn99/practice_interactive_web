window.onload = function () {
    var cards = document.querySelectorAll('.cardItem');
    var btn = document.querySelectorAll('button');
    var pageNum = 0;
    var Width, Height;

    window.addEventListener("resize", () => {
        resize();
    });

    for (var i = 0; i < btn.length; i++) {
        (function (index) {
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

    TweenMax.set("section", {
        perspective: 400
    });

    function resize() {
        Width = window.innerWidth;
        Height = window.innerHeight;

        cardSetting();
    }

    function cardSetting() {
        for (var i = 0; i < btn.length; i++) {
            btn[i].classList.remove("active");
        }
        btn[pageNum].classList.add("active");

        switch (pageNum) {
            case 0:
                cards.forEach((item, i) => {
                    TweenMax.to(item, 1, {
                        top: Height / 2 - i * 50,
                        left: Width / 2 + (i * 60 - 200),
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        ease: Power3.easeInOut,
                        delay: i * 0.2
                    });
                });
            break;

            case 1:
                cards.forEach((item) => {
                    TweenMax.to(item, 1, {
                        top: Math.random() * (Height / 1.5),
                        left: Math.random() * (Width / 1.5),
                        rotationX: "random(-60, 60)",
                        rotationY: "random(-60, 60)",
                        rotationZ: "random(-90, 90)",
                        ease: Power4.easeInOut,
                        delay: "random(0, 0.5)"
                    });
                });
            break;

            case 2:
                cards.forEach((item, i) => {
                    TweenMax.to(item, 1, {
                        top: Height / 2 + i * 30 - 100,
                        left: Width / 2 - i * 80,
                        rotationX: 0,
                        rotationY: -10 * i,
                        rotationZ: 20 * i,
                        ease: Power3.easeInOut,
                        delay: i * 0.2
                    });
                });
            break;

            case 3:
                cards.forEach((item) => {
                    TweenMax.to(item, 1, {
                        top: Math.random() * (Height / 1.3),
                        left: Math.random() * (Width / 1.3),
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        ease: Power3.easeInOut,
                        delay: "random(0,0.5)"
                    })
                })
            break;
        }
    }

    resize();
}