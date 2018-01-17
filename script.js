window.onload = function() {
	initColorPicker();
}

function initColorPicker() {
	let colorBox = document.getElementById("color-box")
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
	let pickerLen = pickerElements.length;
	for(let i = 0; i < pickerLen; i++) {
		pickerElements[i].addEventListener('change', () => {
			let red = rgb.red.value;
			let green = rgb.blue.value;
			let blue = rgb.green.value;
			setBoxRGBColor(colorBox, red, green, blue);
		});
	}
}

function setBoxRGBColor(colorBox, red, blue, green) {
	rgbVal = [red, blue, green].join(',');
	colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
	setDisplayValues(red, green, blue);
}

function setDisplayValues(red, green, blue) {
	let redVal = document.getElementById(redVal);
	let greenVal = document.getElementById(greenVal);
	let blueVal = document.getElementById(blueVal);
	redVal.innerText = red;
	greenVal.innerText = green;
	blueVal.innerText = blue;

}