document.getElementById('form').addEventListener('submit', function(e) {
	e.preventDefault();
	var code = document.querySelector(".code")
	var den = document.querySelector(".denied")
	var acc = document.querySelector(".accept")
	if (code.value == "") {
		alert("veuillez remplire le champ : code")
	} else {
		if (code.value == "mdp"){
			console.log(code.value);
			acc.style.opacity = 1;
		} else
			den.style.opacity = 1;
			setTimeout(function(e) {acc.style.opacity = 0; den.style.opacity = 0}, 10000);
	}
});