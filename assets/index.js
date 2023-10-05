var aktolor;

function ok() {
    alert("discord: flop.geming")
}

document.getElementById("kolor").onclick = function() {
    if(aktolor == 0){
        document.getElementById("bd").style.backgroundColor = "#FFBB5C";
        document.getElementById("n").style.backgroundColor = "#FF9B50";
        document.getElementById("bd").style.color = "black";
        document.getElementById("navbar").style.backgroundColor = "#FF9B50";
        document.getElementById("main").style.backgroundColor = "#E25E3E";
        document.getElementById("accs").style.backgroundColor = "#C63D2F";
        document.getElementById("theme").innerHTML = "theme: pumpkin"
        aktolor = 1;
    }
    else if(aktolor == 1){
        document.getElementById("bd").style.backgroundColor = "#ECEE81";
        document.getElementById("n").style.backgroundColor = "#8DDFCB";
        document.getElementById("bd").style.color = "black";
        document.getElementById("navbar").style.backgroundColor = "#8DDFCB";
        document.getElementById("main").style.backgroundColor = "#82A0D8";
        document.getElementById("accs").style.backgroundColor = "#EDB7ED";
        document.getElementById("theme").innerHTML = "theme: water slide"
        aktolor = 2;
    }
    else if(aktolor == 2){
        document.getElementById("bd").style.backgroundColor = "#D8D9CF";
        document.getElementById("n").style.backgroundColor = "#FF8787";
        document.getElementById("bd").style.color = "black";
        document.getElementById("navbar").style.backgroundColor = "#FF8787";
        document.getElementById("main").style.backgroundColor = "#949494";
        document.getElementById("accs").style.backgroundColor = "#E26868";
        document.getElementById("theme").innerHTML = "theme: retro"
        aktolor = 3;
    }
    else if (aktolor == 3){
        document.getElementById("bd").style.backgroundColor = "#FF9B50";
        document.getElementById("n").style.backgroundColor = "#8062D6";
        document.getElementById("bd").style.color = "white";
        document.getElementById("navbar").style.backgroundColor = "#8062D6";
        document.getElementById("main").style.backgroundColor = "#9288F8";
        document.getElementById("accs").style.backgroundColor = "#e89ea6";
        document.getElementById("theme").innerHTML = "theme: made by neko_r8";
        aktolor = 4;
    }
    else {
        document.getElementById("bd").style.backgroundColor = "#35155D";
        document.getElementById("n").style.backgroundColor = "#892CDC";
        document.getElementById("bd").style.color = "white";
        document.getElementById("navbar").style.backgroundColor = "#892CDC";
        document.getElementById("main").style.backgroundColor = "#512B81";
        document.getElementById("accs").style.backgroundColor = "#5e088c";
        document.getElementById("theme").innerHTML = "theme: basic purple";
        aktolor = 0;
    }
    console.log(aktolor)
}
//#FF9B50
//#E25E3E
//#C63D2F

//#322653
//#8062D6
//#9288F8
//#FFD2D7