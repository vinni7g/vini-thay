const dataInicial = new Date(2024, 10, 15, 20, 30, 0);

function atualizarContador() {
    const agora = new Date();

    if (agora < dataInicial) {
        document.getElementById("contador").innerHTML = "A data ainda não chegou!";
        return;
    }

    const anos = agora.getFullYear() - dataInicial.getFullYear();
    const mesesTotais = (anos * 12 + agora.getMonth()) - dataInicial.getMonth();

    const diferenca = agora - dataInicial;
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24) % 30;
    const horas = Math.floor((diferenca / 1000 / 60 / 60) % 24);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `${mesesTotais} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; 

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(criarCoracao, 300);
