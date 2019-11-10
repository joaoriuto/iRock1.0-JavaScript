var userName;

function greetUser(){
	userName = readCookie("irock_username");
	
	if (userName){
		alert("Olá, " + userName + " senti sua falta!");
	}
	else{
		alert("Olá, eu sou a rocha de rocha, eh noix! (y)");
	}
}

function touchRock(){
	if (userName){
		alert("Eu gosto de atenção, " + userName + ". Thanks!");
	}else{
		userName = prompt("Qual é o seu nome?");
		if(userName){
			alert("Que bom conhece-lo, " + userName + "!");
			writeCookie("irock_username", userName, 5);
		}
	}	
		document.getElementById('rockImg').src = "img/rock_happy.png";
		setTimeout("document.getElementById('rockImg').src = 'img/rock.png';", 1000);
	}

function resizeRock(){
	document.getElementById('rockImg').style.height = (document.body.clientHeight - 100) * 0.9;
}

