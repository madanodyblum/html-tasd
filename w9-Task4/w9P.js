/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
var arrCities = [];
function init() {
	addCity();
}
function addCity() {
	var city = prompt('city');
	arrCities.push(city);
	if(city!=''){
		addCity()
	}else{
		displayStats()
	}
}
function displayStats(){
	var displaydata="";
	console.log(arrCities);
	arrCities=arrCities.sort()
	for(i=0;i<arrCities.length-1;i++){
		var k=i+1;
		displaydata += 'City '+k+':'+arrCities[i+1]+'<br>'
	}
	document.getElementById("output").innerHTML=displaydata;
}
window.onload = init;  
