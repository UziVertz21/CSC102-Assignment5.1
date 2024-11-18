/*  George Seals-Ramos
    11-14-24
    Assignment 4.1*/
var change = 100; /*global variable*/
var intervalidID = 0;
var sec = 0;

function intervalStart() /*start button functions*/
{
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
   /*toggle function for start button*/
   var image = document.getElementById("movingImage");
   intervalidID = setInterval(function()
   {
    image.style.left = change + "px";
    image.style.top = change + "px";
    change += 100; /*increments of 10 when start button is selected*/
   },250); /*100 ms delay*/

}

function intervalStop() /*stop button functions*/
{
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
   /*toggle function for stop button*/
    clearInterval(intervalidID);
    window.location.reload();
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
console.log("Viewport width:", width);
console.log("Viewport height:", height);
console.log("Screen width:", screenWidth);
console.log("Screen height:", screenHeight);