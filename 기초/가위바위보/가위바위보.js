window.onload = function() {
    var button = document.querySelector(".startBtn");
    var text1 = document.getElementsByTagName("h1")[0];
    var text2 = document.getElementsByTagName("h1")[1];
    var p = document.getElementsByTagName("p")[0];
    var arr = ["가위", "바위", "보"];

    button.addEventListener("click", () => {
       var num1 = Math.round(Math.random() * (arr.length - 1));
       var num2 = Math.round(Math.random() * (arr.length - 1));
       text1.innerHTML = arr[num1];
       text2.innerHTML = arr[num2];

       if(num1 === num2){
           p.innerHTML = "비겼습니다."
       } else if( (num1 + 2) % 3 === num2 ){
           p.innerHTML = "이겼습니다."
       } else {
           p.innerHTML = "졌습니다."
       }
    })
}