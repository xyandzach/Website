function openMenu() {
    var sideMenu = document.getElementById("navMenu");
    var menuButton = document.getElementById("menuButton");

    if (sideMenu.style.display == "none") {
        sideMenu.style.display = "block";
        menuButton.style.transform = "translate(-235px,0px)";
    } else {
        sideMenu.style.display = "none";
        menuButton.style.transform = "translate(0px,0px)";
    }
}

function start() {
    var sideMenu = document.getElementById("navMenu");
    sideMenu.style.display = "none";
}


window.addEventListener("load",start,false);
