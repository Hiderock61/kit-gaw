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

// ---- 「この前の続き」固定ダミーデータ ----
const resumeState = {
  type: "話題",
  title: "なぜハードロックは、努力していない顔をするのか。",
  context: "「ハードロックの矛盾」で読んでいました",
};

const resumeCard = document.querySelector("#resume-card");
const resumeTypeEl = resumeCard.querySelector(".resume-type");
const resumeTitleEl = resumeCard.querySelector(".resume-title");
const resumeContextEl = resumeCard.querySelector(".resume-context");

resumeCard.dataset.type = "topic";
resumeTypeEl.textContent = resumeState.type;
resumeTitleEl.textContent = resumeState.title;
resumeContextEl.textContent = resumeState.context;

function activateResumeCard() {
  showScreen("question", { returnTo: "home" });
}

resumeCard.addEventListener("click", activateResumeCard);
resumeCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    activateResumeCard();
  }
});

// ---- 足あと固定ダミーデータ ----
const footprintState = {
  totalCount: 3,
  items: [
    {
      footprintId: "footprint-001",
      visitor: { id: "ken", name: "無表情ケン" },
      sharedCommunityIds: [
        "hard-rock",
        "night-life",
        "guitar-style",
        "late-night-radio",
      ],
    },
    {
      footprintId: "footprint-002",
      visitor: { id: "night-observer", name: "夜型の観測者" },
      sharedCommunityIds: ["night-life"],
    },
    {
      footprintId: "footprint-003",
      visitor: { id: "sentou-person", name: "銭湯帰りの人" },
      sharedCommunityIds: ["sentou", "night-life"],
    },
  ],
};

// ---- 相手プロフィール固定ダミーデータ ----
const currentUser = {
  id: "user-me",
  name: "あなた",
  communityIds: ["hard-rock", "night-life"],
};

const profileData = {
  id: "ken",
  name: "無表情ケン",
  introduction: "言葉の裏にある佇まいを観察しています。",
  activity: {
    communityId: "hard-rock",
    communityName: "ハードロックの矛盾",
    excerpt: "上手さを正面から見せると、練習の成果発表になってしまう。",
    questionId: "hard-rock-question",
  },
  commonCommunities: [
    { id: "hard-rock", name: "ハードロックの矛盾", screen: "community" },
    { id: "night-life", name: "夜型生活の観測室", screen: "yakou" },
  ],
  otherCommunity: {
    id: "sentou",
    name: "銭湯帰りの会",
    screen: "sentou",
    excerpt: "湯上がりだけは少し素直になる",
  },
};


const homeScreen = document.querySelector("#screen-home");
const exploreScreen = document.querySelector("#screen-explore");
const beatlesScreen = document.querySelector("#screen-beatles");
const selfProfileScreen = document.querySelector("#screen-self-profile");
const yakouScreen = document.querySelector("#screen-yakou");
const sentouScreen = document.querySelector("#screen-sentou");
const footprintsScreen = document.querySelector("#screen-footprints");
const communityScreen = document.querySelector("#screen-community");
const questionScreen = document.querySelector("#screen-question");
const profileScreen = document.querySelector("#screen-profile");
const exploreButton = document.querySelector("#explore-button");
const backButton = document.querySelector("#back-button");
const selfProfileButton = document.querySelector("#self-profile-button");
const homeSelfProfileButton = document.querySelector(
  "#home-self-profile-button",
);
const selfProfileBackButton = document.querySelector(
  "#self-profile-back-button",
);
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
const profileName = document.querySelector("#profile-name");
const profileIntroduction = document.querySelector("#profile-introduction");
const profileActivitySource = document.querySelector("#profile-activity-source");
const profileActivityExcerpt = document.querySelector("#profile-activity-excerpt");
const profileOriginalTopicButton = document.querySelector(
  "#profile-original-topic-button",
);
const profileCommonHardRockButton = document.querySelector(
  "#profile-common-hard-rock-button",
);
const profileCommonNightButton = document.querySelector(
  "#profile-common-night-button",
);
const profileOtherSentouButton = document.querySelector(
  "#profile-other-sentou-button",
);
const boardLaterYakouLink = document.querySelector("#board-later-yakou-link");
const boardLaterSentouLink = document.querySelector(
  "#board-later-sentou-link",
);
const boardNextPathYakouLink = document.querySelector(
  "#board-next-path-yakou-link",
);
const yakouKeepButton = document.querySelector("#yakou-keep-button");
const sentouKeepButton = document.querySelector("#sentou-keep-button");
const yakouBoardLink = document.querySelector("#yakou-board-link");
const sentouBoardLink = document.querySelector("#sentou-board-link");
const footprintSummary = document.querySelector("#footprint-summary");
const footprintsList = document.querySelector("#footprints-list");
const footprintsBackButton = document.querySelector(
  "#footprints-back-button",
);
const profileSourceContext = document.querySelector(
  "#profile-source-context",
);

