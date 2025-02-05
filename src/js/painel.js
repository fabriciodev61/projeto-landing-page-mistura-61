/*
    Quando clicar na seta pra avançar, temos que esconder todas as imagens e mostrar a próxima imagem

        a imagem atual começa em 0 por que é a primeira imagem
        e assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem

        Esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar

        Mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/*
    Quando clicar na seta pra avançar, temos que esconder todas as imagens e mostrar a próxima imagem
*/
setaAvancar.addEventListener('click', function () {

    // Testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    /*
        a imagem atual começa em 0 por que é a primeira imagem
        e assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem
    */
    imagemAtual++;

    esconderImagens();
    mostrarImagem();
});

/*
    Quando clicar na seta pra voltar temos que esconder todas
    as imagens e mostrar a imagem anterior
*/

setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
})

