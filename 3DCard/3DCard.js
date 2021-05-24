var content;
var x = 0, y = 0;
var mx = 0, my = 0;
var isMobile = false;
var isIos = false;

window.onload = function() {
    content = document.querySelector('.contentWrap');
    var btn = document.querySelector('button');

    btn.addEventListener("click", () => {
        btn.classList.add("dimd");
        content.classList.add("active");

        if(isMobile){
            // if(isIos){
            //     DeviceOrientationEvent.requestPermission().then(() =>{
            //         checkMobileOrientation();
            //     }).catch(console.error());
            // }
            // else {
            //     checkMobileOrientation();
            // }

            // function checkMobileOrientation() {
            //     window.addEventListener("deviceorientation", (e) => {
            //         x = e.gamma;
            //         y = e.beta;
            //     });
            //     loop();
            // }

            window.addEventListener("deviceorientation", (e) => {
                x = e.gamma;
                y = e.beta;
            });
            loop();
        }
        else {
            window.addEventListener("mousemove", (e) => {
                x = e.clientX - window.innerWidth / 2;
                y = e.clientY - window.innerHeight / 2;
            });
            loop();
        }
    });

    checkMobile();
}

function loop() {
    mx += (x - mx) * 0.1;
    my += (y - my) * 0.1;
    if(isMobile){
        content.style.transform = "translate3d(-50%, -50%, 0) rotateX(" + (my - 50)
        +"deg) rotateY("+ mx + "deg)";
    }
    else {
        content.style.transform = "translate3d(-50%, -50%, 0) rotateX(" + (my / 10)
        +"deg) rotateY("+ (-mx/10) + "deg)";
    }
    window.requestAnimationFrame(loop);
}

function checkMobile() {
    var mobileKeywords = new Array('Android', 'iPhone', 'iPad', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for(var info in mobileKeywords){
        var temp = navigator.userAgent.match(mobileKeywords[info]);
        if(temp != null){
            isMobile = true;
            
            if(temp == 'iPhone' || temp == 'iPad'){
                isIos = true;
            }
            return;
        }
    }
    isMobile = false;
    isIos = false;
    return;
}