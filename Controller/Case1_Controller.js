const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("Funcion1")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const PResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular() {
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    //Al Frente
    let V = 340






    if ((operacion == "Doppler 1 Frente" || "Doppler 1 Atras") && !isNaN(op1) && !isNaN(op2)) {
        let ResultadoFrente;
        let ResultadoAtras;
        let Result

        switch (operacion) {
            case "Doppler 1 Frente":
                ResultadoFrente = V - op1
                Result = ResultadoFrente / op2

                break;
            case "Doppler 1 Atras":
                ResultadoAtras = V + op1
                Result = ResultadoAtras / op2
                break;
        }
        PResultado.style = "color:black"
        PResultado.innerText = "λ= " + Result.toFixed(2) + " m "
    } else {
        PResultado.style = "color:red"
        PResultado.innerText = "Calculo imposible"
    }
}

function Persona() {
    const operacion = txtOperacion.value;
    if (operacion == "Doppler 1 Atras") {
        document.getElementById("persona1").classList.add("persona1-show");
        document.getElementById("persona2").classList.remove("persona2-show");

    } else if (operacion == "Doppler 1 Frente") {
        document.getElementById("persona1").classList.remove("persona1-show");
        document.getElementById("persona2").classList.add("persona2-show");

    } else {
        document.getElementById("persona1").classList.remove("persona1-show");
        document.getElementById("persona2").classList.remove("persona2-show");
    }
}