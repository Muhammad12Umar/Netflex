function sign() {
  // This Varible is For button sign in
  let signs = document.getElementById("SignInToAccount");
  let userEmail = document.getElementById("userEmail");
  let userPassword = document.getElementById("userPassword");

  signs.addEventListener("click", function () {
    if (userEmail.value === "" || userPassword.value === "") {
      alert("Please Enter Your Password Or Email !");
    } else if (
      (userEmail.value === "umerkhan12afridi@gmail.com" &&
        userPassword.value === "123") ||
      (userEmail.value === "jibran" && userPassword.value === "123")
    ) {
      window.location.href = "index.html"; // condition true then it Directically Open Index Page of users
      alert("You Have Signed in Successfully!");
    } else {
      alert("Incorrect Password Or Email. Try Again!");
    }
  });
}
