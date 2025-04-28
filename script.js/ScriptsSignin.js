let loginform = document.querySelector(".color");

loginform.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let userEmail = e.target.userEmail.value.trim();
  let userPassword = e.target.userPassword.value.trim();
  let ErrorMessage = document.querySelector(".ErrorMessage");

  if (userEmail === "") {
    ErrorMessage.textContent = "Please Enter Your Valid Email".toUpperCase();
    ErrorMessage.style.color = "red";
    return;
  } 
  if (userPassword === "" || userPassword.length < 6) {
    ErrorMessage.textContent = "Please Enter Your Valid Password";
    ErrorMessage.style.color = "red";
    return;
  }

  // Compare the stored data with login inputs
  let storedData = JSON.parse(localStorage.getItem("userData") || "[]");

  let isExitData = storedData.find(user => user.userEmail === userEmail && user.userPassword === userPassword);

  if (isExitData) {
    ErrorMessage.textContent = "Successfully Logged In!".toUpperCase();
    ErrorMessage.style.color = "green";
    window.location.href = "HomePage.html"; // redirect
  } else {
    ErrorMessage.textContent = "Please Enter Your Valid Email Or Password".toUpperCase();
    ErrorMessage.style.color = "red";
    return;
  }
});
