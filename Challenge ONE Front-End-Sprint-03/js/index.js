import { generarCategorias } from "./tarjetas.js";
import { generarCampoBusqueda, generarValidaciones } from "./busquedaYValidaciones.js";

const botonLogin = document.querySelector("#login");
botonLogin.addEventListener("click", event => {
    window.location.href = "login.html";
});

generarCampoBusqueda();

generarCategorias();

generarValidaciones();




