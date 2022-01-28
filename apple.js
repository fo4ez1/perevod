window.onload = function () {
    let words = ["apple", "pear", "mouse", "house","dog"];
    let images = document.getElementsByTagName("img");
    gen(words);
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = checkWord;
    }
};

function checkWord(event) {
    let question = prompt("Введите слово на английском языке");
    let image = event.target;
    let word = image.id;
    if (question == word) {
        alert("Верно!");
    }
    else {
        alert("Неверно! Верный перевод слова - " + word);
    }
    // alert(word);
}

function gen(words) {
    for (let i = 0; i < 3; i++) {
        let rand1 = Math.floor(Math.random() * words.length);
        document.write(`<img src="images/${words[rand1]}.png" id="${words[rand1]}" width="300" height="300">`);
        words.splice(rand1, 1);
    }

}