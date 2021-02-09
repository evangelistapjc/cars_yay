scrollNav = () => {                              //Hides and shows navbar
    let nav = document.querySelector(".navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.margin = 0;
        nav.style.width = "100%";
        hideMain();
    } else {
        nav.style.margin = "80px";
        nav.style.width = "90%";
        showMain();
    }
}

hideMain = () => {                                //Hides button and logo
    let logo = document.getElementById("logo");
    let button = logo.nextElementSibling;
    logo.style.maxHeight = 0;
    logo.style.margin = -80 + "px";
    button.style.maxHeight = 0;
    button.style.margin = -80 + "px";

}

showMain = () => {                                //Shows Button and logo
    let logo = document.getElementById("logo");
    let button = logo.nextElementSibling;
    logo.style.maxHeight = "500px"
    logo.style.margin = 50 + "px";
    button.style.maxHeight = "500px"
    button.style.margin = 200 + "px";
}

window.onscroll = ()=>{scrollNav()};
