const avatarButtons = document.querySelectorAll("[data-avatar]");
const signalButtons = document.querySelectorAll("[data-signal]");
const screenButtons = document.querySelectorAll("[data-screen]");
const panels = document.querySelectorAll("[data-panel]");

avatarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    avatarButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.body.classList.toggle("avatar-on", button.dataset.avatar === "on");
  });
});

signalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    signalButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.body.classList.toggle("signal-button", button.dataset.signal === "button");
  });
});

screenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    screenButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    panels.forEach((panel) => {
      panel.classList.toggle("is-visible", panel.dataset.panel === button.dataset.screen);
    });
  });
});
