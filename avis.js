function ecrire_avis(){
    var today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth()+1).padStart(2, '0');
    let year = String(today.getFullYear()).padStart(2, '0');

    var ajd = day + '/' + month + '/' + year;
    var prenom = document.getElementById("prenom");
    var planete = document.getElementById("planete");
    var titre_avis = document.getElementById("titre_avis");
    var avis = document.getElementById("msg_avis");

    console.log(ajd);
    if(prenom.checkValidity() && planete.checkValidity() && avis.checkValidity()){
        today = today.value;
        prenom = prenom.value;
        planete = planete.value;
        titre_avis = titre_avis.value;
        avis = avis.value;
        if( titre_avis === ''){
            titre_avis = "";
        }
    }
}
document.getElementById('avis_btn').onclick = ecrire_avis;