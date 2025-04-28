const form = document.querySelector("#registrationForm");
const errorMessage = document.querySelector("#errorMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // 1) grab & trim values
  const names = document.querySelector("#userName").value.trim();
  const phoneNumber = document.querySelector("#userPhoneNumber").value.trim();
  const userEmail = document.querySelector("#userEmail").value.trim();
  const userPassword = document.querySelector("#userPassword").value.trim();
  const userConfirmPassword = document
    .querySelector("#userConfirmPassword")
    .value.trim();

  // 2) simple validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10,15}$/;

  if (!names) {
    showError("PLEASE ENTER YOUR FULL NAME");
    return;
  }
  if (!phonePattern.test(phoneNumber)) {
    showError("PLEASE ENTER A VALID PHONE NUMBER");
    return;
  }
  if (!emailPattern.test(userEmail)) {
    showError("PLEASE ENTER A VALID EMAIL ADDRESS");
    return;
  }
  if (userPassword.length < 6) {
    showError("PASSWORD MUST BE AT LEAST 6 CHARACTERS");
    return;
  }
  if (userPassword !== userConfirmPassword) {
    showError("PASSWORDS DO NOT MATCH");
    return;
  }

  // 3) build the new user object
  const newUser = { names, phoneNumber, userEmail, userPassword };

  // 4) load existing users (or start fresh)
  const stored = JSON.parse(localStorage.getItem("userData")) || [];

  // 5) check if email or phone already exists
  const isExist = stored.find(
    (user) => user.userEmail === userEmail || user.phoneNumber === phoneNumber
  );

  if (isExist) {
    showError("EMAIL OR PHONE NUMBER ALREADY EXISTS");
    return;
  }

  // 6) append the new user
  stored.push(newUser);

  // 7) save updated array back to localStorage
  localStorage.setItem("userData", JSON.stringify(stored));

  // 8) all done!
  window.location.href = "index.html";
});

// small helper function for showing errors
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.color = "red";
}
