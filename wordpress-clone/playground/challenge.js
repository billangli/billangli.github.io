/**
 * Prompt the user for their age in years and display their age in days
 */
function ageInDays() {
  let ageInYears = prompt("What is your age in years?");
  let paragraphNode = document.createElement("p");
  let challengeNode = document.getElementById("result-display-1");
  let textNode = document.createTextNode(
    `Your age is ${ageInYears * 365} days.`
  );
  paragraphNode.setAttribute("id", "age-in-days");
  paragraphNode.appendChild(textNode);
  challengeNode.appendChild(paragraphNode);
}

/**
 * Remove the age in days display
 */
function resetAgeInDays() {
  document.getElementById("age-in-days").remove();
}

/**
 * Add an image of the cookie to the result window of Challenge 2
 */
function generateCookie() {
  let display = document.getElementById("result-display-2");
  let imageNode = document.createElement("img");
  imageNode.setAttribute("src", "images/cookie.png");
  imageNode.setAttribute("style", "width=100px");
  display.appendChild(imageNode);
}

rpsImagePaths = {
  0: "images/rock.png",
  1: "images/paper.png",
  2: "images/scissors.png",
};

/**
 * The user plays rock, paper scissors with the machine, the machine will
 * randomly choose a move and display the results in the div for a couple of
 * seconds
 *
 * @param {*} userChoice represents rock (0), paper (1) and scissors (2)
 */
function rockPaperScissors(userChoice) {
  let rps1 = document.getElementById("rps-1");
  let rps2 = document.getElementById("rps-2");
  let rps3 = document.getElementById("rps-3");

  // Display the user and AI's choices
  let userNode = document.createElement("img");
  userNode.setAttribute("src", rpsImagePaths[userChoice]);
  rps1.removeChild(rps1.children[0]);
  rps1.appendChild(userNode);

  let aiChoice = Math.floor(Math.random() * 3);
  let aiNode = document.createElement("img");
  aiNode.setAttribute("src", rpsImagePaths[aiChoice]);
  rps3.removeChild(rps3.children[0]);
  rps3.appendChild(aiNode);

  // Display the results
  let resultText = "";
  if ((userChoice - aiChoice + 3) % 3 == 1) {
    resultText = "You Win!";
  } else if ((userChoice - aiChoice + 3) % 3 == 0) {
    resultText = "Tie!";
  } else {
    resultText = "You Lose!";
  }

  let textNode = document.createElement("h2");
  textNode.textContent = resultText;
  rps2.removeChild(rps2.children[0]);
  rps2.appendChild(textNode);
}
