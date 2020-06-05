let button2_node = document.getElementById('send_button');
let show2_node = document.getElementById('output');
let input2_node = document.getElementById('input_box');
button2_node.addEventListener('click', post, false);
let counter = 0;




function post(){
	let new_node = document.createElement("P");
	let text = document.createTextNode(input2_node.value);
	new_node.appendChild(text);
	show2_node.insertBefore(new_node, show2_node.childNodes[0]);
	counter++;
	let style_node = document.querySelectorAll('#output p');
		if(counter%2 == 0){
		style_node[0].style.backgroundColor = 'grey';
	}
	else{style_node[0].style.backgroundColor = 'lightgrey';
	}

	input2_node.value = '';
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
	var d = new Date();
	var n = d.getDate();
	d = d.toLocaleDateString("en-US", options);
	style_node[0].innerHTML += '<br>---' + d;
}