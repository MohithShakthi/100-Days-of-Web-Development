let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;
console.log(num1,num2);
if(num1 == 1){
    document.querySelector(".one img").setAttribute("src","./images/dice1.png");
}
else if(num1 == 2){
    document.querySelector(".one img").setAttribute("src","./images/dice2.png");
}
else if(num1 == 3){
    document.querySelector(".one img").setAttribute("src","./images/dice3.png");
}
else if(num1 == 4){
    document.querySelector(".one img").setAttribute("src","./images/dice4.png");
}
else if(num1 == 5){
    document.querySelector(".one img").setAttribute("src","./images/dice5.png");
}
if(num2 == 1){
    document.querySelector(".two img").setAttribute("src","./images/dice1.png");
}
else if(num2 == 2){
    document.querySelector(".two img").setAttribute("src","./images/dice2.png");
}
else if(num2 == 3){
    document.querySelector(".two img").setAttribute("src","./images/dice3.png");
}
else if(num2 == 4){
    document.querySelector(".two img").setAttribute("src","./images/dice4.png");
}
else if(num2 == 5){
    document.querySelector(".two img").setAttribute("src","./images/dice5.png");
}
if(num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
}
else if(num1 < num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}