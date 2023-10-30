const itensLista = document.querySelectorAll('li');
const botao = document.querySelector('button');
const telaPrincipal = document.querySelector('.tela-principal');
const tela2 = document.querySelector('.main-tela2');
const textoDinamico = document.querySelector('span');

function enviado () {
    botao.addEventListener('click', () => {
        telaPrincipal.style.display="none";
        tela2.style.display="block";
    })
    const valorSelecionado = document.querySelector('.clicado');
    console.log(valorSelecionado.textContent)

    textoDinamico.textContent = valorSelecionado.textContent;
}


itensLista.forEach((itemLista) => {
    itemLista.addEventListener('click', () => {
        itensLista.forEach((item) => {
            item.classList.remove('clicado');
        });
        itemLista.classList.add('clicado');
    });
});
