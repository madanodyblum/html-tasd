/* Filename: [ name of this file�].js
 Target html: [ what is the html file(s) linked to this js�] 
 Purpose : [ a html file may have multiple js files. What does this one do?�]
 Author: [ your name�]
 Date written: [ �]
 Revisions:  [ your name, what, when�]
 */

// [ brief comment on what the function does�]

function process(){
    var studentid="",msg="";
    studentid=document.getElementById("studentid").value;
    msg="Total of all digits is "+processStudentID(studentid);
    document.getElementById("result").innerHTML=msg;
}
function processStudentID(pID){
    var total=0;
    for(var i=0;i<pID.length;i++){
        total+=Number(pID.charAt(i));
    }
    return total;
}