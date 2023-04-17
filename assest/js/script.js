
const consultarDigimon = () => {

    let nombreParaConsultar = document.getElementById('nombreProporcionado').value;
    let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/'+nombreParaConsultar;

    fetch(endpoint)
    .then(respuestaDigimon => respuestaDigimon.json() )
    .then(dataDigimon => {

        console.log(dataDigimon);
        console.log(dataDigimon[0].name);

       
        let nombreRecuperado = dataDigimon[0].name;
        let nivelRecuperado = dataDigimon[0].level;
        let imagenRecuperada = dataDigimon[0].img;
        let etiquetaNombre = document.getElementById('nombreDigimon');
        etiquetaNombre.innerHTML = nombreRecuperado;
        let etiquetaNivel = document.getElementById('nivelDigimon');
        etiquetaNivel.innerHTML = nivelRecuperado;
        let etiquetaImagen = document.getElementById('imagenDigimon');
        etiquetaImagen.src = imagenRecuperada;

     });

};