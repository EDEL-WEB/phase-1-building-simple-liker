const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('main.js', () => {
  let document;

  beforeEach((done) => {
    JSDOM.fromFile('index.html')
      .then((dom) => {
        document = dom.window.document;
        done();
      })
      .catch(done);
  });

  it('contains a hidden modal', () => {
    const errorModal = document.getElementById('modal');
    expect(errorModal).to.not.equal(null);
    expect(errorModal.classList.contains('hidden')).to.be.true;
  });
});