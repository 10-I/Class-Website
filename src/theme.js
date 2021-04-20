let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.theme = "dark-theme";
    icon.src = "./assets/sun.png";
  } else {
    icon.src = "./assets/moon.svg";
    localStorage.theme = "light-theme";
  }
};

function themeLoader() {
  if (localStorage.theme == "dark-theme") {
    document.body.classList.toggle("dark-theme");
  }
}
