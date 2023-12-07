const apiURL = 'http://localhost:3000/listado';

//Dar de baja un registro
function borrarDato(){
    // Obtener los valores del formulario
    var idBaja = document.getElementById("idBaja").value;

    // Realizar una solicitud DELETE al servidor
    fetch('http://localhost:3000/listado/'+idBaja, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        //Nos redirige a la pagina principal
        window.location.href = "index.html";
    })
    .catch(error => console.error('Error:', error));


}


//Registro nuevo
function enviarDatos() {
    
    // Obtener los valores del formulario
    var name = document.getElementById("nombreAlta").value;
    var Anime = document.getElementById("animeAlta").value;
    var Descripcion = document.getElementById("descripcionAlta").value;

    // Crear un objeto JSON con los datos del formulario
    var datosJSON = {
        name: name,
        Anime: Anime,
        Descripcion: Descripcion
    };

    // Realizar una solicitud POST al servidor
    fetch('http://localhost:3000/listado', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosJSON)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        window.location.href = "index.html";
    })
    .catch(error => console.error('Error:', error));

    
}




//Actualizar un registro
function actualizarDatos() {
    
    // Obtener los valores del formulario
    var idUpdate = document.getElementById("idUpdate").value;
    var name = document.getElementById("nombreUpdate").value;
    var Anime = document.getElementById("animeUpdate").value;
    var Descripcion = document.getElementById("descripcionUpdate").value;

    // Crear un objeto JSON con los datos del formulario
    var datosJSON = {
        name: name,
        Anime: Anime,
        Descripcion: Descripcion
    };

    // Realizar una solicitud PATCH al servidor
    fetch('http://localhost:3000/listado/'+idUpdate, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosJSON)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        window.location.href = "index.html";
    })
    .catch(error => console.error('Error:', error));

    
}




//Obtencion y mostrar los registros en index
fetch(apiURL).then(response => {
    if(!response.ok){
        throw new Error('Error de red: ${response.status}');
    }
    return response.json();
}).then(data =>{
    console.log('Datos de la API:',data);
data.forEach(estudiante=>{
    const nombre = estudiante.name;
    const Descripcion = estudiante.Descripcion;
    const Anime = estudiante.Anime;
    
    const mensaje = document.getElementById('sentenciaMongo');

    const scriptHTML = '<div class="card" style="width: 18rem; float: left; margin: 1em;"><img src="imagenes/'+nombre+'.jpg" class="card-img-top" alt=" Recurso no encontrado"><div class="card-body"><h3 class="card-title">'+nombre+'</h3><h5 class="card-text">'+Anime+'</h5><p class="card-text">'+Descripcion+'</p></div></div>';
    
    

    mensaje.innerHTML += scriptHTML;

});

}).catch(error=>{
    console.error('Error al obtener datos:',error);
});