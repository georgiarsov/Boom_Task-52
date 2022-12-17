import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    // create a container element
const container = document.createElement("div");

// create the five article elements
for (let i = 0; i < 5; i++) {
  const article = document.createElement("article");
  article.classList.add("message");
  container.appendChild(article);
}

// append the container element to the body
document.body.appendChild(container);



    alert("💣");
  });
});
