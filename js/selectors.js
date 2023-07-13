// selecting the element name
document.querySelector("nav");

// selecting the element by class
document.querySelector(".mobile");

// selecting the element by id
document.querySelector("#sidebar");

// selecting mutiple elements
document.querySelectorAll("div");

// change the button color
document.querySelector("[type='button']").style.background = "blue";

// change the content of element
document.querySelector("h1").innerText = "Updated Value";

// click
document
  .querySelector("[type='button']")
  .addEventListener("click", function () {
    console.log("Button is clicked :)");
  });

// mouseover
document
  .querySelector("[type='button']")
  .addEventListener("mouseover", function () {
    console.log(" Mouseover on the button : ");
  });

// whenever button is hover change the h1 content to "Value is changed"

// - select the button
// - add event listener of mouseover
// - then in the function select the h1 tag
// - change the content of h1 tag
