class appView {
  constructor() {
    const buttonEl = document.querySelector('#validate-button');
    buttonEl.addEventListener("click", () => {
      const repoEl = document.querySelector('#repo-choice').value;
      fetch(`https://api.github.com/repos/${repoEl}`)
      .then(response => response.json())
      .then(data => this.displayRepo(data))
      });
    };
   

    displayRepo(data) {
      console.log(data)
      document.querySelector('#repo-name').innerText = `Repo name: ${data.full_name}`
      document.querySelector('#repo-link').innerText = `Repo link:`
      document.querySelector('#repo-link').innerHTML = data.html_url
      document.querySelector('#repo-stargazers').innerText = `Stargazers: ${data.stargazers_count}`
      document.querySelector('#repo-forks').innerText = `Fork count: ${data.forks_count}`
      document.querySelector('#repo-language').innerText = `Language: ${data.language}`
      document.querySelector('#repo-image').src = data.organization.avatar_url

    }

  };
module.exports = appView;