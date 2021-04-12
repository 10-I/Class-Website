function doStuff() {
  if (
    localStorage.bio == "null" ||
    localStorage.bio == undefined ||
    localStorage.bio == " "
  ) {
    let something = prompt("Hey you enter your description! Or else!!");
    localStorage.bio = something;
    document.getElementById("name").innerHTML = localStorage.name;
    document.getElementById("description").innerHTML = localStorage.getItem(
      "bio"
    );
  } else {
    document.getElementById("name").innerHTML = localStorage.name;
    document.getElementById("description").innerHTML = localStorage.bio;
  }
}

doStuff();
