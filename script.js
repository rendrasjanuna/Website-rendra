document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");
  
  if (username === "admin" && password === "1234") {
    message.style.color = "lightgreen";
    message.textContent = "login berhasil! Selamat datang ";
    setTimeout(() => {
      window.location.href = "satu.html";
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "username atau password salah!";
  }
});