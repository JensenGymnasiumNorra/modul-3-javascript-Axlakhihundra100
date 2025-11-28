const slider = document.getElementById("numberSlider");
const output = document.getElementById("selectedNumber");
const randomOutput = document.getElementById("randomNumber");
const hintOutput = document.getElementById("hint");

let randomNumber = null;

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
};
function updateSelectedNumber() {
    output.innerHTML = this.value;
}
function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100.5);
    randomOutput.innerHTML = randomNumber;   
    hintOutput.innerHTML = "";

}



function hintUser() {
  if (randomNumber === null) {
    hintOutput.innerHTML = "Generate a number first.";
    return;
  }

  const guess = Number(slider.value); 

  if (guess > randomNumber) {
    hintOutput.innerHTML = "The random number is lower than your selected number.";
  } else if (guess < randomNumber) {
    hintOutput.innerHTML = "The random number is higher than your selected number.";
  } else {
    hintOutput.innerHTML = "Congratulations! You guessed the correct number!";
  }
}