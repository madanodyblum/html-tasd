/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
var currentComm,bonusComm,totalComm,sellamount,bonusrate;
function init() {
	
	document.write('<h2>Bonus Commission</h2>');
	document.write('<h2>Sanduni Amanda 101337547</h2>');
	sellamount = prompt('sales amount');
	bonusrate = prompt('bonus commission');
	var sales,rate,commission;
	sales = prompt('sales');
	sales = parseFloat(sales);
	var validSales = validateInput(sales);
	rate = prompt('rate');
	rate = parseFloat(rate);
	var validRate = validateInput(rate);
	document.write('<p>Input sales='+sales+'</p>');
	document.write('<p>Input rate='+rate+'</p>');
	bonusComm=0;
	totalComm=0;
	if(validRate&&validSales){
		commission=relevant(sales,rate);
		currentComm=commission.toFixed(2)
		bonusComm=validatebonuscomm(sales);
		if(bonusComm!=0){
			totalComm=calctotalCommission(currentComm,bonusComm);
		}
		totalComm=parseFloat(totalComm);
		totalComm=totalComm.toFixed(2)
		document.write('<p>Standard commission='+currentComm+'</p>');
		document.write('<p>Bonus commission='+bonusComm+'</p>');
		document.write('<p>Total commission='+totalComm+'</p>');

	}else{
		alert("Input Error")
	}
		
}

function calctotalCommission(currentComm,bonusComm) {
	var totalCommission=currentComm*1+bonusComm*1;
	return totalCommission;
}

function validateInput(value) {
	if(value>0)
		return true;
	return false;
}

function validatebonuscomm(value) {
	var valisell=validateInput(sellamount);
	var validbonusrate=validateInput(bonusrate);
	if(valisell&&validbonusrate){
		if(sellamount<=value)
			return bonusrate;
		else
			return 0;
		
	}else{
		return 0;
	}

}

function relevant(salesAmt,commRate) {
	return salesAmt*commRate;
}

window.onload = init;  
