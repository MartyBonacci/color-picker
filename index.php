<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>color picker</title>
		<link rel="stylesheet" href="style.css">
		<script src="script.js"></script>
	</head>
	<body>
		<div class="picker-form-container">
			<div class="picker-control">
				<label for="red">red</label>
				<input type="range" id="red" class="picker" min="0" max="255">
				<span id="redVal">0</span>
			</div>
			<div class="picker-control">
				<label for="green">green</label>
				<input type="range" id="green" class="picker" min="0" max="255">
				<span id="greenVal">0</span>
			</div>
			<div class="picker-control">
				<label for="blue">blue</label>
				<input type="range" id="blue" class="picker" min="0" max="255">
				<span id="blueVal">0</span>
			</div>
		</div>
		<div class="color-box-container">
			<div id="color-box">

			</div>

		</div>
	</body>
</html>