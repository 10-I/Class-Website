function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("inputId").value;
  // Displaying the value
  let students = [
    "Aahil",
    "Aamir",
    "Aashray",
    "Adwaith",
    "Ashar",
    "Aneesh",
    "Arnav",
    "Atharv",
    "Ashar",
    "Ayush",
    "Daksh",
    "Faizaan",
    "Harsha",
    "Krish",
    "Maaz",
    "Mohammad",
    "Ahemeddudin",
    "Mohammad Hussain",
    "Hussain Ali",
    "Nadeem",
    "Rishit",
    "Sabhya",
    "Satvik",
    "Shaasvat",
    "Shashwat",
    "Shiv",
    "Veer",
    "Tanmeen",
    "Sathya",
  ];
  if (students.includes(inputVal)) {
    window.location.href = "./hello.html";
  } else {
    document.write("This website is meant for only specific people");
  }
}