// ---- 戻り先の一段管理 ----
// 前進時に渡された returnTo を、対象画面ごとに1つだけ記録する。
// 完全な履歴配列は持たず、直前の入口だけを覚える最小構造。
const returnTargets = {
  profile: "question",
  selfProfile: "explore",
  footprints: "home",
  question: "community",
  yakou: "explore",
  sentou: "explore",
  community: "explore",
};

const profileReturnLabels = {
  question: "問いへ戻る",
  community: "部屋へ戻る",
  footprints: "足あとへ戻る",
  home: "探索盤へ戻る",
};

const communityReturnLabels = {
  explore: "部屋を探すへ戻る",
  profile: "プロフィールへ戻る",
  home: "探索盤へ戻る",
};

const roomReturnLabels = {
  profile: "プロフィールへ戻る",
  home: "探索盤へ戻る",
  explore: "部屋を探すへ戻る",
};

function updateReturnLabel(button, labelMap, target) {
  if (!button) {
    return;
  }

  button.textContent = labelMap[target] || "一つ前へ戻る";
}

let profileFromFootprint = false;

function renderProfile(data) {
  profileName.textContent = data.name;
  profileIntroduction.textContent = data.introduction;
  profileActivitySource.textContent = `「${data.activity.communityName}」での発言`;
  profileActivityExcerpt.textContent = data.activity.excerpt;
}

renderProfile(profileData);

function showScreen(screen, options = {}) {
  const showHome = screen === "home";
  const showExplore = screen === "explore";
  const showBeatles = screen === "beatles";
  const showSelfProfile = screen === "self-profile";
  const showYakou = screen === "yakou";
  const showSentou = screen === "sentou";
  const showFootprints = screen === "footprints";
  const showCommunity = screen === "community";
  const showQuestion = screen === "question";
  const showProfile = screen === "profile";

  const returnTargetKey = screen === "self-profile" ? "selfProfile" : screen;
  if (
    options.returnTo &&
    Object.prototype.hasOwnProperty.call(returnTargets, returnTargetKey)
  ) {
    returnTargets[returnTargetKey] = options.returnTo;
  }

  homeScreen.hidden = !showHome;
  homeScreen.setAttribute("aria-hidden", String(!showHome));
  exploreScreen.hidden = !showExplore;
  exploreScreen.setAttribute("aria-hidden", String(!showExplore));
  beatlesScreen.hidden = !showBeatles;
  beatlesScreen.setAttribute("aria-hidden", String(!showBeatles));
  selfProfileScreen.hidden = !showSelfProfile;
  selfProfileScreen.setAttribute("aria-hidden", String(!showSelfProfile));
  yakouScreen.hidden = !showYakou;
  yakouScreen.setAttribute("aria-hidden", String(!showYakou));
  sentouScreen.hidden = !showSentou;
  sentouScreen.setAttribute("aria-hidden", String(!showSentou));
  footprintsScreen.hidden = !showFootprints;
  footprintsScreen.setAttribute("aria-hidden", String(!showFootprints));
  communityScreen.hidden = !showCommunity;
  communityScreen.setAttribute("aria-hidden", String(!showCommunity));
  questionScreen.hidden = !showQuestion;
  questionScreen.setAttribute("aria-hidden", String(!showQuestion));
  profileScreen.hidden = !showProfile;
  profileScreen.setAttribute("aria-hidden", String(!showProfile));

  if (showProfile) {
    if (typeof options.fromFootprint === "boolean") {
      profileFromFootprint = options.fromFootprint;
    }
    profileSourceContext.hidden = !profileFromFootprint;
    profileSourceContext.setAttribute(
      "aria-hidden",
      String(!profileFromFootprint),
    );
    updateReturnLabel(
      communityBackFromProfile,
      profileReturnLabels,
      returnTargets.profile,
    );
  }

  if (showCommunity) {
    updateReturnLabel(
      exploreBackButton,
      communityReturnLabels,
      returnTargets.community,
    );
  }

  if (showYakou) {
    updateReturnLabel(yakouBackButton, roomReturnLabels, returnTargets.yakou);
  }

  if (showSentou) {
    updateReturnLabel(
      sentouBackButton,
      roomReturnLabels,
      returnTargets.sentou,
    );
  }


  window.scrollTo(0, 0);
}

