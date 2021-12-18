function init() {
  const button = document.createElement("button");

  button.innerText = "Add to Resolute";
  button.classList.add(
    "btn",
    "btn-sm",
    "btn-primary",
    "m-0",
    "ml-2",
    "ml-md-2"
  );

  setTimeout(() => {
    document.querySelector(".gh-header-title")?.append(button);
  }, 1000);
}

document.addEventListener("pjax:success", () => {
  init();
});

init();
