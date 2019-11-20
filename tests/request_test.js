const request = require("request");
const {expect} = require('chai');
describe("request", () => {
    let queryFile;

    it("requests some data", (done) => {
        request.get("http://www.google.com", (error, response, body) => {
            expect(body).to.contain("information, including webpages,")
            console.log("something")

            done()

        })
    })
})


