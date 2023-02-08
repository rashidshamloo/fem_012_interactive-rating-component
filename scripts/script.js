/* variable declarations */

let rating = 0;
let white = "hsl(0, 0%, 100%)";
let lightGrey = "hsl(217, 12%, 63%)";
let mediumGray = "hsl(216, 12%, 25%)";

/* function declarations */

//sets the rating variable based on the innerHTML of the selected rating element
function setRating() {
  let newRating = window.event.target.innerHTML;
  //if the same rating is selected, do nothing
  if (rating == newRating) {
    return;
  } else {
    rating = newRating;
  }
  //reset all other rating element styles to default
  for (element of document.getElementsByClassName("rating-number-container")[0]
    .children) {
    if (element != window.event.target) {
      element.style.backgroundColor = "";
      element.style.color = "";
      element.style.cursor = "";
    }
  }
  //set active style for the selected rating element
  window.event.target.style.backgroundColor = lightGrey;
  window.event.target.style.color = white;
  window.event.target.style.cursor = "default";
}

//updates the rating number in DOM and switches the layout divs
function submitRating() {
  //show message if no rating is selected
  if (rating == 0) {
    alert("Please choose a rating before submitting!");
    return;
  }
  //set rating and hide the rating div and show the result div instead
  document.getElementById("result").innerHTML = rating;
  document.getElementsByClassName("rating-container")[0].style.display = "none";
  document.getElementsByClassName("result-container")[0].style.display = "flex";
}
