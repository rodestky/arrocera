const container = document.getElementById("containerSelect");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

if (registerBtn && loginBtn) {
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
}
