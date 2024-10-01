const button = document.getElementById("qwerty");
const sound = document.getElementById("squek");
const cooldownTime = 3000;

button.addEventListener("click", () => {
  if (button.disabled) return;
  sound.play();
  button.disabled = true;
  
  setTimeout(() => {
    button.disabled = false;
  }, cooldownTime);
});

document.getElementById("home").addEventListener("click", function() {
  window.location.href="index.html";
});