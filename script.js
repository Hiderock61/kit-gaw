const homeScreen = document.querySelector("#screen-home");
const exploreScreen = document.querySelector("#screen-explore");
const exploreButton = document.querySelector("#explore-button");
const backButton = document.querySelector("#back-button");

function showScreen(screen) {
  const showHome = screen === "home";

  homeScreen.hidden = !showHome;
  homeScreen.setAttribute("aria-hidden", String(!showHome));
  exploreScreen.hidden = showHome;
  exploreScreen.setAttribute("aria-hidden", String(showHome));
}

exploreButton.addEventListener("click", () => showScreen("explore"));
backButton.addEventListener("click", () => showScreen("home"));
