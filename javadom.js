const button = document.querySelector("#button");
const emailInput = document.querySelector(".password-input");
const formContainer = document.querySelector(".form-container");
const login = document.querySelector("#login")


console.log('Hello World')

// emailInput.addEventListener("keydown", emailChange);

// function emailChange(e) {
// 	console.log(e.target.value);
// }


// button.addEventListener("click", (e) => {
// 	e.preventDefault ();
// 	let value = e;
// 	console.log(value);
// 	// console.log("Hello World");
// 	// alert ("Welcome Back");
// 	emailInput.style.backgroundColor = "red"
// 	formContainer.style.backgroundColor = "brown"
// })

button.addEventListener("mouseover", (e) => {
	e.preventDefault();
	console.log("Hello World")
	alert("Welcome Back");
	emailInput.style.backgroundColor = "red"
	formContainer.style.backgroundColor = "brown"

	formContainer.innerHTML = "<h1>Register</h1>"
	login.innerHTML = "<h1> login</h1>"
	login.style.display = "block"
	login.style.fontSize = "15px";
	login.style.color = "blueviolet"
});