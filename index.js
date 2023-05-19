const contenedor = document.getElementById("contenedor");
let exploto=false;

bomba(3);



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
            exploto=true;
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

const btn = document.getElementById("btn");
/*btn.addEventListener("click",(e)=>{
    console.log("aprete");
});*/
