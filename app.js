const info = ['animations', 'web development', 'design'];
let counter = 0;
let index = 0;
let currentText = '';
let letter = '';

(function typing() {
    if(counter === info.length) {
        counter = 0;
    }
    currentText = info[counter];
    letter = currentText.slice(0, ++index)

    document.querySelector('.type').textContent = letter;

    if(letter.length === currentText.length) {
        counter++;
        index = 0;
    }

    setTimeout(typing, 300)
}())