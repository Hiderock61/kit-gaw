const homeScreen = document.querySelector("#screen-home");
const exploreScreen = document.querySelector("#screen-explore");
const communityScreen = document.querySelector("#screen-community");
const exploreButton = document.querySelector("#explore-button");
const backButton = document.querySelector("#back-button");
const communityButton = document.querySelector("#community-button");
const exploreBackButton = document.querySelector("#explore-back-button");

function showScreen(screen) {
  const showHome = screen === "home";
  const showExplore = screen === "explore";
  const showCommunity = screen === "community";

  homeScreen.hidden = !showHome;
  homeScreen.setAttribute("aria-hidden", String(!showHome));
  exploreScreen.hidden = !showExplore;
  exploreScreen.setAttribute("aria-hidden", String(!showExplore));
  communityScreen.hidden = !showCommunity;
  communityScreen.setAttribute("aria-hidden", String(!showCommunity));

  window.scrollTo(0, 0);
}

exploreButton.addEventListener("click", () => showScreen("explore"));
backButton.addEventListener("click", () => showScreen("home"));
communityButton.addEventListener("click", () => showScreen("community"));
exploreBackButton.addEventListener("click", () => showScreen("explore"));
