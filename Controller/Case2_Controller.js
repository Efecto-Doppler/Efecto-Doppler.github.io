function calcular() {

    var f = document.getElementById("f").value;
    var ve = document.getElementById("ve").value;



    if (f != 0 || ve != 0 || vr != 0) {
        const vs = 340;
        var resultado = Number(((vs) / (vs + parseFloat(ve))) * parseFloat(f));
        document.getElementById("resultado").value = Math.round(resultado).toFixed(2) + " Hz";
        document.getElementById("ve").value = "";
        document.getElementById("f").value = "";

    } else {
        document.getElementById("resultado").value = "ingrese valores!";
    }

}