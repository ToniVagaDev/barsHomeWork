const secretCode = 'барс';
let inputSequence = '';

document.addEventListener('keydown', function(event) {
    inputSequence += event.key;
    if (inputSequence.length > secretCode.length) {
        inputSequence = inputSequence.slice(1);
    }

    if (inputSequence === secretCode) {
        document.getElementById('message').style.display = 'block';
    }
});