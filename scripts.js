alert('Hello, sou uma rocha de rocha!');

function touchRock(){
	var userName = prompt('Qual é o seu nome?');

	if(userName){
		alert('Prazer em conhece-lo, ' + userName + '!');
		document.getElementById('rockImg').src = "img/rock_happy.png";
	}

}

