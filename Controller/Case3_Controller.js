const buttonCalcular = document.getElementById('calcular-btn');

buttonCalcular.onclick = () => {
  const velocidadSonido = 343;// Velocidad del sonido en m/s
  const velocidadReceptor = document.getElementById('velocidad-receptor').value
  const frecuenciaEmisor = document.getElementById('frecuencia-emisor').value
  const tipoSonido = document.getElementById('tipo-sonido').value
  let frecuenciaReceptor;
  if(tipoSonido == 'a'){
    frecuenciaReceptor = frecuenciaEmisor * (velocidadSonido + (velocidadReceptor))/velocidadSonido;
  }else if(tipoSonido == 'b'){
    frecuenciaReceptor = frecuenciaEmisor * (velocidadSonido + (velocidadReceptor * -1))/velocidadSonido;
  }else{
    frecuenciaReceptor = 'Tipo de sonido invalido';
  }
  console.log("La frecuencia del receptor es: ", frecuenciaReceptor," Hz");

}