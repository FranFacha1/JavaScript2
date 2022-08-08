let iniciar = Boolean(prompt("¿Desea comprar algun repuesto?"));
let repuestoAuto;
let precioRepuestos = 0;
let precioTotalRepuesto = 0;

while(iniciar == true) {

    repuestoAuto = prompt(`
      ¿Que repuesto estaria buscando?
       Amortiguadores
       Frenos
       Capo
       Espejos
       Radiador
       
    `)

    switch(repuestoAuto) {
        case "Amortiguadores":
        case "amortiguadores":
            precioRepuestos = 6500;
            alert(`El precio es ${precioRepuestos}`)
        break;
        
        case "Frenos":
        case "frenos":     
            precioRepuestos = 5000;
            alert(`El precio es ${precioRepuestos}`)
        break;

        case "Capo":
        case "capo":         
            precioRepuestos = 10000;
            alert(`El precio es ${precioRepuestos}`)
            break;
        case "Espejos":
        case "espejos": 
            precioRepuestos= 35000;
            alert(`El precio es ${precioRepuestos}`)
            break;

        case "Radiador":
        case "radiador":     
            precioRepuestos = 20000; 
            alert(`El precio es ${precioRepuestos}`)
            break;
    }
    alert(`El precio total ${SumarRepuestos(precioRepuestos)}`);
    iniciar = Boolean(prompt("¿Necesita algun repuesto mas?"));
}



function SumarRepuestos(precioRepuestos) {
    return precioTotalRepuesto = precioRepuestos + precioTotalRepuesto;
}