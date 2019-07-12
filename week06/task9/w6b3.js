/* Filename: [ name of this file�].js
   Target html: [ what is the html file(s) linked to this js�] 
   Purpose : [ a html file may have multiple js files. What does this one do?�]
   Author: [ your name�]
   Date written: [ �]
   Revisions:  [ your name, what, when�]
*/

// [ brief comment on what the function does�]
function init() {
    doculmelnt.getElementById("execute").onclick=start;
    
}
function start() {
    var arrPeople=["Ted","Jo","Jim","Emma","Kate"];
    var vOutput="";
    vOutput+="1st, 3rd & 4th names in the array are: <br>";
    vOutput+=arrPeople[0]+"<br>";
    vOutput+=arrPeople[2]+"<br>";
    vOutput+=arrPeople[3]+"<br>";
    document.getElementById("msg").innerHTML = vOutput;
}
window.onload = init;  
