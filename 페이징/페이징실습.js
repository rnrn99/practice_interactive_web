window.onload = function() {
    var section = document.getElementsByTagName("section");
    var pageNum = 0;
    var totalNum = section.length;

    window.addEventListener('scroll', () => {
        var yOffset = this.scrollY;
        var height = window.innerHeight/2;

        for(var i=0; i<totalNum; i++){
            if(yOffset > section[i].offsetTop - height &&
                yOffset < section[i].offsetTop - height + section[i].offsetHeight){
                    pageNum = i;
                    break;
            }
        }

        pageChange();
    });

    function pageChange() {
        for(var i = 0; i< totalNum; i++ ){
            section[i].classList.remove("active");
        }
        section[pageNum].classList.add("active");
    }

    pageChange();
}