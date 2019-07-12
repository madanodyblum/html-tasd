/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
//var garrProducts=array();
var garrProducts = [];
function init() {
	var btn = document.getElementById("new");
	btn.onclick = addProduct;
	var list_btn = document.getElementById("list");
	list_btn.onclick = listProducts;
}
function addProduct(){
	var id = document.getElementById("id").value;
	var description = document.getElementById("description").value;
	var price = document.getElementById("price").value;
	var data={id:"",description:"",price:""};
	data['id']=id;
	data['description']=description;
	data['price']=price;
	garrProducts.push(data);
}
function listProducts(){
	document.getElementById("output").innerHTM="";
	var displaydata='';
	for(i=0;i<garrProducts.length;i++){
		displaydata+= 'Product Id:'+garrProducts[i]['id']+' Description:'+garrProducts[i]['description']+' Price:'+garrProducts[i]['price']+'<br>'
	}
	document.getElementById("output").innerHTML=displaydata;
	document.getElementById("count").innerHTML="Number of items under $5:"+countCheap();
}
function countCheap(){
	var count=0;
	for(i=0;i<garrProducts.length;i++){
		if(garrProducts[i]['price']<=5){
			count++;
		}
	}
	return count;
	
}
window.onload = init;  
