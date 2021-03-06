var rellax = new Rellax('.rellax', {center: true});

window.onscroll = function () {
    var scrollVar = document.documentElement.scrollTop;
    if(document.querySelector('#but1') != null || document.querySelector('#but2') != null || document.querySelector('#but3') != null){
        if (scrollVar >= 50 && scrollVar <= 100) {
            document.querySelector('#but1').style.backgroundPosition="-25%";
        }else if (scrollVar > 100 && scrollVar <= 200) {
            document.querySelector('#but1').style.backgroundPosition="-50%";
        }else if (scrollVar > 200 && scrollVar <= 300) {
            document.querySelector('#but1').style.backgroundPosition="-75%";
        }else if(scrollVar > 300){
            document.querySelector('#but1').style.backgroundPosition="-100%";
        }
        if (scrollVar >= 525 && scrollVar <= 625) {
            document.querySelector('#but2').style.backgroundPosition="+25%";
        }else if (scrollVar > 625 && scrollVar <= 725) {
            document.querySelector('#but2').style.backgroundPosition="+50%";
        }else if (scrollVar > 725 && scrollVar <= 825) {
            document.querySelector('#but2').style.backgroundPosition="+75%";
        }else if(scrollVar > 825){
            document.querySelector('#but2').style.backgroundPosition="+100%";
        }
        if (scrollVar >= 1250 && scrollVar <= 1350) {
            document.querySelector('#but3').style.backgroundPosition="-25%";
        }else if (scrollVar > 1350 && scrollVar < 1450) {
            document.querySelector('#but3').style.backgroundPosition="-50%";
        }else if (scrollVar > 1450 && scrollVar <= 1550) {
            document.querySelector('#but3').style.backgroundPosition="-75%";
        }else if(scrollVar > 1550){
            document.querySelector('#but3').style.backgroundPosition="-100%";
        }
      }
      
    if (scrollVar > 50 && scrollVar < 300) { 
        document.getElementById('tete').style.backgroundColor = "rgba(34, 34, 34, 0.7)";  
    }else if(scrollVar > 300){
        document.getElementById('tete').style.backgroundColor = "rgba(34, 34, 34, 0.99)"; 
    }else if(scrollVar < 50){
        document.getElementById('tete').style.backgroundColor = "rgba(34, 34, 34, 0)";
    }
 };

document.querySelector('.raccourci').onclick=function(e){
    e.preventDefault();
    document.querySelector('.nav_right').classList.toggle('is_open');
}

function show_info(id){
    var inf = "#info"
    var inf = inf.concat(id)
    if(document.querySelector(inf).style.display == 'flex'){
        document.querySelector(inf).style.display='none';
    }else{
        document.querySelector(inf).style.display='flex';
    }
}

function contact_form(){
    if(prenom.checkValidity() && nom.checkValidity() && email.checkValidity() && plan.checkValidity() && time.checkValidity()){
        alert("Votre réponse a bien été envoyée !");
    }
}
