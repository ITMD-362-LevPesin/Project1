var js_avaliable = document.getElementsByTagName('html')[0];
var form = document.getElementById("sign_form");

function myFunction() {
	const username = document.getElementById("username").value;
	let message = "Thank you, " + username + ". You will receive the newsletter soon. Up the toffees!";
	alert(message);
}

form.addEventListener("submit", clickbutton);
