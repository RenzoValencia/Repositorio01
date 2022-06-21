function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var correo = document.getElementById("correo").value;
    const datos = {'movil' :movil, 'correo':correo};
    localStorage.setItem(nombre,JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("correo").value = "";
    actualizarDatos();
}

function recuperarDatos() {
    var nombre = document.getElementById("nombre").value;
    var datos = JSON.parse(localStorage.getItem(nombre));
    localStorage.getItem(nombre);
    document.getElementById("movil").value = datos.movil;
    document.getElementById("correo").value = datos.correo;
    
}

function eliminarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    actualizarDatos();
}

function aliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro = "";
    if (localStorage.length == 0) {
        registro += '<li>Vacio</li>';
    } else {
        for(var i = 0;  i <=localStorage.length -  1; i++){
            var key = localStorage.key(i);
            var datos =localStorage.getItem(key);
            datos = JSON.parse(datos);
            registro += '<li>' + '<span class="nom">' + key + '</span>'
            + '<span class="nom">' + datos.movil + '</span>' +'<span class="nom">' + datos.correo + '</span>' +'</li><br>';
        }
    }
  
    document.getElementById('contactos').innerHTML = registro;
}