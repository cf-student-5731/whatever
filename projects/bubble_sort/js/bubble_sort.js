let button_node = document.getElementById('start_button');
button_node.addEventListener('click', sort, false);
let input_array = [];
let separation_char_output = '';
let show_node = document.getElementById('output');
let separation_char_node = document.getElementById('separation_char');
let swapped = true;
let h = 0;
let error_occured = false;
let i = 0;

function sort() {
	input_array = document.getElementById('input_box').value.split(separation_char_node.value);
	show_node.innerHTML = '';
	error_occured = false;
	for (i = 0; i < input_array.length; i++){
		input_array[i] = Number(input_array[i]);
		if (isNaN(input_array[i])){
			error_occured = true;
		}
	}
	if(!error_occured){
		show_node.innerHTML = 'the input is: '+ '<b>' + input_array.join(" ") + '</b>';
		show_node.innerHTML += '<br>elements in the array ' + '<b>' + input_array.length + '</b>';
		if(separation_char_node.value == ' '){
			separation_char_output = 'space';
		}
		else{
			separation_char_output =  separation_char_node.value;
		}
		show_node.innerHTML += '<br>separated by ' + '<b>' + separation_char_output + '</b>';
		swapped = true;
		while (swapped) {
			swapped = false;
			for (i = 0; i < input_array.length; i++) {
				if (input_array[i] > input_array[i + 1]) {
					h = input_array[i];
					input_array[i] = input_array[i + 1];
					input_array[i + 1] = h;
					swapped = true;
				}
			}
		}
		show_node.innerHTML += '<br>sorted: ' + '<b>' + input_array.join(" ") + '</b>';
	}
	else{
		show_node.innerHTML = '<b>input could not be processed!</b>';
	}
}