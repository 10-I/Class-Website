function doStuff() {
  if (
    localStorage.bio == "null" ||
    localStorage.bio == undefined ||
    localStorage.bio == " "||
    localStorage.bio == ""||
    localStorage.bio == "undefined" ||
    localStorage.name == undefined||

    localStorage.name == "undefined"||

    localStorage.name == ""


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
