function checkResize(body) {
    var timelineTics = document.getElementsByClassName("timeline-spacer-block");
    var greeting = document.getElementById("greeting").getElementsByTagName("h1");


    if (body.clientWidth <= 1903 && body.clientWidth >= 981) {
        for (var i=0;i<=greeting.length;i++) {
            greeting[i].style.fontSize = "50pt";
        }
    } else if (body.clientWidth <= 980 && body.clientWidth >= 413) {
        greeting[2].style.animationName = "bottomAnimTablet";
        greeting[4].style.animationName = "bottomAnimTablet";
        for (var i=0;i<=greeting.length;i++) {
            greeting[i].style.fontSize = "25pt";
        }
    } else if (body.clientWidth <= 412 && body.clientWidth >= 0){
        greeting[2].style.animationName = "bottomAnimMobile";
        greeting[4].style.animationName = "bottomAnimMobile";
        for (var i=0;i<=greeting.length;i++) {
            greeting[i].style.fontSize = "12.5pt";
        }
        
    }



    if (body.clientWidth >= 1903) {
        for (var i=0;i<timelineTics.length;i++) {
            timelineTics[i].style.display = "block";
        }
    } else {
        for (var i=0;i<timelineTics.length;i++) {
            timelineTics[i].style.display = "none";
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

window.addEventListener('load', function () {
    checkResize(this.document.getElementById("body"));
})
