$pierre = document.getElementById("pierre");
$feuille = document.getElementById("feuille");
$ciseaux = document.getElementById("ciseaux");
$pierreO = document.getElementById("pierreO");
$feuilleO = document.getElementById("feuilleO");
$ciseauxO = document.getElementById("ciseauxO");
$resultat = document.getElementById("resultat");
$stat = document.getElementById("stat");
$stat2 = document.getElementById("stat2");
$stat3 = document.getElementById("stat3");
$stat4 = document.getElementById("stat4");
$stat5 = document.getElementById("stat5")
$statIA = document.getElementById("statIA");
$statIA1 = document.getElementById("statIA1");
$statIA2 = document.getElementById("statIA2");
$statIA3 = document.getElementById("statIA3");
$zero = document.getElementById("zero");


choixOrdi="";
scoreJoueur=0;
scoreIA=0;
pourcentageVictoire=0;
nbrEgalite=0;
pierreIA=0;
feuilleIA=0;
ciseauxIA=0;
pourcentagePierreIA=0;
pourcentageFeuilleIA=0;
pourcentageCiseauxIA=0;
partieJouee=0;

/*REMISE A ZERO*/
function zero(){
scoreJoueur=0;
scoreIA=0;
pourcentageVictoire=0;
nbrEgalite=0;
pierreIA=0;
feuilleIA=0;
ciseauxIA=0;
pourcentagePierreIA=0;
pourcentageFeuilleIA=0;
pourcentageCiseauxIA=0;
partieJouee=0;
$('#resultat').fadeOut("slow");
$resultat.innerHTML = "Réinitialisation OK";
$('#resultat').fadeIn("slow");
$stat.innerHTML = "Pourcentage de victoire : " + pourcentageVictoire + " %";
$stat2.innerHTML = "Nombre de victoires : " + scoreJoueur;
$stat3.innerHTML = "Nombre de defaites : " + scoreIA;
$stat4.innerHTML = "Nombre d'égalités : " + nbrEgalite;
$stat5.innerHTML = "Nombre de parties jouées : " + partieJouee;
$statIA1.innerHTML = "Joue pierre à : " + pourcentagePierreIA + " %";
$statIA2.innerHTML = "Joue feuille à : " + pourcentageFeuilleIA + " %";
$statIA3.innerHTML = "Joue ciseaux à : " + pourcentageCiseauxIA + " %";

}

/*ELEMENTS DEVIENNENT PLUS PETIT QUAND ILS SONT CLIQUES*/

function mouseUp() {
	pierre.style.height = "150px";
	mouseU();
}
function mouseDown() {
    pierre.style.height = "145px";
	mouseD();
}
function mouseUp1() {
	feuille.style.height = "150px";
	mouseU();
}
function mouseDown1() {
	feuille.style.height = "145px";
	mouseD();
}
function mouseUp2() {
	ciseaux.style.height = "150px";
	mouseU();
}
function mouseDown2() {
	ciseaux.style.height = "145px";
	mouseD();
}
/*CHOIX DE L'IA ET AFFICHAGE DU SYMBOLE*/
function IA(){
	hazard= Math.round(Math.random() * 100);
	if (hazard <=34){
		choixOrdi = "PIERRE";
		ciseauxO.style.display = "none";
		feuilleO.style.display = "none";
		pierreO.style.display = "inline";
		pierreIA= pierreIA + 1;
	}
	else if (hazard >34 && hazard <=67){
		choixOrdi = "FEUILLE";
		ciseauxO.style.display = "none";
		pierreO.style.display = "none";
		feuilleO.style.display = "inline";
		feuilleIA= feuilleIA+1;
	}else{
		choixOrdi = "CISEAUX";
		pierreO.style.display = "none";
		feuilleO.style.display = "none";
		ciseauxO.style.display = "inline";
		ciseauxIA=ciseauxIA+1;
	}
	pourcentageHazard();
}
/*DECLARATION DES ELEMENTS GAGNANTS*/
function clickPierre(){
	IA();
	if (choixOrdi == "PIERRE"){
		$resultat.innerHTML = "EGALITE";
		nbrEgalite = nbrEgalite +1;
	}
	else if (choixOrdi == "FEUILLE"){
		$resultat.innerHTML = "PERDU";
		scoreIA = scoreIA +1;
	}
	else {
		$resultat.innerHTML = "GAGNE";
		scoreJoueur= scoreJoueur +1;
	}
	pourcentage();
}
function clickFeuille(){
	IA();
	if (choixOrdi == "FEUILLE"){
		$resultat.innerHTML = "EGALITE";
		nbrEgalite = nbrEgalite +1;
	}
	else if (choixOrdi == "CISEAUX"){
		$resultat.innerHTML = "PERDU";
		scoreIA = scoreIA +1;	
	}
	else {
		$resultat.innerHTML = "GAGNE";
		scoreJoueur= scoreJoueur +1;
	}
	/*affichage();*/
	pourcentage();
}
function clickCiseaux(){
	IA();
	if (choixOrdi == "CISEAUX"){
		$resultat.innerHTML = "EGALITE";
		nbrEgalite = nbrEgalite +1;
	}
	else if (choixOrdi == "PIERRE"){
		$resultat.innerHTML = "PERDU";
		scoreIA = scoreIA +1;
	}
	else {
		$resultat.innerHTML = "GAGNE";
		scoreJoueur= scoreJoueur +1;
	}
	/*affichage();*/
	pourcentage();
}

function mouseD() {
	$('#imageO').animate({
            paddingLeft: '100px',
            opacity: '0',
			fontSize: '10px'
});   

}
function mouseU() {
	$('#imageO').animate({
            paddingLeft: '0px',
            opacity: '1',
			fontSize: '40px'
});
}
/*CALCUL DES STATISTIQUES*/
function pourcentage(){
	pourcentageVictoire = Math.round(100/(scoreJoueur + scoreIA +0.00000001)*scoreJoueur);
	partieJouee = scoreJoueur + scoreIA +nbrEgalite;
	$stat.innerHTML = "Pourcentage de victoire : " + pourcentageVictoire + " %";
	$stat2.innerHTML = "Nombre de victoires : " + scoreJoueur;
	$stat3.innerHTML = "Nombre de defaites : " + scoreIA;
	$stat4.innerHTML = "Nombre d'égalités : " + nbrEgalite;
	$stat5.innerHTML = "Nombre de parties jouées : " + partieJouee;
}
/*CALCUL STAT IA */
function pourcentageHazard(){

	pourcentagePierreIA = Math.round(100/(pierreIA + feuilleIA + ciseauxIA)*pierreIA);
	pourcentageFeuilleIA = Math.round(100/(pierreIA + feuilleIA + ciseauxIA)*feuilleIA);
	pourcentageCiseauxIA = Math.round(100/(pierreIA + feuilleIA + ciseauxIA)*ciseauxIA);
	$statIA1.innerHTML = "Joue pierre à : " + pourcentagePierreIA + " %";
	$statIA2.innerHTML = "Joue feuille à : " + pourcentageFeuilleIA + " %";
	$statIA3.innerHTML = "Joue ciseaux à : " + pourcentageCiseauxIA + " %";
}
$pierre.onclick = clickPierre;
$feuille.onclick = clickFeuille;
$ciseaux.onclick = clickCiseaux;
$zero.onclick = zero;




