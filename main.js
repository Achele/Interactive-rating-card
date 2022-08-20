// === PSUEDO CODE ===
// get form Element
// add event listener to the form element
// when a radio tag is clicked, get value
// set a condition to submit the form
// display rating message when form is submitted
// hide the rate-us page by setting display none

const ratingsForm = document.querySelector("form");
const text = document.querySelector(".ratings-feedbck");
const ratingsResult = document.querySelector(".thank-you-msg");
const ratingsPage = document.querySelector(".ratings");

ratingsResult.classList.add("class", "display");

ratingsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let ratings = ratingsForm.options.value;
  if (ratings) {
    console.log(ratings);
    ratingsPage.classList.add("class", "display");
    ratingsResult.classList.remove("class", "display");
    text.textContent = `You selected ${ratings} out of 5`;
  }
});
