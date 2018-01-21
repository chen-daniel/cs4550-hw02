function showLoremIpsum() {
	// Lorem ipsum text copied over from Wikipedia
	document.getElementById("display").innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

function show99Bottles() {
	// 99 bottles of beer lyrics copied and modified from Wikipedia
	document.getElementById("display").innerHTML="99 bottles of beer on the wall, 99 bottles of beer.<br>Take one down, pass it around, 98 bottles of beer on the wall...<br>98 bottles of beer on the wall, 98 bottles of beer.<br>Take one down, pass it around, 97 bottles of beer on the wall...<br>97 bottles of beer on the wall, 97 bottles of beer.<br>Take one down, pass it around, 96 bottles of beer on the wall...<br>96 bottles of beer on the wall, 96 bottles of beer.<br>Take one down, pass it around, 95 bottles of beer on the wall...";
}

function showLastThing() {
	document.getElementById("display").innerHTML="this is the third thing";
}

window.onload = showLoremIpsum
