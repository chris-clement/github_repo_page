
/**
 * @jest-environment jsdom
 */

const appView = require("../appView");
const fs = require('fs')

describe("class appView", () => {
  it('displayRepo returns correct data', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new appView()
    let repoEl = document.querySelector("#repo-choice")
    repoEl.value = 'sinatra/sinatra'
    const buttonEl = document.querySelector("#search-repo-button")
    buttonEl.click()

    expect(document.querySelectorAll("div.repo")[0].innerText).toEqual('sinatra/sinatra');
  });
});