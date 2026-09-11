const loginUsername = document.querySelector("#loginUsername");
const loginPassword = document.querySelector("#loginPassword");
const loginButton = document.querySelector("#loginButton");

loginButton.addEventListener("click", () => {
  console.log(loginUsername.value);
  console.log(loginPassword.value);
});
