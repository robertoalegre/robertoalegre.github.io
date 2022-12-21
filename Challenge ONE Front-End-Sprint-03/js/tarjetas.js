import { productos } from "./productos.js";
import { categorias } from "./categorias.js";

const categoriasElement = document.querySelector(".categorias");

const generarTarjetas = (categoria) => {
    let prodFiltrados = [];
    if (categoria === "todas") {
        prodFiltrados = productos;
    } else {
        prodFiltrados = productos.filter(producto => producto.categoria === categoria);
    }
    let contenido = "";
    prodFiltrados.forEach(producto => {
        contenido += `
        <div class="tarjeta">
                    <img src="${producto.imagen}" alt="">
                    <h4>Producto XYZ</h4>
                    <h4>$60,00</h4>
                    <a href="#">Ver Producto</a>
        </div>`
    });
    return contenido;
};

export const generarCategorias = () => {
    categorias.forEach(categoria => {
        const tarjetas = generarTarjetas(categoria);
        const cat = categoria[0].toUpperCase() + categoria.substring(1).toLowerCase();
        const div = document.createElement("div");
        div.classList.add("container");
        const contenido = `
            <div class="titulo">
                <h2>${cat}</h2>
                <button class="tema__btn">Ver todo<img class="titulo__flecha" src="./imagenes/flecha.png" alt=""></button>
            </div>
            <div class="tarjetas">
                ${tarjetas}
            </div>`
        div.insertAdjacentHTML("beforeend", contenido);
        const btn = div.querySelector(".tema__btn");
        
        btn.addEventListener("click", event => {
            const divTargetas = event.target.parentElement.parentElement.querySelector(".tarjetas");
            divTargetas.classList.toggle("mostrar__todo");
            event.target.innerHTML = "";
            if (divTargetas.classList.contains("mostrar__todo")) {
                event.target.insertAdjacentHTML("beforeend", `Ver menos<img class="titulo__flecha" src="./imagenes/flecha.png">`);
            } else {
                event.target.insertAdjacentHTML("beforeend", `Ver todo<img class="titulo__flecha" src="./imagenes/flecha.png">`);
            }
        });

        categoriasElement.appendChild(div);
    });
};

export const generarTodasLasCategorias = () => {
    const tarjetasElement = document.querySelector(".tarjetas");
    const agregar = document.querySelector(".titulo__agregar");
    agregar.addEventListener("click", event => {
        window.location.href = "agregarProducto.html";
    })
    const tarjetas = generarTarjetas("todas");
    tarjetasElement.insertAdjacentHTML("beforeend", tarjetas);
};






