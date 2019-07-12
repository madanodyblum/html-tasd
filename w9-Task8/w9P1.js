/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
var arrToyies = [];
function init() {
	addToy();
}
function addToy() {
	var name = prompt('name');
	var num = prompt('num');
	var data={name:"",num:""}
	data['name']=name;
	data['num']=num;
	arrToyies.push(data);
	if(name!=''){
		addToy()
	}else{
		displayStats()
	}
}
function displayStats(){
	var displaydata="";
	for(i=0;i<arrToyies.length-1;i++){
		var k=i+1;
		displaydata += 'Dog '+k+':'+arrToyies[i]['name']+' No of toys:'+arrToyies[i]['num']+'<br>'
	}
	document.getElementById("output").innerHTML=displaydata;
}
window.onload = init;  
