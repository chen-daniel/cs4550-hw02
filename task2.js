function numberAlert() {
	window.alert(document.getElementById("number").innerHTML);
}

function increment() {
	var number = document.getElementById("number");
	number.innerHTML = parseInt(number.innerHTML) + 1;
}

function append() {
	var node = document.createElement("P");
	var textnode = document.createTextNode(document.getElementById("number").innerHTML);
	node.appendChild(textnode);
	document.getElementById("append").appendChild(node);
}
