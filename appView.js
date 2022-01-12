class appView {
  constructor() {
    const repoEl = document.querySelector('#repo-choice');
    const buttonEl = document.querySelector('#validate-button');
    buttonEl.addEventListener("click", () => {
      console.log("You clicked validate");
      this.validateRepo(repoEl.value);
      });
    };
    validateRepo(repo) {
      fetch(`https://api.github.com/repos/${repo}`)
      .then(console.log(`You chose ${repo}`))
    };

  };
module.exports = appView;