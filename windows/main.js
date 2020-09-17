let startMenuVisible = false;

/**
 * Unselect all other apps and select this app (make the text background blue)
 *
 * @param {event} e
 * @param {string} appID
 */
function selectApp(e, appID) {
  // Make sure that desktop's onclick doesn't override this
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }

  unselectApps();
  let app = document.getElementById(appID);
  // let appImg = app.children[0];
  // appImg.setAttribute("style", "background-color: #004e98");
  let appText = app.children[1].children[0];
  appText.setAttribute("style", "background-color: #004e98");
}

/**
 * Unselect all apps by making the background not blue
 */
function unselectApps() {
  let desktopBg = document.getElementById("desktop-bg");
  for (let app of desktopBg.children) {
    app.children[1].children[0].setAttribute("style", "background-color: transparent");
  }
}

/**
 * Check and toggle the visibility of the start menu when clicked
 *
 * @param {boolean} hideOnly true means don't make start visible
 */
function toggleStartMenu(hideOnly = false) {
  let start = document.getElementById("start");
  let startMenu = document.getElementById("startmenu");
  if (startMenuVisible) {
    startMenu.setAttribute("style", "visibility: hidden");
    start.setAttribute("style", 'background-image: url("images/start.png")');
    startMenuVisible = !startMenuVisible;
  } else if (!hideOnly) {
    startMenu.setAttribute("style", "visibility: visible");
    start.setAttribute("style", 'background-image: url("images/start-pressed.png")');
    startMenuVisible = !startMenuVisible;
  }
}

/**
 * Change the image of the start button when the mouse hovers over it
 */
function startHover() {
  let start = document.getElementById("start");
  if (!startMenuVisible) {
    start.setAttribute("style", 'background-image: url("images/start-hover.png")');
  }
}

/**
 * Change back the image of the start button when the mouse unhovers
 */
function startUnhover() {
  let start = document.getElementById("start");
  if (!startMenuVisible) {
    start.setAttribute("style", 'background-image: url("images/start.png")');
  }
}

/**
 * Draw from a Gaussian distribution, return an output in the range of [0, upperLimit)
 *
 * @param {number} mu is the average
 * @param {number} sigma2 is the standard deviation
 * @param {number} upperLimit is the max possible output
 */
function gaussian(mu = 0, sigma2 = 4, upperLimit = 10) {
  do {
    x = Math.random() * upperLimit;
    pdf = Math.exp(-(x - mu) ^ (2 / (2 * sigma2))) / Math.sqrt(2 * sigma2 * Math.PI);
  } while (Math.random() > pdf);
  return x;
}

/**
 * Sleep for the given duration
 *
 * @param {number} ms is time in milliseconds
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Submit the password in the login screen
 */
async function submitPassword() {
  let pwd = document.getElementById("logon-pwd").value;
  if (pwd == "12345") {
    // Logon success
    document.getElementById("logon-logo").setAttribute("style", "display: none;");
    document.getElementById("logon-left-text").innerText = "welcome";
    document
      .getElementById("logon-left-text")
      .setAttribute("style", "font-size: 36px; font-style: italic; font-weight: 900; text-shadow: 2px 2px 2px #08309e");

    document.getElementById("logon-bar").setAttribute("style", "display: none;");
    document.getElementById("logon-pwd").setAttribute("style", "display: none;");
    document.getElementById("logon-btn").setAttribute("style", "display: none;");
    document.getElementById("logon-prompt").innerText = "Loading your personal settings...";
    document.getElementById("logon-prompt").setAttribute("style", "color: #08309e; font-weight: 900;");

    document
      .getElementsByTagName("body")[0]
      .setAttribute("style", 'cursor: url("images/cursors/progress.png"), progress;');

    // Wait a little bit first
    await sleep(3000 * Math.random());

    // Change to the desktop
    document.getElementById("logon").setAttribute("style", "display: none;");
    document.getElementById("desktop").setAttribute("style", "display: block;");
    document.getElementsByTagName("body")[0].setAttribute("style", 'cursor: url("images/cursors/arrow.png"), auto;');
  } else {
    document.getElementById("logon-form").reset();
  }
}

/**
 * Change logon button image when mouse pressed
 */
function logonBtnDown() {
  document.getElementById("logon-btn").setAttribute("src", "images/logon/btn-down.bmp");
}

/**
 * Change logon button image on mouse release
 */
function logonBtnUp() {
  document.getElementById("logon-btn").setAttribute("src", "images/logon/btn.bmp");
}
