const contenedor = document.getElementById("contenedor");

bomba(10);
setTimeout(conectarBoton, 10000);

/* La función bomba() recibe como parametro un entero que es la cantidad de segundos desde donde empieza la cuenta regresiva. 
la variable intervalo es una funcion setIntervalo que se encarga de esperar los 1000 milisegundos después de ejecutarse, esto genera el efecto cuenta regresiva.
Esta función se ejecuta una y otra vez, con retardo de 1000 ms.
La cuenta regresiva esta compuesta por la constante cuadrado, que crea un div que le agrega una clase llamada cuadrado. 
Y mientras "i" no llegue a 0 van a ir apareciendo cada 1 segundo. Cuando llegua a 0, se borran todos los elementos del contenedor y la variable intervalo, 
(los div de clase cuadrado), y se crea otro div con la clase "imgBomba", reutilizo la variable cuadrado,
esta clase tiene la imagen de la bomba y un boton. Afuera del if hago el appendChild().
*/

function bomba(i){              
    let intervalo = setInterval(function() {
        const cuadrado = document.createElement("div");
        if (i === 0) {
            clearInterval(intervalo); 
            resetearContenedor(contenedor);
            cuadrado.classList.add("imgBomba");
            cuadrado.innerHTML=`
                <img src="https://cdn.pixabay.com/photo/2014/08/14/11/14/explosion-417894_1280.png" alt="EXPLOTO LA BOMBA">
                <button id="btn">REINICIAR</button>
            `
        } else {
            cuadrado.classList.add("cuadrado");
            cuadrado.innerHTML=`
                <h2>${i}</h2>
            `
            i--;
        }
        contenedor.appendChild(cuadrado);
    }, 1000);
}

function resetearContenedor(elemento){
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
      }
}


let btn;

/* La funsión conectarBoton() conecta el boton creado por la bomba con el java. tiene un retraso de 10 segundos que es lo que tarda en 
explotar la bomba y después de eso verifica cada 0,1 segundo que haya explotado para poder escuchar el evento clic*/

function conectarBoton() {
    btn = document.getElementById("btn");
    if (btn) {
        btn.addEventListener("click", (e)=> {
            resetearContenedor(contenedor);
            bomba(10);
            setTimeout(conectarBoton, 10000);
        });
    } else {
        setTimeout(conectarBoton, 100); 
    }
}
