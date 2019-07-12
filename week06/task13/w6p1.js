/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]

var arrPeople = ["Alice", "Sanduni", "Pat", "Ayesha", "June", "Lee", "Christopher"];
function listValuesForLoop() {
    var vOutput = "";
    for (var i = arrPeople.length-1; i >= 0; i--) {
        vOutput += arrPeople[i] + "<br>";
    }
    document.getElementById("msg1").innerHTML = vOutput;
}
function listValuesWhileLoop() {
    var vOutput = "",i=0;
    while (i < arrPeople.length) {
        vOutput += arrPeople[i] + "<br>";
        i++;
    }
    document.getElementById("msg2").innerHTML = vOutput;
}
function determineNameLength() {
    var vOutput = "";
    document.getElementById("msg2").innerHTML = arrPeople[1] + " : " + arrPeople[1].length;
}
function init() {
    document.getElementById("msg3").onclick = start;

}
function start() {
    var vOutput = "";
    vOutput += "List of all names in the array: <br>";

    for (var i = 0; i < arrPeople.length; i++) {
        vOutput += arrPeople[i] + "<br>";
    }
    document.getElementById("msg").innerHTML = vOutput;
}
window.onload = init;