exploreButton.addEventListener("click", () => showScreen("explore"));
boardStarterOpenButton.addEventListener("click", () =>
  showScreen("community", { returnTo: "home" }),
);
backButton.addEventListener("click", () => showScreen("home"));
selfProfileButton.addEventListener("click", () =>
  showScreen("self-profile", { returnTo: "explore" }),
);
homeSelfProfileButton.addEventListener("click", () =>
  showScreen("self-profile", { returnTo: "home" }),
);
selfProfileBackButton.addEventListener("click", () =>
  showScreen(returnTargets.selfProfile),
);
beatlesButton.addEventListener("click", () => showScreen("beatles"));
beatlesBackButton.addEventListener("click", () => showScreen("explore"));
yakouBackButton.addEventListener("click", () =>
  showScreen(returnTargets.yakou),
);
sentouBackButton.addEventListener("click", () =>
  showScreen(returnTargets.sentou),
);
footprintsBackButton.addEventListener("click", () =>
  showScreen(returnTargets.footprints),
);
communityButton.addEventListener("click", () =>
  showScreen("community", { returnTo: "explore" }),
);
exploreBackButton.addEventListener("click", () =>
  showScreen(returnTargets.community),
);
questionButton.addEventListener("click", () =>
  showScreen("question", { returnTo: "community" }),
);
profileButton.addEventListener("click", () =>
  showScreen("profile", { returnTo: "community", fromFootprint: false }),
);
questionProfileButton.addEventListener("click", () =>
  showScreen("profile", { returnTo: "question", fromFootprint: false }),
);
communityBackFromQuestion.addEventListener("click", () =>
  showScreen(returnTargets.question),
);
communityBackFromProfile.addEventListener("click", () =>
  showScreen(returnTargets.profile),
);
profileOriginalTopicButton.addEventListener("click", () =>
  showScreen("question", { returnTo: "profile" }),
);
profileCommonHardRockButton.addEventListener("click", () =>
  showScreen("community", { returnTo: "profile" }),
);
profileCommonNightButton.addEventListener("click", () =>
  showScreen("yakou", { returnTo: "profile" }),
);
profileOtherSentouButton.addEventListener("click", () =>
  showScreen("sentou", { returnTo: "profile" }),
);

boardLaterYakouLink.addEventListener("click", () =>
  showScreen("yakou", { returnTo: "home" }),
);
boardLaterSentouLink.addEventListener("click", () =>
  showScreen("sentou", { returnTo: "home" }),
);
boardNextPathYakouLink.addEventListener("click", () =>
  showScreen("yakou", { returnTo: "home" }),
);

function createFootprintAvatar() {
  const avatar = document.createElement("span");
  avatar.className = "footprint-avatar";
  avatar.setAttribute("aria-hidden", "true");
  return avatar;
}

function openFootprintVisitor(visitorId, returnTo) {
  showScreen("profile", {
    returnTo,
    fromFootprint: true,
    visitorId,
  });
}

function renderFootprintSummary() {
  const previewItems = footprintState.items.slice(0, 2);
  const remainingCount = Math.max(
    0,
    footprintState.totalCount - previewItems.length,
  );

  const countText = document.createElement("p");
  countText.className = "footprint-summary-count";
  countText.textContent = `最近${footprintState.totalCount}人がプロフィールを見に来ました`;

  const list = document.createElement("div");
  list.className = "footprint-summary-list";

  previewItems.forEach((item) => {
    const button = document.createElement("button");
    button.className = "footprint-summary-row";
    button.type = "button";
    button.dataset.visitorId = item.visitor.id;

    const text = document.createElement("span");
    text.className = "footprint-summary-text";

    const name = document.createElement("span");
    name.className = "footprint-summary-name";
    name.textContent = item.visitor.name;

    const shared = document.createElement("span");
    shared.className = "footprint-summary-shared";
    shared.textContent = `共通コミュニティ ${item.sharedCommunityIds.length}つ`;

    text.append(name, shared);
    button.append(createFootprintAvatar(), text);
    button.addEventListener("click", () =>
      openFootprintVisitor(item.visitor.id, "home"),
    );
    list.append(button);
  });

  const remaining = document.createElement("p");
  remaining.className = "footprint-summary-remaining";
  remaining.textContent = remainingCount > 0 ? `ほか${remainingCount}人` : "";
  remaining.hidden = remainingCount === 0;

  const viewAll = document.createElement("button");
  viewAll.className = "footprint-summary-link";
  viewAll.type = "button";
  viewAll.textContent = "足あとを見る →";
  viewAll.addEventListener("click", () =>
    showScreen("footprints", { returnTo: "home" }),
  );

  footprintSummary.replaceChildren(countText, list, remaining, viewAll);
}

function renderFootprintList() {
  const fragment = document.createDocumentFragment();

  footprintState.items.forEach((item) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.className = "footprint-row";
    button.type = "button";
    button.dataset.visitorId = item.visitor.id;

    const text = document.createElement("span");
    text.className = "footprint-text";

    const name = document.createElement("span");
    name.className = "footprint-name";
    name.textContent = item.visitor.name;

    const shared = document.createElement("span");
    shared.className = "footprint-context";
    shared.textContent = `共通コミュニティ ${item.sharedCommunityIds.length}つ`;

    text.append(name, shared);
    button.append(createFootprintAvatar(), text);
    button.addEventListener("click", () =>
      openFootprintVisitor(item.visitor.id, "footprints"),
    );
    listItem.append(button);
    fragment.append(listItem);
  });

  footprintsList.replaceChildren(fragment);
}

renderFootprintSummary();
renderFootprintList();

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
