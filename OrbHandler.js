<!DOCTYPE html>
<html style="background:black">
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">

<head>
	<title>Tekuma Web Demo Display</title>
	<link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png">
	<link rel="manifest" href="icon/site_webmanifest">
	<link rel="mask-icon" href="icon/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	<img src="logo.png" alt ="Improving the ways humans interact with technology" style = " width: 40%;"/>
</head>
<body>
	<noscript>browser not supported, please update</noscript>
	<div id="demo" style="visibility: hidden;">
		<div id="conDevice" style="width:100%; visibility: hidden; color:white;font-family: 'Roboto', sans-serif; font-size: 2vw; z-index: 0; position: Absolute ;">Please connect and/or move the controller</div>
		
		<div id="serialCon" style="visibility: hidden; color:black;font-family: 'Roboto', sans-serif; font-size: 4vw; z-index: 3; position: Absolute ;" >
			<button style="color:black;font-family: 'Roboto', sans-serif; font-size: 2vw;" onclick=connectToBall()>
			<div>Click here to connect to device</div>
			</button>
			<div style="color:white ;font-family: 'Roboto', sans-serif; font-size: 1vw;">Due to a known bug with the combination of Windows and Chrome a serial connection needs to be used instead of the HID gamepad library.</div>
			<div style="color:white ;font-family: 'Roboto', sans-serif; font-size: 1vw;"></div>
			<div style="color:white ;font-family: 'Roboto', sans-serif; font-size: 1vw;">
				<div style="display:inline">If this is an issue please use</div> 
				<a style="display:inline" href="https://www.mozilla.org/en-US/firefox/new/" target="_blank"> Firefox </a>
				<div style="display:inline">or another OS such as Linux, Android or OSX.</div>
			</div>
		</div>


		<table id = "displayHorizontal" style="width:100%; visibility: hidden; color:white; font-size: 5vw; z-index: 2; position: Absolute ;">
			<tr>
				<th style="width:33%">
					<div style="display:inline;vertical-align: middle; font-family: 'Roboto';">X : </div>
					<div name="X" style="display:inline; vertical-align: middle; font-family: 'Roboto';">0.0</div>
				</th>

				<th style="width:33%">
					<div style="display:inline;vertical-align: middle; font-family: 'Roboto';">Y : </div>
					<div name="Y" style="display:inline; vertical-align: middle; font-family: 'Roboto';">0.0</div>
				</th>

				<th style="width:33%">
					<div style="display:inline;vertical-align: middle; font-family: 'Roboto';">Z : </div>
					<div name="Z" style="display:inline; vertical-align: middle; font-family: 'Roboto';">0.0</div>
				</th>
				</th>
			</tr>
			<tr>
				<th style="width:33%">
					<div style="display:inline;vertical-align: middle; font-family: 'Roboto';">RX : </div>
					<div name="RX" style="display:inline; vertical-align: middle; font-family: 'Roboto';">0.0</div>
				</th>

				<th style="width:33%">
					<div style="display:inline;vertical-align: middle; font-family: 'Roboto';">RY : </div>
					<div name="RY" style="display:inline; vertical-align: middle; font-family: 'Roboto';">0.0</div>
				</th>

				<th style="width:33%; vertical-align: middle;">
					<div style="display:inline; font-family: 'Roboto';">RZ : </div>
					<div name="RZ" style="display:inline;  font-family: 'Roboto';">0.0</div>
				</th>
			</tr>
		</table>

		<table id = "displayVertical" style="width:100%; visibility: hidden; color:white; font-size: 7.5vw; z-index: 1; position: Absolute ;">
			<tr>
				<th style="width:50%; vertical-align: middle;">
					<div style="display:inline; font-family: 'Roboto';">X : </div>
					<div name="X" style="display:inline; font-family: 'Roboto';">0.0</div>
				</th>
				<th style="width:50%; vertical-align: middle;">
					<div style="display:inline;vertical-align: middle; font-family: 'Roboto';">RX : </div>
					<div name="RX" style="display:inline; vertical-align: middle; font-family: 'Roboto';">0.0</div>
				</th>
			</tr>
			<tr>
				<th style="width:50%; vertical-align: middle;">
					<div style="display:inline;font-family: 'Roboto';">Y : </div>
					<div name="Y" style="display:inline; vertical-align: middle; font-family: 'Roboto';">0.0</div>
				</th>
				<th style="width:50%; vertical-align: middle;">
					<div style="display:inline;font-family: 'Roboto';">RY : </div>
					<div name="RY" style="display:inline; vertical-align: middle; font-family: 'Roboto';">0.0</div>
				</th>
			</tr>
			<tr>
				<th style="width:50%; vertical-align: middle;">
					<div style="display:inline; font-family: 'Roboto';">Z : </div>
					<div name="Z" style="display:inline;  font-family: 'Roboto';">0.0</div>
				</th>
				<th style="width:50%; vertical-align: middle;">
					<div style="display:inline; font-family: 'Roboto';">RZ : </div>
					<div name="RZ" style="display:inline; font-family: 'Roboto';">0.0</div>
				</th>
				
			</tr>
		</table>
	</div>




	<script src="OrbHandler.js"></script>

	<script>
		
		var mode = modeTest();
		
		if(mode == 1){
			document.getElementById("conDevice").style.visibility = "visible";
		}
		else if(mode == 2){
			document.getElementById("conDevice").style.visibility = "visible";
		}
		
		document.getElementById("demo").style.visibility = "visible";
		
		function serialConnected(){
			document.getElementById("serialCon").style.visibility = "hidden";
			//document.getElementById("displayHorizontal").style.visibility = "visible";
			showDisplay();
		}
		
		function serialDisonnected(){
			//document.getElementById("displayHorizontal").style.visibility = "hidden";
			//document.getElementById("displayVertical").style.visibility = "hidden";
			hideDisplays();
			document.getElementById("conDevice").style.visibility = "visible";
		}
		
		connectedToSerial = serialConnected;
		
		disconnectedToSerial = serialDisonnected;
		
		window.addEventListener("gamepadconnected", (event) => {
			gamepadData = event.gamepad;
			console.log("A gamepad was connected:");
			console.log("Gamepad Object");
			console.log(gamepadData);
		});
		
		
		var numberFormat = new Intl.NumberFormat(navigator.language,{minimumIntegerDigits:1,minimumFractionDigits:1,maximumFractionDigits:1});
		var domX = document.getElementsByName("X");
		var domY = document.getElementsByName("Y");
		var domZ = document.getElementsByName("Z");
		var domRX = document.getElementsByName("RX");
		var domRY = document.getElementsByName("RY");
		var domRZ = document.getElementsByName("RZ");
		
		function loadOrbValues(object, index, array){
			object.innerHTML = numberFormat.format(this*100);
		}
		
		function pollGamepads() {
			var gamepads = navigator.getGamepads();
			if (gamepads.length != 0){
				domX.forEach(loadOrbValues,orbOutput.x);
				domY.forEach(loadOrbValues,orbOutput.y);
				domZ.forEach(loadOrbValues,orbOutput.z);
				domRX.forEach(loadOrbValues,orbOutput.rx);
				domRY.forEach(loadOrbValues,orbOutput.ry);
				domRZ.forEach(loadOrbValues,orbOutput.rz);
			}
		}
		
		interval = setInterval(pollGamepads, 10);
		
		window.addEventListener("gamepadconnected", (event) => {
			if(mode == 1){
				if(event.gamepad.id.includes("Tekuma") || event.gamepad.id.includes("ROV Control")){
					document.getElementById("conDevice").style.visibility = "hidden";
					//document.getElementById("displayHorizontal").style.visibility = "visible";
					showDisplay();
				}
			}
			else if(mode == 2){
				document.getElementById("serialCon").style.visibility = "visible";
				document.getElementById("conDevice").style.visibility = "hidden";
			}
		});
		window.addEventListener("gamepaddisconnected", (event) => {
			if(mode == 1){
				if(event.gamepad.id.includes("Tekuma") || event.gamepad.id.includes("ROV Control")){
					document.getElementById("conDevice").style.visibility = "visible";
					//document.getElementById("displayHorizontal").style.visibility = "hidden";
				}
			}
			if(mode == 2){
				document.getElementById("conDevice").style.visibility = "visible";
				document.getElementById("serialCon").style.visibility = "hidden";
				//document.getElementById("displayHorizontal").style.visibility = "hidden";
			}
		});
		
		window.matchMedia("(orientation: landscape)").addListener(showDisplay);
		
		function showDisplay(){
			if(ballConnected){
				if(window.matchMedia("(orientation: landscape)").matches){
					showHorizontalDisplay();
				}
				else{
					showVerticalDisplay();
				}
			}
		}
		
		function showHorizontalDisplay(){
			document.getElementById("displayHorizontal").style.visibility = "visible";
			document.getElementById("displayVertical").style.visibility = "hidden";
		}	
		
		function showVerticalDisplay(){
			document.getElementById("displayHorizontal").style.visibility = "hidden";
			document.getElementById("displayVertical").style.visibility = "visible";
		}
		
		function hideDisplays(){
			document.getElementById("displayHorizontal").style.visibility = "hidden";
			document.getElementById("displayVertical").style.visibility = "hidden";
		}
		
	</script>

</body>
</html>
