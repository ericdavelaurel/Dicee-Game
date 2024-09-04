// var randomNumber1 = Math.random();
// randomNumber1 = (randomNumber1 * 6) + 1;
// randomNumber1 = Math.trunc(randomNumber1);


// if (randomNumber1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// }
// else if (randomNumber1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// }
// else if (randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// }
// else if (randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }
// else if (randomNumber1 === 6) {
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }

var randomNumber1 = Math.trunc(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.trunc(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

