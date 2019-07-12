/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]

var arrItemCodes = [], arrStockQty = [];
function addItem() {
    var stock = document.getElementById("stock").value;
    if (stock == "") {
        alert("Input stock!");
        return;
    }
    var vQty = stock;
    var validQty = validateItemQty(stock);

    var outmsg = "", vCode = "", validCode = false;
    vCode = document.getElementById("itemcode").value;
    if (vCode == "") {
        alert("Input item code!");
        return;
    }
    vCode = vCode.toUpperCase();
    validCode = validateItemCode(vCode);

    if(!validCode){
        outmsg = "Invalid item code <br/>";
    }    

    if (validCode && validQty) {
        arrItemCodes.push(vCode);
        arrStockQty.push(vQty);
        outmsg = "Item details recorded";
        document.getElementById("stock").value="";
        document.getElementById("itemcode").value="";
    }
    document.getElementById("output").innerHTML = outmsg;
    

}
function listItems() {
    var outmsg = "";
    if (arrItemCodes.length == 0) {
        outmsg = "There are no items in stock";
    } else {
        for (var i = 0; i < arrItemCodes.length; i++) {
            outmsg += arrItemCodes[i] + " " + arrStockQty[i] + "<br>";
        }
    }
    document.getElementById("output").innerHTML = outmsg;
}
function validateItemQty(item) {
    var num = Number(item);
    if (num == "NaN" || num < 0) {
        return false;
    }
    return true;
}
function validateItemCode(pCode) {
    var valid = true, firstChar, leftover, num = 0;
    firstChar = pCode.substring(0, 1);
    leftover = pCode.substring(1);
    if (leftover.length != 4) {
        valid = false;
    }
    num = Number(leftover);
    if(isNaN(num)){
        valid=false;
    }
    firstChar = pCode.charAt(0);
    if (!(firstChar >= "A" && firstChar <= "Z")) {
        valid = false;
    }
    return valid;
}













