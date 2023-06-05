const botonAviso = document.getElementById("cerrar-aviso");
const ventanaModal = document.getElementById("ventana-modal");
const fondoModal = document.getElementById("fondo-modal");
if (!sessionStorage.getItem("ventana-modal-visto")) {
    ventanaModal.classList.add("activo")
    fondoModal.classList.add("activo")
}
botonAviso.addEventListener("click", () => {
    ventanaModal.classList.remove("activo");
    fondoModal.classList.remove("activo");
    sessionStorage.setItem("ventana-modal-visto", true)
})

//boton 1
document.getElementById('btnsaludo').onclick = function () {
    alert('Saludos, Gracias por visitar GATco!');
}

//modal 2
var modal = document.getElementById("ventanaModal");
var boton = document.getElementById("abrirModal");
var span = document.getElementsByClassName("cerrar")[0];

boton.addEventListener("click", function () {
    modal.style.display = "block";
});
span.addEventListener("click", function () {
    modal.style.display = "none";
});
