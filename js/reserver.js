function resultat(){
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
    var prenom = document.getElementById("prenom");
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var plan = document.getElementById("planete");
    var nombre_enfants = document.getElementById("nombre_enfants").value;
    var nombre_ados = document.getElementById("nombre_ados").value;
    var nombre_adultes = document.getElementById("nombre_adultes").value;

    var date1 = document.getElementById('depart').value;
    console.log(typeof(date1));
    var date1_d = new Date(date1)
    var date2 = document.getElementById('retour').value;
    var date2_d = new Date(date2)
    console.log("Type : ", date2_d);
    var diff = date2_d.getTime() - date1_d.getTime();
    var delta_day = diff / (1000*3600*24);

    if(prenom.checkValidity() && nom.checkValidity() && email.checkValidity() && plan.checkValidity()){
        prenom = prenom.value;
        nom = nom.value;
        email = email.value;
        plan = plan.value;
        if(nombre_enfants === ""){
            nombre_enfants = 0;
        }
        if(nombre_ados === ""){
            nombre_ados = 0;
        }
        if(nombre_adultes === ""){
            nombre_adultes = 0;
        } 
        var prix_time = (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        if(plan == "Mercure"){
            prix_plan = prix_mercure;
            var prix_total = prix_mercure + (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Venus"){
            prix_plan = prix_venus;
            var prix_total = prix_venus + (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Lune"){
            prix_plan = prix_lune;
            var prix_total = prix_lune + (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Mars"){
            prix_plan = prix_mars;
            var prix_total = prix_mars + (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Jupiter"){
            prix_plan = prix_jupiter;
            var prix_total = prix_jupiter + (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Saturne"){
            prix_plan = prix_saturne;
            var prix_total = prix_saturne + (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Uranus"){
            prix_plan = prix_uranus;
            var prix_total = prix_uranus + (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        }else if(plan == "Neptune"){
            prix_plan = prix_neptune;
            var prix_total = prix_neptune + (delta_day-2)*prix_enfants*nombre_enfants + (delta_day-2)*prix_ados*nombre_ados + (delta_day-2)*prix_adultes*nombre_adultes;
        }
        
        var result ='<div class="resultat r_'+plan+'"><div class="duo"><h2>'+plan+'</h2><div class="image_p"><img src="style/photo/'+plan+'.png" alt="'+plan+' png" width="200" height="200"></div></div><div class="duo_table"><div class="modal"><li>Prix d\'un enfant par jour : 10 millions d\'euros</li><li>Prix d\'un adolescent par jour : 12 millions d\'euros</li><li>Prix d\'un adulte par jour : 15 millions d\'euros</li><li>Prix de base pour trois jour : '+prix_plan+' millions d\'euros</li></div><table class="table_result"><tr><td>Type</td><td>Nombre</td><td>Prix en millions d\'euros</td></tr><tr><td>Moins de 12ans</td><td>'+nombre_enfants+'</td><td>'+prix_enfants*nombre_enfants+'</td></tr><tr><td>12-20ans</td><td>'+nombre_ados+'</td><td>'+prix_ados*nombre_ados+'</td></tr><tr><td>Plus de 20ans</td><td>'+nombre_adultes+'</td><td>'+prix_adultes*nombre_adultes+'</td></tr><tr><td>Durée</td><td>'+delta_day+'</td><td>'+prix_time+'</td></tr><tr><td>Total</td><td> </td><td>'+prix_total+'</td></tr></table><div class="modal"><li>Le transport n\'est pas inclus</li></div></div><div class="duo"><h1>Durée du séjour : </h1><p class="durée">'+delta_day+' jours</p><h1>Prix total : </h1><p class="prix">'+prix_total+' millions d\'euros</p></div><div class="reserve"><button type="button" id="reserve_button" class="r_form_button popup cent" onclick="popFonction()">Reserver<span class="popuptext" id="myPopup">On va pas aller plus loin et vous demander un virement de '+prix_total+' millions d\'euros, ça reste un petit projet et en plus on n\'a pas encore acheté le système solaire.</span></button></div></div>';

        document.getElementById("content_resultat").innerHTML = result;
    }
}

document.getElementById('add').onclick = resultat;

function popFonction(){
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
}

