import { validar } from "./validaciones.js";

export const generarCampoBusqueda = () => {
    const encabezadoBusqueda = document.querySelector(".encabezado__busqueda");
    const encabezadoLupa = document.querySelector(".encabezado__lupa");

    encabezadoLupa.addEventListener("click", event => {
        encabezadoBusqueda.classList.toggle("mostrar");
    });
}


export const generarValidaciones = () => {
    const campos = document.querySelectorAll(".formulario__entrada");

    campos.forEach(campo => {
        campo.addEventListener("blur", event => {
            validar(event.target);
        });
    });
};
