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
const yakouScreen = document.querySelector("#screen-yakou");
const sentouScreen = document.querySelector("#screen-sentou");
const communityScreen = document.querySelector("#screen-community");
const questionScreen = document.querySelector("#screen-question");
const profileScreen = document.querySelector("#screen-profile");
const exploreButton = document.querySelector("#explore-button");
const backButton = document.querySelector("#back-button");
const selfProfileButton = document.querySelector("#self-profile-button");
const beatlesButton = document.querySelector("#beatles-button");
const beatlesBackButton = document.querySelector("#beatles-back-button");
const yakouBackButton = document.querySelector("#yakou-back-button");
const sentouBackButton = document.querySelector("#sentou-back-button");
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
const signalButton = document.querySelector("#signal-button");
const signalModel = document.querySelector("#signal-model");
const closeSignalModel = document.querySelector("#close-signal-model");
const profileOtherRoomCards = document.querySelectorAll(
  ".profile-other-room-card",
);
const boardLaterYakouLink = document.querySelector("#board-later-yakou-link");
const yakouKeepButton = document.querySelector("#yakou-keep-button");
const sentouKeepButton = document.querySelector("#sentou-keep-button");
const yakouBoardLink = document.querySelector("#yakou-board-link");
const sentouBoardLink = document.querySelector("#sentou-board-link");

function setProfileModel(activeModel) {
  const showSignal = activeModel === "signal";

  signalModel.hidden = !showSignal;
  signalModel.setAttribute("aria-hidden", String(!showSignal));
}

function showScreen(screen) {
  const showHome = screen === "home";
  const showExplore = screen === "explore";
  const showBeatles = screen === "beatles";
  const showYakou = screen === "yakou";
  const showSentou = screen === "sentou";
  const showCommunity = screen === "community";
  const showQuestion = screen === "question";
  const showProfile = screen === "profile";

  homeScreen.hidden = !showHome;
  homeScreen.setAttribute("aria-hidden", String(!showHome));
  exploreScreen.hidden = !showExplore;
  exploreScreen.setAttribute("aria-hidden", String(!showExplore));
  beatlesScreen.hidden = !showBeatles;
  beatlesScreen.setAttribute("aria-hidden", String(!showBeatles));
  yakouScreen.hidden = !showYakou;
  yakouScreen.setAttribute("aria-hidden", String(!showYakou));
  sentouScreen.hidden = !showSentou;
  sentouScreen.setAttribute("aria-hidden", String(!showSentou));
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
yakouBackButton.addEventListener("click", () => showScreen("explore"));
sentouBackButton.addEventListener("click", () => showScreen("explore"));
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

signalButton.addEventListener("click", () => {
  setProfileModel("signal");
});

closeSignalModel.addEventListener("click", () => {
  setProfileModel(null);
});

profileOtherRoomCards.forEach((card) => {
  card.addEventListener("click", () => {
    showScreen(card.dataset.room);
  });
});

boardLaterYakouLink.addEventListener("click", () => showScreen("yakou"));

function initRoomKeepButton(button, boardLink) {
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    if (button.dataset.state !== "idle") {
      return;
    }

    button.dataset.state = "just-saved";
    button.textContent = "探索盤に置きました";

    window.setTimeout(() => {
      button.dataset.state = "saved";
      button.textContent = "探索盤に置いてあります";
      button.disabled = true;

      if (boardLink) {
        boardLink.hidden = false;
      }
    }, 1200);
  });

  if (boardLink) {
    boardLink.addEventListener("click", () => showScreen("home"));
  }
}

initRoomKeepButton(yakouKeepButton, yakouBoardLink);
initRoomKeepButton(sentouKeepButton, sentouBoardLink);
