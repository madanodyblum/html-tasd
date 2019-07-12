/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]

function process(){
    var arrNameList=["John","Jenny"];
    processArray(arrNameList)
    
}
function processArray(pArray){
    var output="";
    output+="Total names in array is:"+pArray.length;
    output+="<br>"+pArray[0];
    output+="<br>"+pArray[1];
    document.getElementById("output").innerHTML=output;
}