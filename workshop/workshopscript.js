

function Erreur(){
	clearAll();
	verifierInfo();
	verifierAge();
	
}

function clearAll(){
	document.getElementById('erreurNom').innerHTML = '<div id="erreurNom" class="wrong"></div>';
	document.getElementById('erreurPrenom').innerHTML = '<div id="erreurPrenom" class="wrong"></div>';
	document.getElementById('erreurAge').innerHTML = '<div id="erreurAge" class="wrong"></div>';
	



	}
function verifierInfo(){
		var temp = document.getElementsByName('nom')[0].value;
		if(temp.length < 2){
			document.getElementById('erreurNom').innerHTML = '<div id="erreurNom"  class="wrong"> Un nom doit contenir au moin 2 caractères</div>';
		}

	    temp = document.getElementsByName('prenom')[0].value;
		if(temp.length < 2){
			document.getElementById('erreurPrenom').innerHTML = '<div id="erreurPrenom" class="wrong"> Un prenom doit contenir au moin 2 caractères</div>';
		}
		
		
}


function verifierAge(){
	var temp = document.getElementsByName('age')[0].value;
		if(temp < 5 || temp > 100){
			document.getElementById('erreurAge').innerHTML = '<div id="erreurAge" class="wrong"> vous avez '+temp+' ans ? </div>';
		}
}
		


		
