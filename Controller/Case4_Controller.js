
function capturar() {
    const f = document.getElementById("frecuencia").value;
    document.getElementById("f").value = f;
    document.getElementById("mostrar_frecuencia").innerHTML = f;
}
function capturar1() {
    const f1 = document.getElementById("f").value;
    document.getElementById("frecuencia").value = f1;
    document.getElementById("mostrar_frecuencia").innerHTML = f1;
}

function mostrar() {
    const f = document.getElementById("frecuencia").value;
    const f1 = document.getElementById("f").value;

}

function calcular() {
    var f = document.getElementById("frecuencia").value;
    var ve = document.getElementById("ve").value;
    var vr = document.getElementById("vr").value;


    if (f != 0 || ve != 0 || vr != 0) {
        const vs = 340;
        var resultado = Number(((vs + parseFloat(vr)) / (vs + parseFloat(ve))) * parseFloat(f));
        document.getElementById("resultado").value = Math.round(resultado).toFixed(2) + " Hz";
        document.getElementById("f").value = 0;
        document.getElementById("mostrar_frecuencia").innerHTML = 0;
        document.getElementById("frecuencia").value = 0;
        document.getElementById("ve").value = "";
        document.getElementById("vr").value = "";

    } else {
        document.getElementById("resultado").value = "ingrese valores!";
    }

}

function frecuencia1() {
    var f = document.getElementById("f").value;
    console.log(f);
    if (f == 0) {
        document.getElementById("onda1").classList.add("onda-off");
        document.getElementById("onda2").classList.add("onda-off");
        document.getElementById("onda3").classList.add("onda-off");
        document.getElementById("onda4").classList.add("onda-off");

        document.getElementById("onda1").classList.remove("onda-1");
        document.getElementById("onda2").classList.remove("onda-1");
        document.getElementById("onda3").classList.remove("onda-1");
        document.getElementById("onda4").classList.remove("onda-1");
        document.getElementById("onda1").classList.remove("onda-2");
        document.getElementById("onda2").classList.remove("onda-2");
        document.getElementById("onda3").classList.remove("onda-2");
        document.getElementById("onda4").classList.remove("onda-2");
        document.getElementById("onda1").classList.remove("onda-3");
        document.getElementById("onda2").classList.remove("onda-3");
        document.getElementById("onda3").classList.remove("onda-3");
        document.getElementById("onda4").classList.remove("onda-3");
    } else if (f > 0 && f <= 300) {
        document.getElementById("onda1").classList.remove("onda-off");
        document.getElementById("onda2").classList.remove("onda-off");
        document.getElementById("onda3").classList.remove("onda-off");
        document.getElementById("onda4").classList.remove("onda-off");

        document.getElementById("onda1").classList.add("onda-1");
        document.getElementById("onda2").classList.add("onda-1");
        document.getElementById("onda3").classList.add("onda-1");
        document.getElementById("onda4").classList.add("onda-1");
    } else if (f > 300 && f <= 650) {
        document.getElementById("onda1").classList.remove("onda-off");
        document.getElementById("onda2").classList.remove("onda-off");
        document.getElementById("onda3").classList.remove("onda-off");
        document.getElementById("onda4").classList.remove("onda-off");
        document.getElementById("onda1").classList.remove("onda-1");
        document.getElementById("onda2").classList.remove("onda-1");
        document.getElementById("onda3").classList.remove("onda-1");
        document.getElementById("onda4").classList.remove("onda-1");

        document.getElementById("onda1").classList.add("onda-2");
        document.getElementById("onda2").classList.add("onda-2");
        document.getElementById("onda3").classList.add("onda-2");
        document.getElementById("onda4").classList.add("onda-2");
    } else if (f > 650) {
        document.getElementById("onda1").classList.remove("onda-off");
        document.getElementById("onda2").classList.remove("onda-off");
        document.getElementById("onda3").classList.remove("onda-off");
        document.getElementById("onda4").classList.remove("onda-off");
        document.getElementById("onda1").classList.remove("onda-1");
        document.getElementById("onda2").classList.remove("onda-1");
        document.getElementById("onda3").classList.remove("onda-1");
        document.getElementById("onda4").classList.remove("onda-1");
        document.getElementById("onda1").classList.remove("onda-2");
        document.getElementById("onda2").classList.remove("onda-2");
        document.getElementById("onda3").classList.remove("onda-2");
        document.getElementById("onda4").classList.remove("onda-2");

        document.getElementById("onda1").classList.add("onda-3");
        document.getElementById("onda2").classList.add("onda-3");
        document.getElementById("onda3").classList.add("onda-3");
        document.getElementById("onda4").classList.add("onda-3");

    }

}