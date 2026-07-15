// ---- 探索盤（screen-home）の表示状態 ----
// 検証用のダミーフラグです。値を書き換えて4状態を確認できます。
//   "first-time"     : 初回（まだ何も歩いていない）
//   "returned"       : 一度歩いた（この前の続きのみ）
//   "with-later"     : あとで辿るがある
//   "with-next-path" : この先に続く場所まである（フル状態）
const explorationState = "with-next-path";

const boardFirstTime = document.querySelector("#board-first-time");
const boardReturning = document.querySelector("#board-returning");
const boardLaterSection = document.querySelector("#board-later-section");
const boardNextPathSection = document.querySelector(
  "#board-next-path-section",
);
const boardStarterOpenButton = document.querySelector(
  "#board-starter-open-button",
);
const boardResumeButton = document.querySelector("#board-resume-button");

function applyExplorationState(state) {
  const isFirstTime = state === "first-time";

  boardFirstTime.hidden = !isFirstTime;
  boardFirstTime.setAttribute("aria-hidden", String(!isFirstTime));
  boardReturning.hidden = isFirstTime;
  boardReturning.setAttribute("aria-hidden", String(isFirstTime));

  const showLater = state === "with-later" || state === "with-next-path";
  const showNextPath = state === "with-next-path";

  boardLaterSection.hidden = !showLater;
  boardNextPathSection.hidden = !showNextPath;
}

applyExplorationState(explorationState);

const homeScreen = document.querySelector("#screen-home");
const exploreScreen = document.querySelector("#screen-explore");
const beatlesScreen = document.querySelector("#screen-beatles");
const communityScreen = document.querySelector("#screen-community");
const questionScreen = document.querySelector("#screen-question");
const profileScreen = document.querySelector("#screen-profile");
const exploreButton = document.querySelector("#explore-button");
const backButton = document.querySelector("#back-button");
const selfProfileButton = document.querySelector("#self-profile-button");
const beatlesButton = document.querySelector("#beatles-button");
const beatlesBackButton = document.querySelector("#beatles-back-button");
const communityButton = document.querySelector("#community-button");
const exploreBackButton = document.querySelector("#explore-back-button");
const questionButton = document.querySelector("#question-button");
const profileButton = document.querySelector("#profile-button");
const communityBackFromQuestion = document.querySelector(
  "#community-back-from-question",
);
const communityBackFromProfile = document.querySelector(
  "#community-back-from-profile",
);
const questionProfileButton = document.querySelector(
  "#question-profile-button",
);
const placeViewpointButton = document.querySelector("#place-viewpoint-button");
const viewpointModel = document.querySelector("#viewpoint-model");
const closeViewpointModel = document.querySelector("#close-viewpoint-model");
const otherViewButton = document.querySelector("#other-view-button");
const otherViewModel = document.querySelector("#other-view-model");
const closeOtherViewModel = document.querySelector("#close-other-view-model");
const signalButton = document.querySelector("#signal-button");
const signalModel = document.querySelector("#signal-model");
const closeSignalModel = document.querySelector("#close-signal-model");

function setProfileModel(activeModel) {
  const showOtherView = activeModel === "other-view";
  const showSignal = activeModel === "signal";

  otherViewModel.hidden = !showOtherView;
  otherViewModel.setAttribute("aria-hidden", String(!showOtherView));
  signalModel.hidden = !showSignal;
  signalModel.setAttribute("aria-hidden", String(!showSignal));
}

function showScreen(screen) {
  const showHome = screen === "home";
  const showExplore = screen === "explore";
  const showBeatles = screen === "beatles";
  const showCommunity = screen === "community";
  const showQuestion = screen === "question";
  const showProfile = screen === "profile";

  homeScreen.hidden = !showHome;
  homeScreen.setAttribute("aria-hidden", String(!showHome));
  exploreScreen.hidden = !showExplore;
  exploreScreen.setAttribute("aria-hidden", String(!showExplore));
  beatlesScreen.hidden = !showBeatles;
  beatlesScreen.setAttribute("aria-hidden", String(!showBeatles));
  communityScreen.hidden = !showCommunity;
  communityScreen.setAttribute("aria-hidden", String(!showCommunity));
  questionScreen.hidden = !showQuestion;
  questionScreen.setAttribute("aria-hidden", String(!showQuestion));
  profileScreen.hidden = !showProfile;
  profileScreen.setAttribute("aria-hidden", String(!showProfile));

  if (!showProfile) {
    setProfileModel(null);
  }

  window.scrollTo(0, 0);
}

exploreButton.addEventListener("click", () => showScreen("explore"));
boardStarterOpenButton.addEventListener("click", () =>
  showScreen("community"),
);
boardResumeButton.addEventListener("click", () => showScreen("community"));
backButton.addEventListener("click", () => showScreen("home"));
selfProfileButton.addEventListener("click", () => showScreen("profile"));
beatlesButton.addEventListener("click", () => showScreen("beatles"));
beatlesBackButton.addEventListener("click", () => showScreen("explore"));
communityButton.addEventListener("click", () => showScreen("community"));
exploreBackButton.addEventListener("click", () => showScreen("explore"));
questionButton.addEventListener("click", () => showScreen("question"));
profileButton.addEventListener("click", () => showScreen("profile"));
questionProfileButton.addEventListener("click", () => showScreen("profile"));
communityBackFromQuestion.addEventListener("click", () =>
  showScreen("community"),
);
communityBackFromProfile.addEventListener("click", () =>
  showScreen("question"),
);

placeViewpointButton.addEventListener("click", () => {
  viewpointModel.hidden = false;
  viewpointModel.setAttribute("aria-hidden", "false");
});

closeViewpointModel.addEventListener("click", () => {
  viewpointModel.hidden = true;
  viewpointModel.setAttribute("aria-hidden", "true");
});

otherViewButton.addEventListener("click", () => {
  setProfileModel("other-view");
});

closeOtherViewModel.addEventListener("click", () => {
  setProfileModel(null);
});

signalButton.addEventListener("click", () => {
  setProfileModel("signal");
});

closeSignalModel.addEventListener("click", () => {
  setProfileModel(null);
});
