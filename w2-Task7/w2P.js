/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {
	document.write('<h2>Commission Calculator</h2>');
	document.write('<h2>Sanduni Amanda 101337547</h2>');
	var sales,rate,commission;
	sales = prompt("sales");
	sales = parseFloat(sales);
	var validSales = validateInput(sales);
	rate = prompt('rate');
	rate = parseFloat(rate);
	var validRate = validateInput(rate);
	document.write('<p>Input sales='+sales+'</p>');
	document.write('<p>Input rate='+rate+'</p>');
	if(validRate&&validSales){
		commission=relevant(sales,rate);
		commission=commission.toFixed(2)
		document.write('Output commission='+commission);
	}else{
		alert("Input Error")
	}
		
}

function validateInput(value) {
	if(value>0)
		return true;
	return false;
}

function relevant(salesAmt,commRate) {
	return salesAmt*commRate;
}

window.onload = init;  
