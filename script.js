$(document).ready(function() {
    $('#signin-form').submit(function(e) {
      e.preventDefault();
      let username = $('#signin-username').val();
      let password = $('#signin-password').val();
      
      // Perform validation here
      if (username === "" || password === "") {
        alert("Please fill in all fields");
        return;
      }
      
      // Proceed with sign in
      console.log("Signed in with username: " + username);
    });
    
    $('#signup-form').submit(function(e) {
      e.preventDefault();
      let username = $('#signup-username').val();
      let email = $('#signup-email').val();
      let password = $('#signup-password').val();
      let age = $('#signup-age').val();
      
      // Perform validation here
      if (username === "" || email === "" || password === "" || age === "") {
        alert("Please fill in all fields");
        return;
      }
      
      if (!isValidEmail(email)) {
        alert("Invalid email format");
        return;
      }
      
      if (!isValidPassword(password)) {
        alert("Password must contain special and numeric characters");
        return;
      }
      
      if (!isValidAge(age)) {
        alert("Age must be a valid number or within a specified range");
        return;
      }
      
      // Proceed with sign up
      console.log("Signed up with username: " + username + ", email: " + email + ", age: " + age);
    });
  });
  
  function isValidEmail(email) {

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPassword(password) {

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
  
  function isValidAge(age) {
    return !isNaN(age) && age >= 18 && age <= 100;
  }
  