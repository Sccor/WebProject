var rellax = new Rellax('.rellax', {center: true});

window.onscroll = function () {
    this.console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 400) {
        document.querySelector('but1').style.backgroundPosition="dqs";
    }
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

function show_info(id){
    var inf = "#info"
    var inf = inf.concat(id)
    if(document.querySelector(inf).style.display == 'inline-block'){
        document.querySelector(inf).style.display='none';
    }else{
        document.querySelector(inf).style.display='inline-block';
    }
}

function contact_form(){
    alert("Votre réponse a bien été envoyée !");
}
