window.onload = function () {
  window.scrollTo(0, 0);
  const loader = document.getElementById("loader-wrapper");
  loader.style.opacity = 0;
  loader.style.display = "none";
  document.getElementById("body").style.height = "auto";
  document.getElementById("body").style.overflow = "auto";
};

function warning() {
  window.scroll({ top: 0, behavior: "smooth" });
  document.getElementById("close-button").style.display = "block";
  document.getElementById("close-button").style.fontSize = "1rem";
  document.getElementById("close-button").style.paddingTop = "0.5rem";
  document.getElementById("container").style.opacity = "50%";
}

function closeWarning() {
  document.getElementById("close-button").style.fontSize = "0px";
  document.getElementById("container").style.opacity = "100%";
}
