window.onload = function() {
    var body = document.querySelector('body');
    var section = document.querySelector('section');
    var btn = document.querySelectorAll('button');
    var bgArr = ["#2eccc4", "#ea204f", "#20a9ea"];
    var pageNum = 0;
    var totalNum = 100;
    var Width, Height, item;

    window.addEventListener('resize', () => {
        resize();
    });

    for (var i = 0; i < btn.length; i++){
        (function(index) {
            btn[index].onclick = () => {
                pageNum = index;
                particleMode();
            }
        })(i);
    }

    TweenMax.from("h1", 1, {
        top: -50,
        autoAlpha: 0,
        ease: Power3.easeOut
    });

    btn.forEach((item, i) => {
        TweenMax.from(item, 0.4, {
            top: 100,
            autoAlpha: 0,
            ease: Power3.easeInOut,
            delay: i * 0.1 + 1
        });
    });

    TweenMax.set("section", {perspective: 400});

    for(var i = 0; i<totalNum; i++){
        item = document.createElement("div");
        item.setAttribute("class", "textItem");
        item.style.top = window.innerHeight / 2 + "px";
        item.style.left = window.innerWidth / 2 + "px";
        item.innerHTML = i;
        section.appendChild(item);
    }

    var text = document.querySelectorAll('.textItem');

    function resize() {
        Width = window.innerWidth;
        Height = window.innerHeight;

        particleMode();
    }
    
    function particleMode(){
        for (var i = 0; i < btn.length; i++){
            btn[i].classList.remove("active");
        }
        btn[pageNum].classList.add("active");
        body.style.background = bgArr[pageNum];

        TweenMax.killTweensOf(text);
        
        switch(pageNum) {
            case 0:
               text.forEach((item) => {
                   TweenMax.to(item, 1, {
                       top: Math.random() * (Height - 150) + 60,
                       left: Math.random() * (Width - 80) + 20,
                       rotationX: 0,
                       rotationY: 0,
                       rotationZ: 0,
                       autoAlpha: "random(0.1,1)",
                       scale: 0.5,
                       ease: Power4.easeOut,
                       delay: "random(0,0.5)"
                   });
               });
            break;
            case 1:
                text.forEach((item) => {
                    TweenMax.to(item, 1, {
                        top: Math.random() * (Height - 250) + 100,
                       left: Math.random() * (Width - 200) + 80,
                       rotationX: "random(-60,60)",
                       rotationY: "random(-60,60)",
                       rotationZ: "random(-90,90)",
                       autoAlpha: "random(0.1,1)",
                       scale: "random(0.5,3)",
                       ease: Power4.easeInOut,
                       delay: "random(0,0.5)"
                    });
                });
            break;
            case 2:
                text.forEach((item, i) => {
                    TweenMax.to(item, 1, {
                        top: Height / 2 + Math.sin( i / 3 ) * 40,
                        left: i*19.1,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        autoAlpha: "random(0.5,1)",
                        scale: 0.5,
                        ease: Power4.easeOut,
                        delay: i * 0.01
                    });
                });
            break;
        }
    }

    resize();
}