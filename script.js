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
	setColorPickerEventListeners(colorBox,rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, pickerElements) {

	for(let i = 0; i < pickerElements.length; i++) {
		pickerElements[i].addEventListener('change', () => {
			setBoxRGBColor(colorBox, rgb.red.value, rgb.blue.value, rgb.green.value);
		});
	}


// 	rgb.red.addEventListener('change', () => {
// 		console.log("red value: ", rgb.red.value);
// 		setBoxRGBColor(colorBox, rgb.red.value, rgb.blue.value, rgb.green.value);
// 	});
// 	rgb.green.addEventListener('change', () => {
// 		console.log("red value: ", rgb.green.value);
// 		setBoxRGBColor(colorBox, rgb.red.value, rgb.blue.value, rgb.green.value);
// 	});
// 	rgb.blue.addEventListener('change', () => {
// 		console.log("red value: ", rgb.blue.value);
// 		setBoxRGBColor(colorBox, rgb.red.value, rgb.blue.value, rgb.green.value);
// 	});
// }

	function setBoxRGBColor(colorBox, red, blue, green) {
		rgbVal = [red, blue, green].join(',');
		colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
	}
}