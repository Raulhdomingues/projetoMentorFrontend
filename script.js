const itensLista = document.querySelectorAll('li');
const botao = document.querySelector('button');
const telaPrincipal = document.querySelector('.tela-principal');
const tela2 = document.querySelector('.main-tela2');


function enviado () {
    botao.addEventListener('click', () => {
        telaPrincipal.style.display="none";
        tela2.style.display="block";
    })
}


itensLista.forEach((itemLista, index) => {
    itemLista.addEventListener('click', () => {
        if(itemLista.classList.contains('clicado')){
            itemLista.classList.remove('clicado');
        } else {
            itemLista.classList.add('clicado');
        }
    })
})


// itensLista.forEach(function(item) => {
//     itensLista.classList.add('clicado')
// })




// function clicado () {
//     for(let i = 0; i <= itensLista.length; i++){
//         itensLista[i].addEventListener('click', () => itensLista[i].classList.add('clicado'));
//         console.log(itensLista[i]);
//     }
// }

