function start() {
    var vOutput = "";
    var vVal = 1;
    vOutput = vOutput + vVal + "<br/>";
    vVal = vVal + 1;
    vOutput = vOutput + vVal + "<br/>";
    vVal = vVal + 1;
    vOutput = vOutput + vVal + "<br/>";
    vVal++;
    vOutput = vOutput + vVal + "<br/>";
    vVal++;
    vOutput = vOutput + vVal + "<br/>";

    document.getElementById("output").innerHTML = vOutput;
}
window.onload = start;