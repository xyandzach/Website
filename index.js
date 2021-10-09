function setGreeting(body) {
    var greeting = document.getElementById("greeting").getElementsByTagName("h1");
    var projectImgs = document.getElementsByClassName("description-image");

    if (body.clientWidth <= 1000) {
        greeting[2].style.animationName = "bottomAnimTablet";
        greeting[4].style.animationName = "bottomAnimTablet";
        for (var i=0;i<=greeting.length;i++) {
            greeting[i].style.fontSize = "23pt";
        }
        for (var i=0;i<=projectImgs.length;i++) {
            projectImgs[i].style.width = "110%";
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
    setGreeting(this.document.getElementById("body"));
}
