$choix = document.getElementById("choix");
$bouton = document.getElementById("bouton");
$resultat= document.getElementById("resultat");
$newgame= document.getElementById("newgame");
$compte= document.getElementById("compte");

$essai= document.getElementById("essai");
$petit= document.getElementById("petit");
$grand= document.getElementById("grand");
$debut= document.getElementById("debut");
$cpt= document.getElementById("cpt");

nbr=0;
compteur=0;
$compte.innerHTML = "Nombre d'essais : " + compteur;
meilleur=1000;
//TROUVER LE BON NOMBRE
function nbrSecret(){
nbr = (Math.round(Math.random() * 100));
/*console.log (nbr);*/
compteur=0;
$resultat.innerHTML = "Bonne chance!";
$compte.innerHTML = "Nombre d'essais : " + compteur;
}
nbrSecret();

function nbraTrouver() {

	if (nbr > choix.value && nbr !== choix.value){
		$resultat.innerHTML = "plus !";
	compteur++;
	}else if (nbr < choix.value && nbr !== choix.value){
		$resultat.innerHTML = "moins !";
	compteur++;
	}else{
	$resultat.innerHTML = "GAGNE !";
}
}
function clic() {
	nbraTrouver();
	$compte.innerHTML = "Nombre d'essais : " + compteur;
}
function mouseDown() {
   $('#resultat').animate({
            paddingLeft: '100px',
            opacity: '0',
			fontSize: '10px'
});
}
function mouseUp() {
     $('#resultat').animate({
            paddingLeft: '0px',
            opacity: '1',
			fontSize: '40px'
});
}

$bouton.onclick = clic;
$newgame.onclick = nbrSecret;
////////////////////////FIN////////////////////

//A MON TOUR

nbrmini=1;
nbrmaxi=100;
nombre=50;
cpt=0;
$cpt.innerHTML = "Nombre d'essais : " + cpt;
function tropPetit(){//POUR OBTENIR NOMBRE PLUS GRAND
if (nbrmaxi == nbrmini || nombre == nbrmaxi){
	essai.style.color = "yellow";
}else{
	nbrmini = nombre+1;
	nombre = (Math.round ((nombre + nbrmaxi)/2));
	cpt++;
	$essai.innerHTML = nombre;
	$cpt.innerHTML = "Nombre d'essais : " + cpt;
}
}
function tropGrand(){//POUR OBTENIR NOMBRE PLUS PETIT
if (/*nbrmaxi == nbrmini ||*/ nombre == nbrmini){
	essai.style.color = "yellow";
}else{
	nbrmaxi = nombre-1;
	nombre = (nombre-(Math.round ((nombre-nbrmini)/2)));
	cpt++;
	$essai.innerHTML = nombre;
	$cpt.innerHTML = "Nombre d'essais : " + cpt;
}
}
function letsgo(){
	$essai.innerHTML = 50;
	nbrmini=1;
	nbrmaxi=100;
	nombre=50;
	essai.style.color = "black";
	$cpt.innerHTML = "Nombre d'essais : " + cpt;
	cpt=1;

}

$debut.onclick = letsgo;
$petit.onclick = tropPetit;
$grand.onclick = tropGrand;