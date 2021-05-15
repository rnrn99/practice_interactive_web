window.onload = function () {
    var section = document.getElementsByTagName('section');
    var pointBtn = document.querySelectorAll('.pointWrap li');

    var pageNum = 0;
    var totalNum = section.length;

    for (var i = 0; i < totalNum; i++) {
        (function (index) {
            pointBtn[index].onclick = () => {
                pageNum = index;
                pageChange();

                window.scrollTo({
                    top: section[pageNum].offsetTop,
                    behavior: 'smooth'
                });
            }
        })(i);
    }

    window.addEventListener('scroll', () => {
        var yOffset = this.scrollY;
        var height = window.innerHeight / 1.5;

        for (var i = 0; i < totalNum; i++) {
            if (yOffset > section[i].offsetTop - height &&
                yOffset < section[i].offsetTop - height + section[i].offsetHeight) {
                pageNum = i;
                break;
            }
        }
        pageChange();
    })

    function pageChange() {
        for (var i = 0; i < totalNum; i++) {
            section[i].classList.remove('active');
            pointBtn[i].classList.remove('active');
        }
        section[pageNum].classList.add('active');
        pointBtn[pageNum].classList.add('active');
    }
}