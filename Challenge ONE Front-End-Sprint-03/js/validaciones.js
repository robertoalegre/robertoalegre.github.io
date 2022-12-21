export const validar = input => {
    const tipoDeInput = input.dataset.tipo;
    console.log(input.validity);
    if (input.validity.valid) {
        if (tipoDeInput === "mensaje") {
            input.parentElement.classList.remove("formulario__campos--mensaje--invalid");
        } else {
            input.parentElement.classList.remove("formulario__campos--invalid");
        }
    }
    else {
        if (tipoDeInput === "mensaje") {
            input.parentElement.classList.add("formulario__campos--mensaje--invalid");
        } else {
            input.parentElement.classList.add("formulario__campos--invalid");
        }
        input.parentElement.querySelector(".input-message-error").innerHTML = mensaje(input, tipoDeInput);
    };
};

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio"
    },
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "No es un formato de email valido"
    },
    password: {
        valueMissing: "El campo password no puede estar vacio",
        patternMismatch: "1 minuscula, 1 mayuscula, 1 número, sin caracteres especiales"
    },
    imagen: {
        valueMissing: "Complete la URL de la imagen"
    },
    categoria: {
        valueMissing: "El campo categoría no puede estar vacio"
    },
    precio: {
        valueMissing: "Complete el precio del producto",
        patternMismatch: "Indique el precio con 2 decimales"
    },
    descripcion: {
        valueMissing: "El campo descripcion no puede estar vacio"
    },
};

const mensaje = (input, tipoDeInput) => {
    let mensaje = "";
    tipoDeError.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        };
    });
    return mensaje;
};