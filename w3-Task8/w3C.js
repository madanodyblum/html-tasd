/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {
	var seatCategory,ticketPrice,ticketQty,validQty,ticketCost;
	var disaccount=0;
	seatCategory = prompt("category");
	ticketQty = prompt("quantity");
	ticketQty = parseInt(ticketQty);
	validQty=validateQty(ticketQty);
	ticketPrice=determineTicketPrice(seatCategory)

	if(ticketPrice==0){
		var seatingArea;
		seatingArea = document.getElementById("seatingArea");
		seatingArea.innerHTML="Error category is invalid"
	}
	if(validQty==false){
		var tickQty;
		tickQty = document.getElementById("ticketQty");
		tickQty.innerHTML="Invalid number of tickets requested";
	}
	if(ticketPrice>0&&validQty==true){
		ticketCost=allsum(ticketPrice,ticketQty);
	}
	var pricePerTicket;
	if(ticketPrice!=0){
		seatingArea = document.getElementById("seatingArea");
		seatingArea.innerHTML = "Seating area "+seatCategory;
		pricePerTicket = document.getElementById("pricePerTicket");
		pricePerTicket.innerHTML = "pricePerTicket "+ticketPrice.toFixed(2);
	}
	if(ticketPrice==0){
		pricePerTicket = document.getElementById("pricePerTicket");
		pricePerTicket.innerHTML = "pricePerTicket "+ticketPrice;
	}
	if(validQty==true){
		var tihtmQty;
		tihtmQty = document.getElementById("ticketQty");
		tihtmQty.innerHTML = "Number of tickets ordered "+ticketQty;
	}
	
	if(ticketPrice>0&&validQty==true){
		var amountDue;
		var html;
		amountDue = document.getElementById("beforeDiscount");
		amountDue.innerHTML = "Gross Amount "+ticketCost;
		var rate=discountrate(ticketQty);
		disaccount=0;
		if(rate!=0)
		{
			var discount=discountamount(ticketCost,rate);
			document.getElementById("discount").innerHTML='Discount:'+discount.toFixed(2);
			document.getElementById("amountDue").innerHTML='Amount:'+(ticketCost-discount);
		}else{
			document.getElementById("discount").innerHTML='Discount:'+0;
			document.getElementById("amountDue").innerHTML='Amount:'+ticketCost;
		}
	}else{
			document.getElementById("discount").innerHTML='Discount:'+discount;
			document.getElementById("amountDue").innerHTML='Amount:'+ticketCost;
	}

}	

function determineTicketPrice(tiche) {
	var price
	switch(tiche) {
	  	 case 'P(premium)':
	    	price=180;
	   		 break;
	 	 case 'A':
	    	price=140
	   		 break;
	     case 'B':
	    	price=100
	   		 break;
		 case 'C':
			price=80
		 break;
	  	default:
	  	price=0;
	} 
	return price;
}
function allsum(t_price,total) {
	return t_price*total+7;

}
function discountrate(tickecount) {
	if((tickecount>=5)&&(tickecount<=10))
		return 0.05;
	else if(tickecount>10)
		return 0.1;
	else
		return 0;

}

function discountamount(crrentamount,rate){
	return crrentamount*rate;
}
function validateQty(tickQty) {
	if((tickQty>=1)&&(tickQty<=20))
		return true;
	else
		return false;

}
window.onload = init;  
