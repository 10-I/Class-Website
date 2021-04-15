/*
Steps of this code.. Our objective is to write smooth code and easy to tweak and debug.. Here's the guide to what I have written down

1. Declaring names
2. Declaring passwords(In the same order as the names.. For example.. User name is 1st position in the array then the corresponding password should be at the same position in the other array)
3. Now making a function check() that will execute the code on click. 
4. In the function load in the values
5. Checking if the username is there in the names array.
6. If that passes then check if password is same. For this:
    i) We will get the index i.e. the position of the username (which the user has entered) in the names array
    ii) Now we will compare the user's password with the password mentioned at the nth(the position of the username in the names array) position.
    Simple Syntax:
        theArrayName.indexOf(someTerm) ---> Get the nth position of the term passed in it
            * someTerm can be a variable also which we did in this case
        To get the value at a certain position ---> theArrayName[the nth position]

        The combination of this:

        theArrayName2[theArrayName1.indexOf(someTerm)]

        Here it is
        passwords[names.indexOf(username)]      {Username = the user's input}
7. At last add in the else statements with the alerts

*/

// Declaring all our names in an Array

const names = [
  "Aahil",
  "Aamir",
  "Aashray",
  "Adwaith",
  "Ashar",
  "Ashaz",
  "Aneesh",
  "Arnav",
  "Atharv",
  "Ayush",
  "Daksh",
  "Faizaan",
  "Hussain",
  "Shaasvat",
  "Krish",
  "Maaz",
  "Mohammad",
  "Mushaf",
  "Maahir",
  "Raza",
  "Ahemeduddin",
  "Nadeem",
  "Rishit",
  "Sabhya",
  "Sathya",
  "Satvik",
  "Shashwat",
  "Shiv",
  "Tanmeen",
  "Veer",
  "Harsha",
];

// Declaring all our passwords in the same order (Correspondingly)
const passwords = [
  "s8626",
  "s8872",
  "s12901",
  "s10832",
  "s13490",
  "s16166",
  "s8376",
  "s8395",
  "s8388",
  "s8670",
  "s8342",
  "s8349",
  "s10717",
  "s15280",
  "s8806",
  "s9000",
  "s8753",
  "s9012",
  "s13521",
  "s9128",
  "s10120",
  "s8879",
  "s15749",
  "s8340",
  "s14234",
  "s8973",
  "s16199",
  "s15888",
  "s14218",
  "s8985",
  "s12915",
];

// Making the check function running when the btn is clicked
function check() {
  // Taking in the values inputted by the user
  let username = document.getElementById("inputId").value;
  let password = document.getElementById("password").value;

  // First check: Checking if the username is there in our names list
  if (names.includes(username)) {
    // Second check: Checking if the password is same [For logic check the header of this file]
    if (password == passwords[names.indexOf(username)]) {
      localStorage.name = username;
      window.location.href = "./hello.html";
    } else {
      alert("Either the password or the username is wrong. Please try again");
    }
  } else {
    alert("Either the password or the username is wrong. Please try again");
  }
}

/*
Please Note: This was done solely for reducing our future efforts. Please don't think me wrong.. Just wanted to help you in case if we ever update the website after our deployment. And Faizaan you had done an excellent job with the if else if statements. But just wanted to reduce that effort of yours in the future. Thank you :)

If you want any further clarification relating to the logic just ask me.. I shall add it with a brief description.
*/
