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
    var vOutput="",i=0;
    vOutput+="List of all names in the array: <br>";
    
    while(i<arrPeople.length){
        vOutput+=arrPeople[i]+"<br>";
        i++;
    }
    document.getElementById("msg").innerHTML = vOutput;
}
window.onload = init;  
