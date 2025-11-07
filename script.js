const botao = document.getElementById('botaoAmor');
const container = document.querySelector('.container');

botao.addEventListener('click', () => {
    // Muda a mensagem
    container.innerHTML = `
        <h1 class="titulo">Eu te amo mais do que tudo no mundo</h1>
        <p class="mensagem">Você é o meu raiozinho de sol, mesmo em dias nublados e chuvosos como tem sido essa semana</p>
    `;


    for (let i = 0; i < 30; i++) {
        criarCoracao();
    }


    setInterval(criarCoracao, 500);
});

function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('heart');
    coracao.innerHTML = '❤️';
    coracao.style.left = Math.random() * window.innerWidth + 'px';
    coracao.style.fontSize = Math.random() * 30 + 15 + 'px';
    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}
