let turno2 = "si";

const alertas = document.querySelector(".boton__turno");
alertas.addEventListener("click", pedirTurnos);

function pedirTurnos() {
    for (let turno = 13; turno <= 20; turno++) {
        class Persona {
            constructor(nombre, edad, email) {
                this.nombre = nombre;
                this.edad = edad;
                this.email = email;
            }
        }

        const persona1 = new Persona(prompt("¿Cuál es su nombre"), parseInt(prompt("¿Qué edad tiene?")), prompt("¿Cuál es su email?"))

        while (turno2 === "si") {
            edad = persona1.edad
            {
                if (edad < 18) {
                    let nombre = persona1.nombre;
                    let mensaje = `Asiganado turno para pediatria a las ${turno} horas, Nombre: ${nombre}, le enviaremos un email al siguiente correo electronico ${persona1.email}`;
                    alert(mensaje)
                    break;
                }
                if (edad >= 18) {
                    let nombre = persona1.nombre;
                    let mensaje = `Asiganado turno a las ${turno} horas, Nombre: ${nombre}, le enviaremos un email al siguiente correo electronico ${persona1.email}`;
                    alert(mensaje)
                    break;
                }
                else {
                    alert("Usted no ingreso un número")
                    break;
                }
            }
        }
        turno2 = prompt("Si quiere pedir otro turno, escribir si para continuar o no para salir").toLowerCase()
        if (turno2 === "no") {
            break;
        }

    }
}



const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
    botonColorMode.innerText = "Cambiar a Light Mode";
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
    botonColorMode.innerText = "Cambiar a Dark Mode";
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})