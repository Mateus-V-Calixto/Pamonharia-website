/*Sistema carrosel*/ 
const controls = document.querySelectorAll(".control");

let itemAtual = 0;

const itens = document.querySelectorAll(".card");
const maxItens = itens.length;

console.log(maxItens);

console.log(controls);

controls.forEach((controle) => {
    controle.addEventListener("click", (e) => {
        Esquerda = e.target.classList.contains("btn-esquerdo");

        console.log(Esquerda);

        if (Esquerda) {
            itemAtual -= 1;
        }else{
            itemAtual += 1;
        }

        if ( itemAtual >= maxItens) {
            itemAtual = 0
        }

        if (itemAtual < 0) {
            itemAtual = maxItens -1
        }


        itens[itemAtual].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });
    })
})

/*whats*/
const btnWhats = document.querySelectorAll(".btn-whats");

btnWhats.forEach((btn) => {
    btn.addEventListener("click", (e)=> {
        window.location.assign("https://api.whatsapp.com/message/M46WSHNRQK4QH1?autoload=1&app_absent=0");
    })
})