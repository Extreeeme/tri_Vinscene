var liste=[[1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],[4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],[7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],[10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],[13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],[16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],[19,"MINARD Anne laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],[22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],[25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],[28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],[31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],[34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],[37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],[40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],[43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],[46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],[49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],[52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],[55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],[58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],[61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],[64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],[67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]];
var liste2 = [[70,"MOSNIER Bernard",55],[71,"BERGERET Lise",8],[72,"BERGERET Christophe",7],[73,"LEFEBVRE Michel",91],[74,"FLEURY Stephanie",15],[75,"AUBARD Nicolas",74],[76,"VALLEE Nelly",45],[77,"BERNABEU Julien",73],[78,"DUPRé Alain",78],[79,"SALIGNAT Jean-claude",4],[80,"VOLAT Marc",21],[81,"BENIGAUD Sylviane",18],[82,"LEPAIN Laurent",22]]

document.getElementById("reset").onclick = function(){	//Fonction pour le bouton reset
	document.getElementById('numArrivee').innerHTML = ""; //Réinisitalise les listes
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";
}

document.getElementById('tri_arrivee').onclick = function(){//Fonction qui tri par numéro d'arrivée

	document.getElementById('numArrivee').innerHTML = ""; //Réinisitalise les listes
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";

	var arrivee = new Array;		//Création du tableau qui sera trié
	var liste_copie = liste.concat(liste2);	//Concaténation des deux listes
	var indicePetit;

	while(liste_copie.length != 0){			//Tant que la liste n'est pas vide
		var minArrivee = liste_copie[0][0];	//Initialisaiton des variables 
		var minNom = liste_copie[0][1];
		var minBrassard = liste_copie[0][2];
		for(var i = 0; i<liste_copie.length; i++){ //Boucle qui parcours la liste
			if(minArrivee >= liste_copie[i][0]){ // Trouve le minimum
				minArrivee = liste_copie[i][0]; //Si trouvé change les variables
				minNom = liste_copie[i][1];
				minBrassard = liste_copie[i][2];
				indicePetit = i;
			}
		}
		arrivee.push([minArrivee, minNom, minBrassard]); //Push le tout dans le nouveau tableau
		liste_copie.splice(indicePetit,1); //Retire la ligne du tableau
	}

	for(var k=0; k<arrivee.length; k++){ //Ecris le tableau sur la page HTML
		document.getElementById('numArrivee').innerHTML += "<li>"+arrivee[k][0]+"</li>";
		document.getElementById('nom').innerHTML += "<li>"+arrivee[k][1]+"</li>";
		document.getElementById('brassard').innerHTML += "<li>"+arrivee[k][2]+"</li>";
	}	
}

document.getElementById('tri_brassard').onclick = function(){

	document.getElementById('numArrivee').innerHTML = "";
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";

	var arrivee2 = new Array;
	var liste_copie = liste.concat(liste2);
	var indicePetit;

	while(liste_copie.length != 0){

		var minArrivee = liste_copie[0][0];
		var minNom = liste_copie[0][1];
		var minBrassard = liste_copie[0][2];
		for(var i = 0; i<liste_copie.length; i++){
			if(minBrassard >= liste_copie[i][2]){
				minArrivee = liste_copie[i][0];
				minNom = liste_copie[i][1];
				minBrassard = liste_copie[i][2];
				indicePetit = i;
			}
		}
		arrivee2.push([minArrivee, minNom, minBrassard]);
		liste_copie.splice(indicePetit, 1);
	}

	for(var k=0; k<arrivee2.length; k++){
		document.getElementById('numArrivee').innerHTML += "<li>"+arrivee2[k][0]+"</li>";
		document.getElementById('nom').innerHTML += "<li>"+arrivee2[k][1]+"</li>";
		document.getElementById('brassard').innerHTML += "<li>"+arrivee2[k][2]+"</li>";
	}
}

document.getElementById('tri_nom').onclick = function(){

	document.getElementById('numArrivee').innerHTML = "";
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";

	var arrivee2 = new Array;
	var liste_copie = liste.concat(liste2);
	var indicePetit;
	var nom_prenom;
	var nom_prenom_test;
	var nom;

	while(liste_copie.length != 0){

		var minArrivee = liste_copie[0][0];
		var minNom = liste_copie[0][1];
		var minBrassard = liste_copie[0][2];
		nom_prenom = liste_copie[0][1].split(' ');
		for(var i = 0; i<liste_copie.length; i++){
			nom_prenom_test = liste_copie[i][1].split(' ');
			if(nom_prenom[0] >= nom_prenom_test[0]){
				minArrivee = liste_copie[i][0];
				minNom = liste_copie[i][1];
				minBrassard = liste_copie[i][2];
				nom_prenom = nom_prenom_test;
				indicePetit = i;
			}
		}
		arrivee2.push([minArrivee, minNom, minBrassard]);
		liste_copie.splice(indicePetit, 1);
	}

	for(var k=0; k<arrivee2.length; k++){
		document.getElementById('numArrivee').innerHTML += "<li>"+arrivee2[k][0]+"</li>";
		document.getElementById('nom').innerHTML += "<li>"+arrivee2[k][1]+"</li>";
		document.getElementById('brassard').innerHTML += "<li>"+arrivee2[k][2]+"</li>";
	}
}

document.getElementById('tri_prenom').onclick = function(){

	document.getElementById('numArrivee').innerHTML = "";
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";

	var arrivee2 = new Array;
	var liste_copie = liste.concat(liste2);
	var indicePetit;
	var nom_prenom;
	var nom_prenom_test;
	var nom;

	while(liste_copie.length != 0){

		var minArrivee = liste_copie[0][0];
		var minNom = liste_copie[0][1];
		var minBrassard = liste_copie[0][2];
		nom_prenom = liste_copie[0][1].split(' ');
		for(var i = 0; i<liste_copie.length; i++){
			nom_prenom_test = liste_copie[i][1].split(' ');
			if(nom_prenom[1] >= nom_prenom_test[1]){
				minArrivee = liste_copie[i][0];
				minNom = liste_copie[i][1];
				minBrassard = liste_copie[i][2];
				nom_prenom = nom_prenom_test;
				indicePetit = i;
			}
		}
		arrivee2.push([minArrivee, minNom, minBrassard]);
		liste_copie.splice(indicePetit, 1);
	}

	for(var k=0; k<arrivee2.length; k++){
		document.getElementById('numArrivee').innerHTML += "<li>"+arrivee2[k][0]+"</li>";
		document.getElementById('nom').innerHTML += "<li>"+arrivee2[k][1]+"</li>";
		document.getElementById('brassard').innerHTML += "<li>"+arrivee2[k][2]+"</li>";
	}
}

document.getElementById('usr_cherche').onclick = function(){
	document.getElementById('numArrivee').innerHTML = "";
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";

	var nom = document.getElementById("usr").value.toUpperCase(); 
	var nom_prenom_test;
	var arrivee2 = new Array;
	var liste_copie = liste.concat(liste2);
	for(var i = 0; i<liste_copie.length; i++){
		nom_prenom_test = liste_copie[i][1].split(' ');
		if(nom_prenom_test[0].toUpperCase() == nom){
			document.getElementById('numArrivee').innerHTML += "<li>"+liste_copie[i][0]+"</li>";
			document.getElementById('nom').innerHTML += "<li>"+liste_copie[i][1]+"</li>";
			document.getElementById('brassard').innerHTML += "<li>"+liste_copie[i][2]+"</li>";
		}

	}
}

document.getElementById('prenom_cherche').onclick = function(){
	document.getElementById('numArrivee').innerHTML = "";
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";

	var prenom = document.getElementById("usr").value.toUpperCase(); 
	var nom_prenom_test;
	var arrivee2 = new Array;
	var liste_copie = liste.concat(liste2);
	for(var i = 0; i<liste_copie.length; i++){
		nom_prenom_test = liste_copie[i][1].split(' ');
		if(nom_prenom_test[1].toUpperCase() == prenom){
			document.getElementById('numArrivee').innerHTML += "<li>"+liste_copie[i][0]+"</li>";
			document.getElementById('nom').innerHTML += "<li>"+liste_copie[i][1]+"</li>";
			document.getElementById('brassard').innerHTML += "<li>"+liste_copie[i][2]+"</li>";
		}

	}
}


document.getElementById('dossier_cherche').onclick = function(){
	document.getElementById('numArrivee').innerHTML = "";
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";
	
	var dossier = document.getElementById("usr").value; 
	var dossier_test;
	var arrivee2 = new Array;
	var liste_copie = liste.concat(liste2);
	for(var i = 0; i<liste_copie.length; i++){
		dossier_test = liste_copie[i][2];
		if(dossier_test== dossier){
			document.getElementById('numArrivee').innerHTML += "<li>"+liste_copie[i][0]+"</li>";
			document.getElementById('nom').innerHTML += "<li>"+liste_copie[i][1]+"</li>";
			document.getElementById('brassard').innerHTML += "<li>"+liste_copie[i][2]+"</li>";
		}

	}
}

document.getElementById('arrivee_cherche').onclick = function(){
	document.getElementById('numArrivee').innerHTML = "";
	document.getElementById('nom').innerHTML = "";
	document.getElementById('brassard').innerHTML = "";
	
	var arrivee = document.getElementById("usr").value; 
	var arrivee_test;
	var arrivee2 = new Array;
	var liste_copie = liste.concat(liste2);
	for(var i = 0; i<liste_copie.length; i++){
		arrivee_test = liste_copie[i][0];
		if(arrivee_test== arrivee){
			document.getElementById('numArrivee').innerHTML += "<li>"+liste_copie[i][0]+"</li>";
			document.getElementById('nom').innerHTML += "<li>"+liste_copie[i][1]+"</li>";
			document.getElementById('brassard').innerHTML += "<li>"+liste_copie[i][2]+"</li>";
		}

	}
}