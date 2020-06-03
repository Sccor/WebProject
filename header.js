window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) { 
        document.querySelector('header').className = "fixed"; 
    } else {
        document.querySelector('header').className = "";
    }
 };