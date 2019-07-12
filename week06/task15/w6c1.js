/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]

function start() {
    var numVal = 0, index = -1;
    var nums = [18, 23, 20, 17, 21, 18, 22, 19, 18, 20];
    var vOutput = "";
    numVal = document.getElementById("numVal").value;
    if(numVal==""){
        return;
    }
    for (var i = 0; i < nums.length; i++) {
        if (numVal == nums[i]) {
            index = i;
        }
    }
    vOutput += "<br> The values in the array are: " + nums.toString() + ".<br>";
    if (index == -1) {
        vOutput += "The number "+numVal+" does not exist in the array.<br>";
        vOutput += "The values in this example do not match the values you must use.<br>";
    }else{
        vOutput += "The number "+numVal+" exists in the array<br>";
    }
    document.getElementById("msg").innerHTML = vOutput;
}








