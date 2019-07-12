/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]

function start() {
    var low = 0, high = 0, count = 0, highest = -1;
    var nums = [18, 23, 20, 17, 21, 18, 22, 19, 18, 25];
    var vOutput = "";
    vOutput += "The values in the array are: " + nums.toString() + ".<br>";
    low = document.getElementById("low").value;
    high = document.getElementById("high").value;
    if (Number(low) == "NaN" || Number(high) == "NaN" || low == "" || high == "") {
        vOutput += "At least one of the values (low or high or both) is not numeric.<br>";
        document.getElementById("msg").innerHTML = vOutput;
        return;
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= low && nums[i] <= high) {
            count++;
        }
        if (highest < nums[i]) {
            highest = nums[i];
        }
    }
    if (low > highest) {
        vOutput += "Error when low value is NOT less than high value<br>";
        document.getElementById("msg").innerHTML = vOutput;
        return;
    }
    if (count == 0) {
        vOutput += "0 values that exist in the range.<br>";
    }
    if (count == 1) {
        vOutput += "1 value that exist in the range.<br>";
    }
    if (count > 1) {
        vOutput += "More than 1 value that exist in the array.<br>";
    }
    document.getElementById("msg").innerHTML = vOutput;
}








