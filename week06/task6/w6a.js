function start() {
    var vOutput = "";
    var vVal = 0;
    for(vVal=1;vVal<=3;vVal++){
        vOutput = vOutput + vVal + "";
    }
    document.getElementById("output").innerHTML = vOutput;
}