const images = [
    'elements/recados/1.PNG',
    'elements/recados/2.PNG',
    'elements/recados/1.PNG',
    'elements/recados/4.png',
    'elements/recados/5.png',
    'elements/recados/6.png',
    'elements/recados/7.png',
    'elements/recados/8.png'
];

let currentIndex = 0;

const mainImage = document.getElementById('img');
const nextButton = document.getElementById('btn-action');

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Incrementa o índice e volta para 0 se atingir o final
    mainImage.src = images[currentIndex]; // Atualiza a src da imagem
});


