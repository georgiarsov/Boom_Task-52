import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    const body = document.body;

    body.addEventListener('click', function() {
      for (let i = 0; i < 5; i++) {
        const message = document.createElement('article');
        message.classList.add('message');
        message.innerText = 'Sample message ' + (i + 1);
        body.appendChild(message);
      }
    });
    

    
    alert("💣");
  });
});
