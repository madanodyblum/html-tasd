/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {

	document.getElementById("today").innerHTML=todayToString();
	var btn = document.getElementById("check");
	btn.onclick = processParking;

}	

function calcAmountDue(hours) {
	var amtDue;
	if(hours<=3)
		amtDue=10;
	else if(3<hours)
		amtDue=7;
	return amtDue ;
}
function calcTotalHours(hrs,mins){
	if(mins>0)
		hrs=hrs+1;
	return hrs;

}
function todayToString(){
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	return date
}
function isHoursValid(hrs){
	if(0<=hrs&&hrs<=17)
		return true;
	else
		return false

}
function isMinsValid(mins){
	if(0<=mins&&mins<=59)
		return true;
	else
		return false;

}
function processParking(){
	var numHour,numMins,totalHours,totalCost,msg="";
	numHours=document.getElementById("hours").value;
	numHours=parseInt(numHours);
	var validHours=isHoursValid(numHours);
	numMins=document.getElementById('minutes').value;
	numMins=parseInt(numMins);
	var validMins=isMinsValid(numMins)
	if(validHours==false)
		msg=msg + "Invalid number of hours";
	if(validMins==false)
		msg=msg + "Invalid number of mins";

	if(msg==""){
		totalHours=calcTotalHours(numHours,numMins);
		totalCost=calcAmountDue(totalHours);

		document.getElementById("output").innerHTML='totaltime:'+totalHours+'<br>'+'totalCost:'+totalCost;
	}else if(validHours==false&&validMins==true){
		document.getElementById("output").innerHTML="Invalid number of hours";
	}else if(validMins==false&&validHours==true){
		document.getElementById("output").innerHTML="Invalid number of mins";
	}else{
		document.getElementById("output").innerHTML="Invalid number of hours, Invalid number of mins";
	}

}
window.onload = init;  
