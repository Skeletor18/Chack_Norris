const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
const respons = fetch("https://api.chucknorris.io/jokes/random");
respons
  .then((a) => {return a.json()})
  .then((json) => text.textContent = json.value);
});
