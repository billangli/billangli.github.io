// Set the computer time
today = new Date();
let timeNode = document.createElement("p");
timeNode.innerText = `${("0" + today.getHours()).slice(-2)}:${(
  "0" + today.getMinutes()
).slice(-2)}`;
document.getElementById("time").appendChild(timeNode);
