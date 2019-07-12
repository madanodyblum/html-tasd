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
function pcodeToState(postcode) {
	var state;
	var firstDigit;
	var firstDigit = postcode.substr(0,1);
  	switch(firstDigit) {
	  	 case '2':
	    	state="NSW";
	   		 break;
	 	 case '3':
	    	state="Victoria"
	   		 break;
	     case '8':
	    	state="Victoria"
	   		 break;
		 case '4':
			state="Queensland"
		 break;
		 case '9':
			state="Queensland"
		 break;
		 case '5':
			state="South Australia"
		 break;
		 case '6':
			state="Western Australia"
		 break;
		 case '7':
			state="Tasmania"
		 break;
		 case '0':
			state="Northern Territory"
		 break;
	  	default:
	} 
	return state;
}
function validateInput() {
	var pcode = document.getElementById("postcode").value;
	var isPCodeValid;
	var PCodeOut;
	var ausState;
	isPCodeValid = validatePCode(pcode);
	if(isPCodeValid == true){
		ausState=pcodeToState(pcode);
		PCodeOut = document.getElementById("msg");
		PCodeOut.innerHTML = ausState;
	}else{
		PCodeOut = document.getElementById("msg");
		PCodeOut.innerHTML = "Postcode invalid";
	}

}

window.onload = init;  
