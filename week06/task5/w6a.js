function start() {
    var vOutput = "";
    var vVal = 5;
    while (vVal > 0) {
        vOutput = vOutput + vVal + "";
        vVal=vVal-1;//same as vVal--;
    }
    document.getElementById("output").innerHTML = vOutput;
}