var timer = 30;

var intervalId;

window.onload = function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
 
function decrement () {

    timer--;


$("#timer").html("<span>" + timer + "</span>");


// $("#correct").on("click", function() {


}


// }

game = document.getElementsByClassName('dynamic');
game[1].textContent = "Which film won best picture for the year 2001?"
game[2].textContent = "In the Bedroom"
game[3].textContent = "A Beautiful Mind"
game[4].textContent = "The Fellowship of the Ring"
game[5].textContent = "Moulin Rouge!"
run ();