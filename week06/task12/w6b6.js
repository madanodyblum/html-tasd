
function init() {
    doculmelnt.getElementById("execute").onclick = start;

}
function start() {
    var arrPeople = ["adele", "Ted", "Jo", "Jim", "Emma", "Kate", "Christopher"];
    var vOutput = "";
    vOutput += "List of all names in the array: <br>";

    for (var i = 0; i < arrPeople.length; i++) {
        vOutput += arrPeople[i] + "<br>";
    }
    document.getElementById("msg").innerHTML = vOutput;
}
window.onload = init;
