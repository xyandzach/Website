function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function perfChecks() {
    document.documentElement.style.scrollBehavior = "smooth";
    if (isMobile()) {
        //mobile/tablet
        var bgFish = document.getElementById("bgFish");
        var downArrow = document.getElementById("downArrow");
        var pageLinkIcons = document.getElementsByClassName("page-links-button-img");
        var projectTitles = document.getElementsByClassName("project-title");
        var projectLanguages = document.getElementsByClassName("project-languages");
        var projectDescription = document.getElementsByClassName("project-description");
        var projectArrows = document.getElementsByName("sideArrow");
        var buttons = document.getElementsByClassName("page-links-button");
        var letsFish = document.getElementById("letsFish");
        var fishText = document.getElementById("fishText");
        var fishDescription = document.getElementsByClassName("fish-description");
        var fishImgs = document.getElementsByClassName("fish-img");
        var emailMessage = document.getElementsByClassName("email-message");
        var emailButton = document.getElementsByClassName("email-button");
        var headerLinks = document.getElementsByClassName("header-links");
        var footerImg = document.getElementById("footerImg");
        var footerNav = document.getElementById("footerNav");
        var socialLinks = document.getElementById("socialLinks");
        var welcomeLinks = document.getElementsByClassName("welcome-links");
        var headerLogo = document.getElementById("headerLogo");
        var pageLinks = document.getElementsByClassName("page-link-icon");
        for(var i = 0;i <= pageLinks.length-1;i++) {
            pageLinks[i].style.width = "5%";
        }
        pageLinks[0].style.right = "70%";
        pageLinks[1].style.right = "25%";
        socialLinks.style.marginLeft = "28.5%";
        emailButton[0].style.paddingRight = "10px";
        emailButton[0].style.paddingLeft = "10px";
        emailMessage[0].style.paddingRight = "125px";
        fishImgs[0].style.width = "75%";
        fishImgs[1].style.width = "75%";
        fishDescription[0].style.marginRight = "0";
        fishDescription[1].style.marginLeft = "0";
        fishText.style.fontSize = "15pt";
        letsFish.style.fontSize = "10pt";
        letsFish.style.marginTop = "35px";
        for (var i=0;i<buttons.length;i++) {
            buttons[i].style.maxWidth = "30%";
        }
        for (var i=0;i<projectTitles.length;i++) {
            if(i <= 3) {
                projectLanguages[i].style.fontSize = "60%";
                projectArrows[i].style.height = "2%";
                projectArrows[i].style.paddingTop = "4%";
                projectDescription[i].style.fontSize = "85%";
            }
            projectTitles[i].style.fontSize = "100%";
        }
        for (var i=0;i<pageLinkIcons.length;i++) {
            pageLinkIcons[i].style.height = "2%";
        }

        bgFish.style.display = "none";
        downArrow.style.display = "none";
        for (var i = 0; i <= headerLinks.length - 1;i++) {
            headerLinks[i].style.width = "20%";
        }
        for(var t=0;t<=welcomeLinks.length - 1;t++) {
            welcomeLinks[t].style.fontSize = "175%";
        }
        headerLogo.style.paddingRight = "20%";
    } 
}

window.onload = function() {
    perfChecks();
}
