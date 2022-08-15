var menu = ["1) agregar componente", "2) eliminar componente", "3) mostrar componentes", "4) salir"];
var componentes = [];
var opcion = "";
var nombre = "";
var precio = 0;
var eliminar = "";
var contador = 0;


do {
    opcion = prompt("Ingrese una opcion: " + menu);
    switch (opcion) {
        case "1":
            nombre = prompt("Ingrese el nombre del componente: ");
            precio = prompt("Ingrese el precio del componente: ");
            componentes.push({ nombre: nombre, precio: precio });
            break;
        case "2":
            eliminar = prompt("Ingrese el nombre del componente que desea eliminar: ");
            for (var i = 0; i < componentes.length; i++) {
                if (componentes[i].nombre == eliminar) {
                    componentes.splice(i, 1);
                }
            }
            break;
        case "3":
            for (var i = 0; i < componentes.length; i++) {
                console.log(componentes[i].nombre + " " + componentes[i].precio);
            }
            break;
        case "4":
            break;
        default:
            alert("Opcion no valida");
    }
} while (opcion != "salir");
