"use strict"; 

const lengthSlider = document.querySelector(".pass-length input"),
		generateBtn = document.querySelector(".generate-btn");

const generatePassword = () => {
	
};

const updateSlider = () => {
	//passing slider value as counter text
	document.querySelector(".pass-length span").innerHTML = lengthSlider.value;
};

updateSlider();

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);