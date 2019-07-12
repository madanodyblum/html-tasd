/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]

function init() {
    document.getElementById("stats").click();

}
function start() {
    var nums = [12, 26, 18, 23, 20, 17, 25, 22, 15, 13, 21, 19];
    var vOutput = "";
    var sum=0;
    vOutput += "List of all values in the array <br>";
    for (var i = 0; i < nums.length; i++) {
        vOutput += nums[i] + " ";
    }
    vOutput += "<br> Total number of values in the array: "+nums.length+"<br>";
    for (var i = 0; i < nums.length; i++) {
        sum+=nums[i];
    }
    vOutput += "Total of all values: "+sum+"<br>";
    
    vOutput += "Average of all values: "+sum/(nums.length)+"<br>";
    document.getElementById("msg").innerHTML=vOutput;
}
window.onload = init;









