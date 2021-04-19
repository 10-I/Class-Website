function noLogin() {
  let name = localStorage.name;
  if (
    name == null ||
    name == undefined ||
    name == "null" ||
    name == "undefined"
  ) {
    window.location.href = "./error.html";
  }
}
