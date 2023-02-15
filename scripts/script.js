//set event listener for the form
document.getElementById("rating-form").addEventListener("submit",setRating);

//updates the rating number in DOM and switches the layout divs
function setRating(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let rating = formData.get("rating");
  //show message if no rating is selected
  if (!rating) {
    alert("Please choose a rating before submitting!");
    return;
  }
  //set rating and hide the rating div and show the result div instead
  document.getElementById("result").textContent = rating;
  document.getElementsByClassName("rating-container")[0].style.display = "none";
  document.getElementsByClassName("result-container")[0].style.display = "flex";
}
