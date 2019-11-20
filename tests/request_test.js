const request = require("request");
const { expect } = require('chai');
describe("request", () => {
  describe("#get", () => {
    it("requests some data", ( done ) => {
      request.get("http://www.google.com", ( error, response, body ) => {
        expect(body).to.contain("information, including webpages,")
        console.log("something");

        done()
      });
    });
  });
});


describe("setTimeout", () => {
  it("waits an amount of time and then calls the passed in function", ( done ) => {
    let numberOfTimesCalled = 0;
    let otherFunctionCalledCount = 0;

    let funVariable = 0;

    function someFunction() {
      numberOfTimesCalled += 1;
      console.log('hello three')
    }

    function someOtherFunction() {

    }

    // someFunction();
    // expect(numberOfTimesCalled).to.be.eq(1);
    //
    // someFunction();
    // expect(numberOfTimesCalled).to.be.eq(2);


    setTimeout(someFunction, 100);
    console.log('hello one')

    setTimeout(() => {
      expect(numberOfTimesCalled).to.be.eq(1);
      console.log('hello four');
      done()
    }, 1000);

    console.log('hello two')
  });

  it("does not run at the same time as other code", ( done ) => {
    let callOrder = [];
    setTimeout(() => {
      console.log('hello three');
      callOrder.push('three');
      expect(callOrder).to.deep.eq(['one', 'two', 'three']);
      done();
    }, 1000);

    console.log('hello one');
    callOrder.push('one');

    let i = 0;
    // "blocking", it doesn't let other code run
    while (i < 10000000) {
      i = i + 1;
    }
    console.log('hello two');
    callOrder.push('two');
  });
});
