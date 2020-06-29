//episode1 verifi l'orthograph d'une adresse e-mail 

let email;
let reg1 =/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
email=prompt("Renseigrez votre adresse e-mail");

if (reg1.test(email)){
	alert("adresse e-mail valide!");
}
else{
	alert("adresse e-mail invalide!");
}


/*episode2 verifi un mot de passe ayant
-8caracteres minimun,
-1 majuscule,
-1ou+ chiffres
*/
let mot_passe;
let reg2=/^([a-z]){6,}\d([A-Z]){1}$/;
mot_passe=prompt("Entrez votre mot de passe.");

if (reg2.test(mot_passe)){ 
	alert("Mot de passe valide ");
}

else {
	alert("Mot de passe invalide.");
}

//episode3: ajouter un (s) en fonction du nombre d'enfant d'un utilisateur

user_name=prompt("Quel est votre nom?");
enfant=prompt("Combien d'enfant avez vous?");
reg3_1=/^[a-z]\D+$/i;


if (reg3_1.test(user_name) && enfant<=99&& enfant>2) {
    alert(user_name + "vous avez " + enfant +"enfant(s).");
} 

else if (reg3_1.test(user_name) && enfant==1) {
    alert(user_name + " vous avez " + enfant + "enfant.");
}
else if (enfant<=0){
	alert(user_name + " vous n'avez pas d'enfant.");
}
else{
	alert("Votre nom doit pas comporter des nombres et le nombre de vos enfants doit etre compris de 0-99");
}

//episode4 programme  contenant des failles

let age=prompt("Quant est tu née?");
let reg4= /d{ 2}\/d{ 2\/d{ 4}g/;
if (reg4.test(age)){ 
	alerte(age);
}

else{
	alert("Renseigrez votre date de naissance au format jj/mm/aaaa .");
}
/*episode5 affectation de la civilité en fonction du sexe à des utilisateur
les infos entrez sont stocquer dans un objet*/

let identité = [   
     nom=prompt("Quel est votre nom? ") ,
     prenom=prompt("Quel est votre prenom? ") ,
     sexe=prompt("Quel est votre sexe homme ou femme ? ") ,
 ];

reg5=/^[a-z]\D+$/i;
reg51=/^femme$/i;
reg52=/^homme$/i;
if (reg51.test(sexe)&& reg5.test(prenom+nom)) {
	console.log("Mme "+ identité);
}
else if (reg52.test(sexe) && reg5.test(prenom+nom)) {
	console.log("M " + identité);

}
else{ 
	console.log("Renseigrez correctement votre sexe homme ou femme;votre nom  et prénom ne doivent pas contenir des nombres");
} 
//episode obtenir le jour de la semaine en fonction d' un numero

let jours = ['dimanche ','lundi ','mardi ','mercredi ','jeudi ','vendredi ','samedi '];
let lejour=prompt("Entrez le numero du jour");
if (lejour==0){ 
	alert(jours[0]);
}
else if(lejour==1){ 
	alert(jours[1]);
}
else if(lejour==2){ 
	alert(jours[2]);
}

else if (lejour==3){ 
	alert(jours[3]);
}

else if (lejour==4){ 
	alert(jours[4]);
}
else if (lejour==5){ 
	alert(jours[5]);
}
else if (lejour==6){ 
	alert(jours[6]);
}
else{ 
alert("Entrez un nombre enter 0 et6");
}
//episode7
 let plagenote=[0,];
 let note1=parseInt(prompt("Entrez la note1"));
 let note2=parseInt(prompt("Entrez la note2"));
 let somme;

for(i=0; i<20; i++) { 
	plagenote.push(i+1);
              
}
console.log(plagenote);
if (plagenote.includes(note1) && plagenote.includes(note2)){
	somme=(note2+note1)/2;
	alert(somme);

}

//episode 9 a suivre!!!!
alert("AVANT QUE LE CODE SOIT JE SUIS.")
