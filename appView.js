class appView {
  constructor() {
    const repoEl = document.querySelector('#repo-choice');
    const buttonEl = document.querySelector('#validate-button');
    buttonEl.addEventListener("click", () => {
      console.log("You clicked validate");
    });

  }
}
module.exports = appView;