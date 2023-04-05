const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");

let contador = 0;

abrir.addEventListener("click", () => {
    contador ++;
    if (contador % 2 != 0){
        nav.classList.add("visible");
    } else  {
        nav.classList.remove("visible");
    }
    console.log(contador);
});
