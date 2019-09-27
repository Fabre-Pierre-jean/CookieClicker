var affichage = document.getElementById("affichage");
var btn = document.getElementById("bouton");
var score = 0;
var multipli = document.getElementById("multiplicateur");
var compteur = 1;
var prix = 50;
var prixBoost = 200;
var auto2 = document.getElementById("auto")

function afficherScore(){
    affichage.innerHTML=score;
}

function clique(){
    score=score+compteur; 
    afficherScore();
}

function autoclique(){
    score++;
    afficherScore();
}

function autoBoost(){
    if (score>=prixBoost){
        setInterval("autoclique()",1000); 
        score = score - prixBoost;
        prixBoost=prixBoost*2
        auto2.innerHTML=("Achete Moi, je clique pour toi pour " + prixBoost + " crédits")
    }
    else{
        alert("Tricheur!! J'ai dis qu'il te fallait " + prixBoost + " crédits!!!");
    }

}



function incrementer(){
    if(score<prix){
        alert("Tricheur!! J'ai dis qu'il te fallait " + prix + " crédits!!!");
    }else{
        compteur++;
        score = score - prix;
        prix=prix*2
        afficherScore()
        multipli.innerHTML=("Multiplie * " + (compteur+1) + " te coutera : " + prix + " crédits")
    }
}

