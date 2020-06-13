function ecrire_avis(){
    var prenom = document.getElementById("prenom");
    var planete = document.getElementById("planete");
    var titre_avis = document.getElementById("titre_avis");
    var avis = document.getElementById("msg_avis");
        
    if(prenom.checkValidity() && planete.checkValidity() && avis.checkValidity()){

        var today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth()+1).padStart(2, '0');
        let year = String(today.getFullYear()).padStart(2, '0');
    
        var ajd = day + '/' + month + '/' + year;

        today = today.value;
        prenom = prenom.value;
        planete = planete.value;
        titre_avis = titre_avis.value;
        avis = avis.value;
        if( titre_avis === ''){
            titre_avis = "";
        }

        var new_avis = document.createElement("div");
        new_avis.className = "avis";

        var titre = document.createElement("h4");
        titre.className = "titre_avis";
        titre.innerHTML = titre_avis;

        var texte = document.createElement("p");
        texte.className = "text_avis";
        texte.innerHTML = avis;

        var planet = document.createElement("p");
        planet.className = "planete";
        planet.innerHTML = planete;

        var date_container = document.createElement("p");
        date_container.className = "date_avis";
        date_container.innerHTML = ajd;

        var signature = document.createElement("p");
        signature.className = "signe";
        signature.innerHTML = prenom;

        new_avis.appendChild(titre);
        new_avis.appendChild(texte);
        new_avis.appendChild(planet);
        new_avis.appendChild(date_container);
        new_avis.appendChild(signature);

        document.getElementById("avis_list").appendChild(new_avis);

    }
}

document.getElementById('avis_btn').onclick = ecrire_avis;