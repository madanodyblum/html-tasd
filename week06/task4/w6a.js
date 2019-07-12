function start() {
    var vOutput = "";
    var vVal = 5;
    while (vVal > 10) {
        vOutput = vOutput + vVal + "";
        vVal++;
    }
    document.getElementById("output").innerHTML = vOutput;
}