
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "Dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/Dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  var p1=document.getElementById("p1");
  p1.innerHTML="Player 1 Wins";
  p1.style.color="#FFC0CB";
}
else if (randomNumber2 > randomNumber1) {
    var p2=document.getElementById("p2");
    p2.innerHTML="Player 2 Wins";
    p2.style.color="#00FF7F";
  
}
else {
  var draw = document.querySelector("h2");
  draw.style.color="#FF69B4";
  draw.innerHTML="Draw!!!";

  let gif = document.createElement("img");
  gif.src = "https://media.giphy.com/media/Lm5xjVY7wxE9lgAbzN/giphy.gif?cid=790b7611lecba7gsiw22w10k29q6kr4qq6ick75am5vehjqv&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // Change this to your GIF path or URL
  gif.alt = "Draw Animation";
  gif.style.width = "200px"; // Adjust size
  gif.style.display = "block";
  gif.style.margin = "20px auto"; // Center the GIF

  // Append to the body or a specific container
  document.body.appendChild(gif);


}
