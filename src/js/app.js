import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  document.body.addEventListener("click", () => {
    const length = 5;
    let count = 0;
    for(let i = 0; i < length; i++) {
      let element = document.createElement('article');

      count += length;
      element.setAttribute('id', 'article' + count);
      document.body.appendChild(element);
      let text = 'sampleText';
      document.getElementById('article' + count).innerHTML = text;
      document.getElementById('article' + count).classList.add('message');
    }

    });
});