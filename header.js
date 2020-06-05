window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) { 
        document.querySelector('header').className = "fixed"; 
    } else {
        document.querySelector('header').className = "";
    }
 };


 document.querySelector('.raccourci').onclick=function(e){
    e.preventDefault();
    document.querySelector('.nav_right').classList.toggle('is_open');
 }