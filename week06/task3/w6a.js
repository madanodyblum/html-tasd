function start() {
    var vOutput = "";
    var vVal = 1;
    while (vVal <= 10) {
        vOutput = vOutput + vVal + "";
        vVal++;
    }
    document.getElementById("output").innerHTML = vOutput;
}