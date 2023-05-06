const VELOCIDAD_SONIDO = 343;
// Función para calcular la frecuencia observada
function frecuenciaReceptor(frecuenciaEmisor, velocidadReceptor) {
    return frecuenciaObservada;
  }

const buttonCalcular = document.getElementById('calcular-btn')

buttonCalcular.onclick = (() => {
  const velocidadReceptor = document.getElementById('velocidad-receptor').value
  const frecuenciaEmisor = document.getElementById('frecuencia-emisor').value
  const tipoSonido = document.getElementById('tipo-sonido').value

  console.log(velocidadReceptor)
  console.log(frecuenciaEmisor)
  console.log(tipoSonido)
})