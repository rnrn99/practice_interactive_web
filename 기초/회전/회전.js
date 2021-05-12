window.onload = function() {
    var resetbtn = document.querySelector(".resetBtn");
    var rotationBtn = document.querySelector(".rotationBtn");
    var p = document.getElementsByTagName("p")[0];
    var arrow = document.querySelector(".arrow");
    var num = 0;

    resetbtn.addEventListener("click", () => {
        num = 0;
        p.innerHTML = num + " deg";
        arrow.style.transform = "rotate(" + num +"deg)";
    })

    rotationBtn.addEventListener("click", () => {
        num = Math.round(Math.random() * 720);
        p.innerHTML = num + " deg";
        arrow.style.transform = "rotate(" + num +"deg)";
    })
}