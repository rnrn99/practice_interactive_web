window.onload = function() {
    var input = document.getElementsByTagName("input")[0];
    var button = document.querySelector(".startBtn");
    var result = document.querySelector(".result");

    var arr = ["UP", "DOWN", "Correct!"];
    var ran = 0;
    
    button.addEventListener("click", () => {
        if(ran === 0){
            ran = Math.round(Math.random() * 10);
        }
        calc(ran);
    })

    function calc(ran){
        var num = input.value;

        if(num < ran){
            result.innerHTML = arr[0];
        } else if( num > ran){
            result.innerHTML = arr[1];
        } else{
            result.innerHTML = arr[2];
        }
    }
}