// app.js

// Function to handle click event on the "Get Started" button
function handleGetStarted() {
    alert("Welcome to AgricCurate! Get ready to explore the world of agriculture.");
  }
  
  // Event listener for the "Get Started" button
  var getStartedButton = document.querySelector(".cta-button");
  getStartedButton.addEventListener("click", handleGetStarted);

  function handleGetStarted(event) {
    event.preventDefault(); // Prevent default anchor behavior
  
    // Get the registration section's offset top
    var registrationSection = document.getElementById("registrationSection");
    var registrationSectionTop = registrationSection.offsetTop;
  
// Add your custom JavaScript code for the registration page
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform registration logic
    // You can send the form data to the server using AJAX or handle it in your preferred way
    // For this example, let's simply log the form values to the console
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  
    // Reset the form
    document.getElementById("registrationForm").reset();
  });
  
  