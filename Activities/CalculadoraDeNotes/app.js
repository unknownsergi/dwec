// Declaro las variables que voy a utilizar.
let nomEstudiant = "Joan";
let notaExamen1 = 5;
let notaExamen2 = 5;
let notaProjecte = 9;

// Claculo la nota final del estudiante.
let notaFinal = notaExamen1 * 20 + notaExamen2 * 20 + notaProjecte * 60;
notaFinal = notaFinal / 100;

// Muestro por consola los resultados obtenidos y si el estudiante ha aprobado o no.
console.log("Estudiant: " + nomEstudiant);
console.log("Nota de l'Examen 1: " + notaExamen1);
console.log("Nota de l'Examen 2: " + notaExamen2);
console.log("Nota del Projecte: " + notaProjecte);
console.log("Nota Final: " + notaFinal);

// Compruebo si el estudiante ha aprobado o no y muestro el mensaje correspondiente.
if (notaFinal >= 7) {
    console.log("Felicitats, " + nomEstudiant + "! Has aprovat el mòdul!");
} else {
    console.log("Ho sento," + nomEstudiant + "necessites millorar la teva nota per a aprovar el mòdul.");
}
