class Planeta {
    constructor(nombre, distanciaAlSol, tamañoRelativo, fechaDescubrimiento) {
        this.nombre = nombre;
        this.distanciaAlSol = distanciaAlSol;
        this.tamañoRelativo = tamañoRelativo;
        this.fechaDescubrimiento = new Date(fechaDescubrimiento);
        //Uso toLocaleDateString para fer la fecha en el formato español
        this.fechaDescubrimiento = this.fechaDescubrimiento.toLocaleDateString("es-ES");
    }

    // Creo una funcion para despues mostrar la informacion de lo splanetas
    mostrarInfoPlaneta() {
        console.log(`Planeta: ${this.nombre}`);
        console.log(`Distancia al Sol: ${this.distanciaAlSol} millones de kilómetros`);
        console.log(`Tamaño relativo: ${this.tamañoRelativo} veces el tamaño de la Tierra`);
        console.log(`Fecha de descubrimiento: ${this.fechaDescubrimiento}`);
        console.log(" ");
    }
}

// Creo los planetas a partir de la clase Planeta de arriba (esta comendato porque lei tarde que tenia que inicializar los planetas con un bucle :( )
// const planetas = [
//     new Planeta("Mercurio", 57.91, 0.383, "1631-11-07"),
//     new Planeta("Venus", 108.2, 0.949, "1610-03-12"),
//     new Planeta("Tierra", 149.6, 1, null),
//     new Planeta("Marte", 227.9, 0.532, "1659-12-26"),
//     new Planeta("Jupiter", 778.3, 11.21, "1610-01-07"),
// ];

// Creacion de planetas bien hecha
// Creo un array con los datos de los planetas
const planetasData = [
    ["Mercurio", 57.91, 0.383, "1631-11-07"],
    ["Venus", 108.2, 0.949, "1610-03-12"],
    ["Tierra", 149.6, 1, null],
    ["Marte", 227.9, 0.532, "1659-12-26"],
    ["Jupiter", 778.3, 11.21, "1610-01-07"],
];

// Recorro el array de datos de los planetas y creo un planeta por cada uno (como toca)
const planetas = [];
for (const planetaData of planetasData) {
    const planeta = new Planeta(...planetaData);
    planetas.push(planeta);
}

// Usando la funcion de mostrarInformacion() de la clase Plaenta muestro la informacion con un for
console.log("Información de los planetas del Sistema Solar:");
//   for (const planeta of planetas) {
//     planeta.mostrarInformacion();
//   }
// Aqui simplemente muestro que podia haber usado un for of, pero tambien un forEach
planetas.forEach((planeta) => planeta.mostrarInfoPlaneta());

// Ordeno los planetas por distancial sl sol con sort y una funcion normal
planetas.sort(function(a, b) {
  if (a.distanciaAlSol < b.distanciaAlSol) {
    return -1;
  } else if (a.distanciaAlSol > b.distanciaAlSol) {
    return 1; 
  } else {
    return 0; 
  }
});

// Simplemente muestro los planetas ordenados
console.log("Información de los planetas ordenados por distancia al Sol:");
for (const planeta of planetas) {
    planeta.mostrarInfoPlaneta();
}
