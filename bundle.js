(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // appView.js
  var require_appView = __commonJS({
    "appView.js"(exports, module) {
      var appView2 = class {
        constructor() {
          const buttonEl = document.querySelector("#validate-button");
          buttonEl.addEventListener("click", () => {
            const repoEl = document.querySelector("#repo-choice").value;
            console.log("You clicked validate");
            console.log(repoEl);
            fetch(`https://api.github.com/repos/${repoEl}`).then((response) => response.json()).then((data) => this.displayRepo(data));
          });
        }
        displayRepo(data) {
          console.log(data);
        }
      };
      module.exports = appView2;
    }
  });

  // index.js
  console.log("Welcome to the page");
  var appView = require_appView();
  var view = new appView();
  console.log("You made it to here");
})();
