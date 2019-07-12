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
	arrToyies.sort(function(a, b){
	    var x = a.name.toLowerCase();
	    var y = b.name.toLowerCase();
	    if (x < y) {return -1;}
	    if (x > y) {return 1;}
	    return 0;
	});
	console.log(arrToyies);
	var k=0;
	for(i=0;i<arrToyies.length;i++){
		if(arrToyies[i]['name']!=""){
			k=k+1;
			displaydata += 'Dog '+k+':'+arrToyies[i]['name']+' No of toys:'+arrToyies[i]['num']+'<br>'
		}
	}
	document.getElementById("output").innerHTML=displaydata;
}

window.onload = init;  
