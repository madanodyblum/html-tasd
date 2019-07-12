/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]
function init() {
    document.getElementById("process").onclick = start;
}
function start() {
    var vName = "";
    vName = document.getElementById("custname").value;
    var vOutput="";
    var letter="";
    letter=processString(vName);
    
    vOutput+=vName;
    vOutput+="<br>The length of the name is: "+vName.length+" characters.";
    vOutput+="<br>The first letter of the name is:"+letter;
    document.getElementById("output").innerHTML = vOutput;    
}
function processString(str){
    return str.charAt(0);
}
window.onload = init;
