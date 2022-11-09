var array;

function cargarPagina(){
    array = [
        {nombre: "Angel", codigo:"192108", doc: "124124", prog:"Ing. de sistemas"},
        {nombre: "Andres", codigo:"192108", doc: "124124", prog:"Ing. de sistemas"},
        {nombre: "Boada", codigo:"192108", doc: "124124", prog:"Ing. de sistemas"}
    ]
}


function calcular(){
    let nombre = $("#nombre").val(); // captura del nombre
    for(let i = 0; i<array.length; i++){
        if(nombre == array[i].nombre){           // busca a nombre en la posicion i en array.
            console.log("EL NOMBRE ENCONTRADO ES: " + nombre);
            break;
        }
        else{
            console.log("EL NOMBRE "+ nombre + " NO HA SIDO ENCONTRADO");
        }
    }
}