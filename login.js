$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault(); 

    const username = $("#username").val();
    const password = $("#password").val();

    setTimeout(function () {
      const validUsername = "anaida";
      const validPassword = "pass@123";

      if (username === validUsername && password === validPassword) {
        $("#message").css("color", "green").text("Login successful!");
        window.location.href = "main.html"
      } else {
        $("#message").css("color", "red").text("Invalid username or password");
      }
    }, 500); 
  });
});

