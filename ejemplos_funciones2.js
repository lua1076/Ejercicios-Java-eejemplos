/**
 * Comprueba si el valor pasado es un número entero
 * @param {Number} numero - el número a comprobar
 * @returns Boolean - true si es un número, false si no lo es
 */
function isNumeroEntero(numero){
    if(isNaN(Number(numero)) || isNaN(parseInt(numero))) {
        return false;
    } else {
        return true;
    }
    //return (isNaN(Number(numero)) || isNaN(parseInt(numero))) == false; 
}

function mostrarEntre0yNum1() {
    const numero = document.getElementById('numero1');
    //if(!isNumeroEntero(numero.value)) {
    if(isNumeroEntero(numero.value) == false) {
        noEsValido(numero, "El número 1 no es válido");
        return;
    }
    const resultado = document.getElementById("resultado");
    resultado.textContent = "";
    for (let i = 0; i <= numero.value; i++) {
        const p = crearP(i);
        resultado.appendChild(p);
        // resultado.appendChild(crearP(i));
    }
}

/**
 * Crea una etiqueta p con el valor indicado
 * @param {Any} valor - el valor a añadir al párrafo como contenido 
 * @returns HTMLElement - el párrafo creado
 */
function crearP(valor) {
    const p = document.createElement("p");
    p.style.display = "inline-block";
    p.style.margin = "5px";
    p.style.color = "lime";
    p.textContent = valor;
    return p;
}

/**
 * Muestra un mensaje de advertencia y le da el foco al elemento
 * @param {HTMLElement} elemento - el elemento a darle el foco
 * @param {String} mensaje - El mensaje a mostrar
 */
function noEsValido(elemento, mensaje) {
    window.alert(mensaje);
    elemento.focus();
    elemento.select();
}

function mostrarEntreNum1yNum2() {
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    if(isNumeroEntero(numero1.value) == false) {
        noEsValido(numero1, "El número 1 no es válido");
        return;
    }
    if(isNumeroEntero(numero2.value) == false) {
        noEsValido(numero2, "El número 2 no es válido");
        return;
    }
    const resultado = document.getElementById("resultado");
    resultado.textContent = "";
    for (let i = numero1.value; i <= numero2.value; i++) {
        const p = crearP(i);
        resultado.appendChild(p);
    }
}

function marcarPares() {
    const resultado = document.getElementById("resultado");
    // Comprobamos si resultado tiene nodos hijos
    if(resultado.hasChildNodes() == false) {
        window.alert("No hay números que marcar");
        return;
    }
    const ps = resultado.getElementsByTagName('p');
    for (const p of ps) {
        if(p.textContent % 2 == 0) {
            p.style.fontWeight = "bold";
        }
    }
}

function cambiarColor() {
    const colores = document.getElementById('colores');
    // selectedIndex devuelve la posición / índice del elemento seleccionado, 
    // comenzando en 0 (-1 si no hay ninguno seleccionado)
    if(colores.value != "") { //if(colores.selectedIndex != 0) {
        // Cambiamos el color del body
        document.body.style.backgroundColor = colores.value;
    }
}

function cambiarTipoLetra() {
    const tipoLetra = document.getElementById('tipoLetra');
    if(tipoLetra.value != "") { // if(tipoLetra.selectedIndex != 0) {
        document.body.style.fontFamily = tipoLetra.value;
    }
}

document.getElementById('entre0yNum1').addEventListener("click", mostrarEntre0yNum1);
document.getElementById('entreNum1yNum2').addEventListener("click", mostrarEntreNum1yNum2);
document.getElementById('marcarPares').addEventListener("click", marcarPares);
document.getElementById('colores').addEventListener("change", cambiarColor);
document.getElementById('tipoLetra').addEventListener("change", cambiarTipoLetra);


