window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

let boton = document.getElementById("button2");
boton.addEventListener("click",(e)=>{
	alert("Your second function!");
})
