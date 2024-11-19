const noButton = document.getElementById("noButton");
let moveDistance = 50; // Distância inicial de fuga em pixels

noButton.addEventListener("mouseover", () => {
    // Obter as dimensões da janela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Gerar um ângulo aleatório para a direção do movimento
    const angle = Math.random() * 2 * Math.PI;
    const deltaX = moveDistance * Math.cos(angle);
    const deltaY = moveDistance * Math.sin(angle);

    // Calcular nova posição
    const currentLeft = noButton.offsetLeft;
    const currentTop = noButton.offsetTop;
    const newLeft = currentLeft + deltaX;
    const newTop = currentTop + deltaY;

    // Mover o botão
    noButton.style.position = "absolute";
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;

    // Aumentar a distância de fuga em cada tentativa
    moveDistance += 20;

    // Fazer o botão sumir se estiver fora da tela
    if (newLeft < -100 || newLeft > windowWidth + 100 || newTop < -100 || newTop > windowHeight + 100) {
        noButton.style.display = 'none'; // Esconder o botão se estiver fora da tela
    }
});
