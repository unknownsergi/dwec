const button = document.getElementsByTagName("button");
const envoltorio = document.getElementById("envoltorio-popup");
const cerrar = document.getElementsByClassName("cerrar-popup");

// EVENTOS
// Click sobre el botón para mostrar el pop-up

button[0].addEventListener("click", () => {
    envoltorio.style.display = "block";
});

// Añadir un listener a botón de cerrar

cerrar[0].addEventListener("click", () => {
    envoltorio.style.display = "none";
});

// Click sobre el envoltorio -> cerrar el pop-up

envoltorio.addEventListener("click", () => {
    envoltorio.style.display = "none";
});
