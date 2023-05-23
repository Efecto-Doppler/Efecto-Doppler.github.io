const buttonCalcular = document.getElementById('calcular-btn');
const resultado = document.getElementById('resultado');

buttonCalcular.onclick = () => {
  const velocidadSonido = 343;// Velocidad del sonido en m/s
  const velocidadReceptor = document.getElementById('velocidad-receptor').value
  const frecuenciaEmisor = document.getElementById('frecuencia-emisor').value
  const tipoSonido = document.getElementById('funcion1').value

  resultado.style.display = 'block';
  if (velocidadReceptor == '' || frecuenciaEmisor == '' || tipoSonido == '') {
    resultado.innerHTML = 'Por favor, ingrese todos los datos';
    return;
  }
  let frecuenciaReceptor;

  if(tipoSonido == 'frente'){
    frecuenciaReceptor = frecuenciaEmisor * (velocidadSonido + (velocidadReceptor))/velocidadSonido;
  }else if(tipoSonido == 'atras'){
    frecuenciaReceptor = frecuenciaEmisor * (velocidadSonido + (velocidadReceptor * -1))/velocidadSonido;
  }
  console.log("🚀 ~ file: Case3_Controller.js:21 ~ frecuenciaReceptor:", frecuenciaReceptor)
  // Redondear resultado
  frecuenciaReceptor = Math.round(frecuenciaReceptor)

  resultado.innerHTML = `La frecuencia del sonido que escucha el receptor es de ${frecuenciaReceptor} Hz`;
  // display resultado
}