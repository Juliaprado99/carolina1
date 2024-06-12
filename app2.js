const images = [
    'elements/fotos/1.jpeg',
    'elements/fotos/2.jpeg',
    'elements/fotos/3.jpeg',
    'elements/fotos/4.jpeg',
    'elements/fotos/5.jpeg',
    'elements/fotos/6.jpeg',
    'elements/fotos/7.jpeg',
    'elements/fotos/8.jpeg'
];

let currentIndex = 0;

const mainImage = document.getElementById('img');
const nextButton = document.getElementById('btn-action-2');

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Incrementa o índice e volta para 0 se atingir o final
    mainImage.src = images[currentIndex]; // Atualiza a src da imagem
});


