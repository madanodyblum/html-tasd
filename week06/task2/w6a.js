function start() {
    var vOutput = "";
    var vVal = 7;
    while (vVal >= 0) {
        vOutput = vOutput + vVal + "<br/>";
        vVal = vVal - 1;
    }
    document.getElementById("output").innerHTML = vOutput;
}
window.onload = start;