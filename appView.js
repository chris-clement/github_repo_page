class appView {
  constructor() {
    const buttonEl = document.querySelector('#validate-button');
    buttonEl.addEventListener("click", () => {
      const repoEl = document.querySelector('#repo-choice').value;
      console.log("You clicked validate");
      console.log(repoEl)
      fetch(`https://api.github.com/repos/${repoEl}`)
      .then(response => response.json())
      .then(data => this.displayRepo(data))
      });
    };
   

    displayRepo(data) {
      console.log(data)
    }

  };
module.exports = appView;