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
	btn.onclick = validateInput;

}

function validatePCode(postcode) {

	var valid = true;
	if (postcode.length !=4){
		valid = false;
	}else
		if (isNaN(postcode)){
			valid = false;
		}
		else
			valid = true;
		return valid;
}

function validateInput() {
	
	var pcode = document.getElementById("postcode").value;
	var isPCodeValid;
	var PCodeOut;

	isPCodeValid = validatePCode(pcode);
	if(isPCodeValid == true){
		PCodeOut = document.getElementById("msg");
		PCodeOut.innerHTML = "Postcode Valid";
	}else{
		PCodeOut = document.getElementById("msg");
		PCodeOut.innerHTML = "Postcode invalid";
	}

}

window.onload = init;  
