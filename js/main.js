let figure_node = document.querySelectorAll('#team figure');
let output_node = document.querySelectorAll('#team figure p');
let name_node = document.querySelectorAll('#team figure figcaption');


let team_members = [
	{name:'Jane Roe', email:'jane.roe@team6.com', function:'CEO', experience:'rookie', special_skill:'negotiation'},
	{name:'John Doe', email:'john.doe@team6.com', function:'CTO', experience:'rookie', special_skill:'coding'},
	{name:'Richard Roe', email:'richard.roe@team6.com', function:'CFO', experience:'rookie', special_skill:'calculation'},
	{name:'Janie Doe', email:'janie.doe@team6.com', function:'COO', experience:'rookie', special_skill:'teamplayer'}];

for (let i = 0; i < figure_node.length; i++){
	function zoom_in(){
		figure_node[i].style.transform = 'scale(1.08)';
		name_node[i].innerHTML = '<b>' + team_members[i].name + '</b>';
		output_node[i].innerHTML +=
			'e-mail: ' + '<b>' + team_members[i].email + '</b>' + 
			'<br>function: ' + '<b>' + team_members[i].function + '</b>' + 
			'<br>experience: ' + '<b>' + team_members[i].experience + '</b>' + 
			'<br>special skill: ' + '<b>' + team_members[i].special_skill + '</b>';
		
	}
	
	function zoom_out(){
		figure_node[i].style.transform = 'scale(1)';
		output_node[i].innerHTML = '';
		name_node[i].innerHTML = team_members[i].name;
	}
	figure_node[i].addEventListener('mouseover', zoom_in, false);
	figure_node[i].addEventListener('mouseout', zoom_out, false);
}
