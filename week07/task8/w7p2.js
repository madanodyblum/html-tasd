/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]

var arrFruitList=[];
function addFruit(){
    var fruit=document.getElementById("fruit").value;
    arrFruitList.push(fruit);
    document.getElementById("fruit").value="";
}
function displayArray(){
    var output="";
    for(var i=0;i<arrFruitList.length;i++){
        output+=arrFruitList[i]+"<br>";
    }
    document.getElementById("output").innerHTML=output;
}