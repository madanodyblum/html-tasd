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
	btn.onclick = validateExpiry;

}
function validateMonth(month) {

	var valid = true;
	var state=0;
	month=parseInt(month);
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	for(var i=0;i<=11;i++){
		if(month==numbers[i])
			state=1;
	}
	if (state!=1){
		valid = false;
	}else
		if (isNaN(month)){
			valid = false;
		}
		else
			valid = true;
		return valid;
}

function validateYear(year) {

	var valid = true;
	var yearLength=year.length;
	year=parseInt(year);
	var d= new Date();
	var curyear=d.getFullYear();
	var lastyear = curyear+5;
	if (yearLength !=4){
		valid = false;
	}else
		if (isNaN(year)){
			valid = false;
		}
		else
			if((year<curyear)||(year>lastyear)){
				valid = false;
			}
			else
			valid = true;
		return valid;
}

function validateExpiry() {
	var month = document.getElementById("monthNo").value;
	var year = document.getElementById("year").value;
	var monthValid;
	var PCodeOut;
	var ausState;
	monthValid = validateMonth(month);
	yearValid = validateYear(year);
	if(monthValid == true&&yearValid == true){
		PCodeOut = document.getElementById("msg");
		PCodeOut.innerHTML = "Expiry date is valid";
	}else{
		PCodeOut = document.getElementById("msg");
		PCodeOut.innerHTML = "Expiry date is invalid";
	}

}

window.onload = init;  
