function register() {
    var signupName = document.getElementById("signupName").value;
    var signupPw = document.getElementById("signupPw").value;
  
    // Check if the user is already registered
    if (localStorage.getItem(signupName) !== null) {
      alert('User already exists. Please choose a different username.');
      return;
    }
  
    // Store the credentials in local storage
    localStorage.setItem(signupName, signupPw);
    alert('Account created successfully. Please proceed to login.');
    window.location.href = 'login.html'; // Redirect to login page
  }
  
  function check() {
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;
  
    if (userName === "admin" && userPw === "admin123") {
      alert('Admin login successful.');
      window.location.href = 'admin.html'; // Redirect to admin.html for admin access
    } else {
      // Retrieve the stored password for the given username
      var storedPw = localStorage.getItem(userName);
  
      if (storedPw !== null && userPw === storedPw) {
        alert('Login successful.');
        window.location.href = 'main.html'; // Redirect to main.html after successful login
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }
  }
  
  
  

