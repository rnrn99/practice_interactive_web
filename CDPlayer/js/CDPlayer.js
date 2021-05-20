window.onload = function () {
    var prevBtn = document.querySelectorAll("button")[0];
    var nextBtn = document.querySelectorAll("button")[1];
    var contentWrap = document.querySelector('.contentWrap');
    var diskInner = document.querySelectorAll('.disk_inner');
    var album = document.querySelectorAll('.album');
    var pointBtn = document.querySelectorAll('.pointWrap li');
    var bgArr = new Array(
        ["#0272a4", "#f6a564"],
        ["#b6bfc8", "#36595b"],
        ["#e58e82", "#6f569f"]);
    var pageNum = 0;
    var totalNum = album.length;

    prevBtn.addEventListener("click", () => {
        prevPage();
        pageChange();
    });

    nextBtn.addEventListener("click", () => {
        nextPage();
        pageChange();
    })

    for (var i = 0; i < pointBtn.length; i++) {
        (function (index) {
            pointBtn[index].onclick = () => {
                pageNum = index;
                pageChange();
            }
        })(i);
    }

    pageChange();

    function prevPage() {
        if (pageNum > 0) {
            return pageNum--;
        } else {
            pageNum = totalNum - 1;
        }
    }

    function nextPage() {
        if (pageNum < totalNum - 1) {
            pageNum++;
        } else {
            pageNum = 0;
        }
    }

    function pageChange() {
        contentWrap.style.background = "linear-gradient(120deg," + bgArr[pageNum][0] + "," + bgArr[pageNum][1] + ")";

        for (var i = 0; i < totalNum; i++) {
            if (pageNum == i) {
                //현재 컨텐츠(페이지)
                album[i].classList.add("active");
                pointBtn[i].classList.add("active");
            } else {
                album[i].classList.remove("active");
                pointBtn[i].classList.remove("active");
            }
        }
        diskInner[pageNum].style.background = bgArr[pageNum][0];
    }

    function checkMobile() {
        var mobileKeywords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');

        for (var i in mobileKeywords) {
            if (navigator.userAgent.match(mobileKeywords[i]) != null) return true;
        }
        return false;
    }

    if (checkMobile()) {
        contentWrap.addEventListener('touchstart', pageTouch, false);
        contentWrap.addEventListener('touchend', pageTouch, false);
    }

    var start_x = 0;
    var end_x = 0;

    function pageTouch(event) {
        var type = null;

        switch (event.type) {
            case 'touchstart':
                type = "mousedown";
                start_x = event.changedTouches[0].clientX;
                break;
            case 'touchend':
                type = "mouseup";
                end_x = event.changedTouches[0].clientX;

                var move_x = end_x - start_x;

                if (Math.abs(move_x) > 70) {
                    if (move_x > 0) {
                        prevPage();
                    } else {
                        nextPage();
                    }
                }
                pageChange();
                break;
        }
    }
}
