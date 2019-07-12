/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {

start();

}
function start(){
	var vCar1 = {make:" Toyota", colour:"Silver", price:24000};
	var vCar2 = {make:" Mazda", colour:"Red", price:30000};
	var vCar3 = {make:" Audi", colour:"Black", price:90000};
	var arrCars = [vCar1, vCar2, vCar3];
	listCars(arrCars);
	displayStats(arrCars);
}
function listCars(arrCars){
	var displaydata='';
	for(i=0;i<arrCars.length;i++){
		displaydata+= 'Make:'+arrCars[i]['make']+' Colour:'+arrCars[i]['colour']+' Price:'+arrCars[i]['price']+'<br>'
	}
	document.getElementById("car").innerHTML=displaydata;
}
function displayStats(arrCars){
	var sumprice;
	var carAmount=arrCars.length;
	for(i=0;i<arrCars.length;i++){
		var tprice=+arrCars[i]['price'];
	}
	var avprice=tprice/carAmount;
	document.getElementById("total").innerHTML='Total Cars:'+carAmount+'<br>'+'Total of all Prices:'+tprice+'<br>'+'Average Price'+avprice.toFixd(2);
}
window.onload = init;  
