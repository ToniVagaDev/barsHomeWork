function createRandom(text, color) {
    const textElement = document.createElement('div');
    textElement.className = 'random-text';
    textElement.style.color = color
    textElement.textContent = text;
    const x = Math.random() * window.innerWidth; 
    const y = Math.random() * window.innerHeight; 

    textElement.style.left = `${x}px`;
    textElement.style.top = `${y}px`;

    document.body.appendChild(textElement);
}

document.getElementById('btn1').addEventListener('click', function () {
    console.log('Клик по кнопке 1!');
    createRandom('Клик по кнопке 1!','white');
});

document.getElementById('btn2').addEventListener('click', function () {
    console.log('Клик по кнопке 2!');
    createRandom('Клик по кнопке 2!','blue');
});

document.getElementById('btn3').addEventListener('click', function () {
    console.log('Клик по кнопке 3!');
    createRandom('Клик по кнопке 3!','red');
});