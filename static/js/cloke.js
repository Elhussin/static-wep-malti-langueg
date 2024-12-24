// Function to update and display the current time and date in specified elements
function set_cloke() {
  var data = new Date();

  // Update the time in the "div_time" element
  var div_time = document.getElementById("div_time");
  div_time.innerHTML =
    data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

  // Update the date in the "div_date" element
  var div_date = document.getElementById("div_date");
  div_date.innerHTML =
    data.getDate() +
    "-" +
    parseInt(data.getMonth() + 1) +
    "-" +
    data.getFullYear();

  // Recursively call set_cloke every 100ms to keep time updated
  setTimeout(set_cloke, 100);
}

// Call set_cloke on page load to initialize the time and date
onload = set_cloke();

// Function to set and save the background color of the body element
function set_color() {
  var color = document.getElementById("color").value;

  // Save the selected color in localStorage
  localStorage.setItem("set_color1", color);

  // Apply the selected color as the body's background
  document.getElementById("body").style.background = localStorage.getItem("set_color1");
}

// Function to update the body's background color based on the saved color
function update_color() {
  // Retrieve the saved color and apply it
  document.getElementById("color").value = localStorage.getItem("set_color1");
  document.getElementById("body").style.background = localStorage.getItem("set_color1");
}

// Keep the background color updated periodically
setInterval(update_color, 100);

// Update the body's background color on page load
onload = update_color();

// Function to set and save the background color of the "main2" element
function set_color2() {
  var color2 = document.getElementById("color2").value;

  // Save the selected color in localStorage
  localStorage.setItem("set_color2", color2);

  // Apply the selected color as the "main2" element's background
  document.getElementById("main2").style.background = localStorage.getItem("set_color2");
}

// Function to update the "main2" background color based on the saved color
function update_color2() {
  // Retrieve the saved color and apply it
  document.getElementById("color2").value = localStorage.getItem("set_color2");
  document.getElementById("main2").style.background = localStorage.getItem("set_color2");
}

// Update the "main2" background color on page load
onload = update_color2();

// Class to handle screen width adaptation
class scrren_navigtor {
  constructor() {
    this.screen_width = document.getElementById("main");

    // Adjust the "main" element's width if the screen width is less than 500px
    if (screen.width < 500) {
      this.screen_width.style.width = screen.width + "px";
    }
  }
}

// Create an instance of scrren_navigtor on page load
onload = new scrren_navigtor();
