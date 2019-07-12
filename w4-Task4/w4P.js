/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {
	var btn = document.getElementById("check");
	btn.onclick = processSales;

}	

function calcCommission(saleAmt) {
	var commRate;
	if(saleAmt==0)
		commRate=0;
	if(saleAmt<=500000)
		commRate=0.05
	else if(500000<saleAmt<=15000000)
		commRate=0.08
	else
		commRate=0.1
	return commRate*saleAmt;
}
function processSales(){
	var salesperson,sales,commission;
	var salesperson = document.getElementById("Salesperson name").value;
	var sales = document.getElementById("sales amount").value;
	commission=calcCommission(sales)
	if(commission==0)
		alert("Invalid sales amount");
	else
		alert(commission.toFixed(2));
}
window.onload = init;  
