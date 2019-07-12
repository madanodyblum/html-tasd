/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {
	var sale,commission,amtPayable;
	sale = prompt("sale");
	sale = parseInt(sale);
	commission=calculateCommission(sale);
	var saleAmtOut;
	saleAmtOut = document.getElementById("sale");
	saleAmtOut.innerHTML = "The item sold for "+sale;
	var commissionOut;
	commissionOut = document.getElementById("commission");
	commissionOut.innerHTML = "Commission deducted is "+commission.toFixed(2);
	amtPayable=sale+commission;
	var payOut;
	payOut = document.getElementById("payable");
	payOut.innerHTML = "Amount payable to seller is "+amtPayable;
}	

function calculateCommission(saleAmt) {
	var commission,commRate;
	commRate=0.1;
	commission=saleAmt*commRate;
	return commission;

}
window.onload = init;  
