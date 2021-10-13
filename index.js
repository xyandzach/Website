function adjustScreen() {
    var greeting = document.getElementById("greeting").getElementsByTagName("h1");

    if (window.innerWidth == 980 || window.innerWidth == 1024) {
        //mobile/tablet
        greeting[0].style.animationName = "topAnimSmall";
        greeting[1].style.animationName = "topAnimSmall";
        greeting[2].style.animationName = "bottomAnimSmall";
        greeting[3].style.animationName = "topAnimSmall";
        greeting[4].style.animationName = "bottomAnimSmall";
        for (var i=0;i<=greeting.length;i++) {
            greeting[i].style.fontSize = "23pt";
        }
    } else if (window.innerWidth == 1280 && window.innerHeight == 800) {
        //macbook
        var aboutBar = document.getElementById("aboutBar");
        aboutBar.style.paddingTop = "42px";
        aboutBar.style.paddingBottom = "42px";
        for (var i=0;i<=greeting.length;i++) {
            greeting[i].style.fontSize = "35pt";
        }
    } else if (window.innerWidth == 1280) {
        //laptop w/ touch
        var aboutBar = document.getElementById("aboutBar");
        aboutBar.style.paddingTop = "77px";
        aboutBar.style.paddingBottom = "77px";
        for (var i=0;i<=greeting.length;i++) {
            greeting[i].style.fontSize = "35pt";
        }
    } else if (window.innerWidth == 1440) {
        //laptop
        var aboutBar = document.getElementById("aboutBar");
        aboutBar.style.paddingTop = "77px";
        aboutBar.style.paddingBottom = "77px";
        for (var i=0;i<=greeting.length;i++) {
            greeting[i].style.fontSize = "35pt";
        }
    } 
}

function showTileOverlay(ev) {
    var index = ev.id;
    var width = ev.offsetWidth;
    width = width - 19;
    var height = ev.offsetHeight;
    height = height - 19;
    
    switch (index) {
        case "1":
            document.getElementById("overlay1").style.display = "block";
            document.getElementById("overlay1").style.width = width + "px";
            document.getElementById("overlay1").style.height = height + "px";
            break;
        case "2":
            document.getElementById("overlay2").style.display = "block";
            document.getElementById("overlay2").style.width = width + "px";
            document.getElementById("overlay2").style.height = height + "px";
            break;
        case "3":
            document.getElementById("overlay3").style.display = "block";
            document.getElementById("overlay3").style.width = width + "px";
            document.getElementById("overlay3").style.height = height + "px";
            break;
        default:
            break;
    }
}

function showTimelinePopup(ev, img) {
    var popup = document.getElementById("timelinePopup");
    var title = document.getElementById("popupTitle");
    var description = document.getElementById("popupDescription");
    
    description.innerHTML = img.alt;
    title.innerHTML = img.id;

    if (img.id == "PC" || img.id == "Alienware M11x") {
        var x = ev.pageX - 360;
        var y = ev.pageY + 10;
    } else {
        var x = ev.pageX + 10;
        var y = ev.pageY + 10;
    }


    popup.style.left = x + "px";
    popup.style.top = y + "px";

    popup.style.display = "block";
}

function removeTimelinePopup() {
    var popup = document.getElementById("timelinePopup");
    popup.style.display = "none";
}

window.onload = function() {
    adjustScreen();
}
