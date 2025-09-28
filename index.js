let images = [
    "/images/dice1.png",
    "/images/dice2.png",
    "/images/dice3.png",
    "/images/dice4.png",
    "/images/dice5.png",
    "/images/dice6.png"
]

let randomIndex1 = Math.floor(Math.random() * images.length);

document.querySelector('.img1').src = images[randomIndex1];

randomIndex2 = Math.floor(Math.random() * images.length);

document.querySelector('.img2').src = images[randomIndex2];

if (randomIndex1 > randomIndex2) {
      document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    } else if (randomIndex2 > randomIndex1) {
      document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").textContent = "Draw!";
    }