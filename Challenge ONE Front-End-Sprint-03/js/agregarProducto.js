import { generarCampoBusqueda, generarValidaciones } from "./busquedaYValidaciones.js";

const botonMenuAdmin = document.querySelector("#botonMenuAdmin");
botonMenuAdmin.addEventListener("click", event => {
    window.location.href = "productos.html";
})

generarCampoBusqueda();

generarValidaciones();




