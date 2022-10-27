function operaciones () {
    let x = parseInt(document.getElementById('valor1').value);
    if (x>0 && x<=10){
        document.getElementById("met").innerHTML= " Metodo Holliday-Segar";
        document.getElementById('met2').innerHTML = '';
        document.getElementById('met2b').innerHTML = '';
        let volumen = String (x*100) + String(" cc/D" );
        document.getElementById ('volumen').innerHTML= volumen;
        let hora1 = String(parseInt (Math.round(x*100)/ 24)) + String(" cc/h");
        document.getElementById ('hora').innerHTML= hora1;
        let matd = String(parseInt (Math.round((x*100)/ 24))*1.5) + String(" cc/h mant.");
        document.getElementById ('mantd').innerHTML= matd;
    }
    else if (x>10 && x<=20){
        document.getElementById("met").innerHTML= " Metodo Holliday-Segar";
        document.getElementById('met2').innerHTML = '';
        document.getElementById('met2b').innerHTML = '';
        let volumen = String(((x - 10) * 50) + 1000) + String(" cc/D");
        document.getElementById ('volumen').innerHTML= volumen;
        let hora1 = String(parseInt (Math.round(((x - 10) * 50) + 1000)/24)) + String(" cc/h");
        document.getElementById ('hora').innerHTML= hora1;
        let matd = String(parseInt (Math.round((((x - 10) * 50) + 1000)/24))*1.5) + String(" cc/h mant.");
        document.getElementById ('mantd').innerHTML= matd;
    }
    else if (x>20 && x<=30){
        document.getElementById("met").innerHTML= " Metodo Holliday-Segar";
        document.getElementById('met2').innerHTML = '';
        document.getElementById('met2b').innerHTML = '';
        let volumen = String(((x - 20) * 20) + 1500)+ String(" cc/D") ;
        document.getElementById ('volumen').innerHTML= volumen;
        let hora1 = String(parseInt (Math.round(((x - 20) * 20) + 1500)/24)) + String(" cc/h");
        document.getElementById ('hora').innerHTML= hora1;
        let matd = String(parseInt (Math.round((((x - 20) * 20) + 1500)/24))*1.5) + String(" cc/h mant.");
        document.getElementById ('mantd').innerHTML= matd;
    }
    else if (x>=31 && x<=250){
        document.getElementById("met").innerHTML= " Metodo Superficie Corporal";
        document.getElementById('volumen').innerHTML = '';
        let total1 = parseInt(((x * 4) + 7)/(x + 90)*1500)+ String(" cc/D");
        let total2 = parseInt(((x * 4) + 7)/(x + 90)*2000)  + String(" cc/D"); 
        document.getElementById ('met2').innerHTML= total1;
        document.getElementById ('met2b').innerHTML= total2;
        let hora1 = String(parseInt(Math.round(( (x * 4) + 7) / (x + 90) * 1500)/24)) + String(" cc/h");
        document.getElementById ('hora').innerHTML= hora1;
        let matd = String(parseInt(Math.round((((x * 4) + 7) / (x + 90) * 2000)/24))*1.5) + String(" cc/h mant ");
        document.getElementById ('mantd').innerHTML= matd ;
        document.getElementById ('mantd2').innerHTML= matd2 ;
    }
    else {
        document.getElementById('volumen').innerHTML = 'Invalido';
        document.getElementById("valor1").value = '';
        document.getElementById('hora').innerHTML = '';
        document.getElementById('mantd').innerHTML = '';
        document.getElementById('met2').innerHTML = '';
        document.getElementById('met2b').innerHTML = '';
    }
}
function borrar (){
    document.getElementById("valor1").value= " ";
    document.getElementById('volumen').innerHTML = '';
    document.getElementById('hora').innerHTML = '';
    document.getElementById('mantd').innerHTML = '';
    document.getElementById('met2').innerHTML = '';
    document.getElementById('met2b').innerHTML = '';
    document.getElementById("met").innerHTML= " ";
}