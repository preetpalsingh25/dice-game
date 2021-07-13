var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6)+1;;
console.log(randomNumber2);

var randomsource1="images/dice"+randomNumber1+".png";
var randomsource2="images/dice"+randomNumber2+".png";

document.querySelectorAll(".img")[0].setAttribute("src",randomsource1);
document.querySelectorAll(".img")[1].setAttribute("src",randomsource2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🏆Player1 Wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player2 Wins🏆";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
