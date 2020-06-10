var rellax = new Rellax('.rellax', {center: true});

window.onscroll = function () {
    var scrollVar = document.documentElement.scrollTop;
    this.console.log(scrollVar);
    if(document.querySelector('#but1') != null || document.querySelector('#but2') != null || document.querySelector('#but3') != null){
        if (scrollVar >= 100 && scrollVar <= 200) {
            document.querySelector('#but1').style.backgroundPosition="-25%";
        }else if (scrollVar > 200 && scrollVar <= 300) {
            document.querySelector('#but1').style.backgroundPosition="-50%";
        }else if (scrollVar > 300 && scrollVar <= 400) {
            document.querySelector('#but1').style.backgroundPosition="-75%";
        }else if(scrollVar > 400){
            document.querySelector('#but1').style.backgroundPosition="-100%";
        }
        if (scrollVar >= 625 && scrollVar <= 725) {
            document.querySelector('#but2').style.backgroundPosition="+25%";
        }else if (scrollVar > 725 && scrollVar <= 825) {
            document.querySelector('#but2').style.backgroundPosition="+50%";
        }else if (scrollVar > 825 && scrollVar <= 925) {
            document.querySelector('#but2').style.backgroundPosition="+75%";
        }else if(scrollVar > 925){
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
    if(document.querySelector(inf).style.display == 'inline-block'){
        document.querySelector(inf).style.display='none';
    }else{
        document.querySelector(inf).style.display='inline-block';
    }
}

function contact_form(){
    alert("Votre réponse a bien été envoyée !");
}

function resultat(){
    console.log("HEREEE");
    var prix_plan = 0;
    var prix_enfants = 10;
    var prix_ados = 12;
    var prix_adultes = 15;
    var prix_mercure = 840;
    var prix_venus = 810;
    var prix_lune = 540;
    var prix_mars = 750;
    var prix_jupiter = 820;
    var prix_saturne = 970;
    var prix_uranus = 905;
    var prix_neptune = 865;
    var classAttr = "class";
    var prenom = document.getElementById("prenom");
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var plan = document.getElementById("planete");
    var time = document.getElementById("time");
    var nombre_enfants = document.getElementById("nombre_enfants").value;
    var nombre_ados = document.getElementById("nombre_ados").value;
    var nombre_adultes = document.getElementById("nombre_adultes").value;
    if(prenom.checkValidity() && nom.checkValidity() && email.checkValidity() && plan.checkValidity() && time.checkValidity()){
        prenom = prenom.value;
        nom = nom.value;
        email = email.value;
        plan = plan.value;
        time = time.value;
        if(nombre_enfants === ""){
            nombre_enfants = 0;
        }
        if(nombre_ados === ""){
            nombre_ados = 0;
        }
        if(nombre_adultes === ""){
            nombre_adultes = 0;
        } 
        var prix_time = (time-2)*prix_enfants*nombre_enfants + (time-2)*prix_ados*nombre_ados + (time-2)*prix_adultes*nombre_adultes;
        if(plan == "Mercure"){
            prix_plan = prix_mercure;
            var prix_total = prix_mercure + (time-2)*prix_enfants*nombre_enfants + (time-2)*prix_ados*nombre_ados + (time-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Venus"){
            prix_plan = prix_venus;
            var prix_total = prix_venus + (time-2)*prix_enfants*nombre_enfants + (time-2)*prix_ados*nombre_ados + (time-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Lune"){
            prix_plan = prix_lune;
            var prix_total = prix_lune + (time-2)*prix_enfants*nombre_enfants + (time-2)*prix_ados*nombre_ados + (time-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Jupiter"){
            prix_plan = prix_jupiter;
            var prix_total = prix_jupiter + (time-2)*prix_enfants*nombre_enfants + (time-2)*prix_ados*nombre_ados + (time-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Saturne"){
            prix_plan = prix_saturne;
            var prix_total = prix_saturne + (time-2)*prix_enfants*nombre_enfants + (time-2)*prix_ados*nombre_ados + (time-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Uranus"){
            prix_plan = prix_uranus;
            var prix_total = prix_uranus + (time-2)*prix_enfants*nombre_enfants + (time-2)*prix_ados*nombre_ados + (time-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Neptune"){
            prix_plan = prix_neptune;
            var prix_total = prix_neptune + (time-2)*prix_enfants*nombre_enfants + (time-2)*prix_ados*nombre_ados + (time-2)*prix_adultes*nombre_adultes;
        }
        
        var result = '<div class="duo"><h2>'+plan+'</h2><div '+classAttr+'="image_p"><img src="photo/'+plan+'.png" alt="'+plan+' png" width="200" height="200"></div></div>';
        result = result + '<div class="duo_table"><div class="modal"><li>Prix d\'un enfant par jour : 10 millions d\'euros</li><li>Prix d\'un adolescent par jour : 12 millions d\'euros</li><li>Prix d\'un adulte par jour : 15 millions d\'euros</li><li>Prix de base pour trois jour : '+prix_plan+' millions d\'euros</li></div><table class="table_result"><tr><td>Type</td><td>Nombre</td><td>Prix en millions d\'euros</td></tr><tr><td>Moins de 12ans</td><td>'+nombre_enfants+'</td><td>'+prix_enfants*nombre_enfants+'</td></tr><tr><td>12-20ans</td><td>'+nombre_ados+'</td><td>'+prix_ados*nombre_ados+'</td></tr><tr><td>Plus de 20ans</td><td>'+nombre_adultes+'</td><td>'+prix_adultes*nombre_adultes+'</td></tr><tr><td>Durée</td><td>'+time+'</td><td>'+prix_time+'</td></tr><tr><td>Total</td><td> </td><td>'+prix_total+'</td></tr></table></div>'
        console.log(result);
        document.getElementById("resultat").innerHTML = result;
    }
}
document.getElementById('add').onclick = resultat;