//episode1 verifi orthograph d'une adresse e-mail 

let email=prompt("Renseigrez votre adresse e-mail");
let reg1 =/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
	
function adresse(){
	if (reg1.test(email)){
		alert("Adresse e-mail valide!");
	}
	else{
		alert("Adresse e-mail invalide!");
	}
}
adresse();

/*episode2 verifi un mot de passe ayant
-8caracteres minimun,
-1 majuscule,
-1ou+ chiffreS
*/
let mot_passe=prompt("Entrez votre mot de passe.");
let reg2=/^([a-z]){6,}\d([A-Z]){1}$/;

function motpasse(){
	if (reg2.test(mot_passe)){ 
	alert("Mot de passE valide ");
}

else{
	alert("Mot de passE invalide");
}
}
motpasse();

//episode5 
function civilite() {
	let identité = [   
     nom=prompt("Quel est votre nom? ") ,
     prenom=prompt("Quel est votre prenom? ") ,
     sexe=prompt("Quel est votre sexe homme ou femme ? ") ,
 ];

reg5=/^[a-z]\D+$/i;//tout les alphanumeriques sauf les nombres
reg51=/^femme$/i;
reg52=/^homme$/i;
if (reg51.test(sexe)&& reg5.test(prenom+nom)) {
	console.log("Mme "+ identité);
}
else if (reg52.test(sexe) && reg5.test(prenom+nom)) {
	console.log("M " + identité);

}
else{ 
	console.log("Renseigrez correctement votre sexe homme ou femme;votre nom  et prenom ne doivent pas contenir des nonbres");
} 
}
civilite();

//episode7
function moyenne(plagenote=[0,]){
 let note1=parseInt(prompt("Entrez la note1"));
 let note2=parseInt(prompt("Entrez la note1"));
 let somme;

for(i=0; i<20; i++) { 
	plagenote.push(i+1);//remplissage tableu de 1 à 20
              
}
console.log(plagenote);
if (plagenote.includes(note1) && plagenote.includes(note2)){//vérication de la presence des note entrez dans le tableau
	somme=(note2+note1)/2;
	alert(somme);

}
}
 moyenne(plagenote=[0,]);



//episode9 table de multiplication

nombre=parseInt(prompt("Entrez le numero de la table"));
var i;
for(i=1;i<=10;i++){
	console.log(nombre+"x"+i+"=" +nombre*i);
}
//episode 10 virifiction d'un nombre impaire ou paire,

nombr=parseInt(prompt("Entrez un nombre"));
if(nombr%2==1){
	alert("Impaire");
	}
	 else {
	alert("Paire");

}
alert("AVANT QUE LE CODE SOIT JE SUIS.");