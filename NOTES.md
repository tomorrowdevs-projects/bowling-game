# Notes
## Different kinds of tests
- Fully isolated (e.g. testing one function) --> Unit Tests
- With dependencies (e.g. testing a function that calls a function) --> Integration Tests
- Full flow (e.g. validating a the DOM after a click) --> End-to-End (E2E) Tests

The complexity is increase, and the frequency is decrease. 
For unit tests you write thousand of these, for integration tests you write a good couple of these, and for e2e test you write a few of these. 

## Testing setup
- Test runner (unit + integration) --> execute your tests, summarize results (e.g. Mocha) 
- Assertion library (unit + integration) --> define testing logic, conditions (e.g. Chai)  (test runner + assertion library e.g. Jest)
- Headless browser (e2e) --> simulates browser interaction (e.g. Puppeteer)

(intro) https://www.youtube.com/watch?v=FgnxcUQ5vho
(good) https://www.youtube.com/watch?v=r9HdJ8P6GQI

# Jest
## For install Jest
npm i --save-dev jest   

## For run all the test
npm test

## Functions
test() 
expect()
toBe()

## example 
### file sum.js
exports.sum = (a, b) => {
    return a + b;
};

### file sum.test.js
const { sum } = require('./sum' )

test('properly adds two numbers', () => {
    expect(
        sum(1,2)
    ).toBe(3);
})

## Usefull link
- test a class https://dev.to/dstrekelj/how-to-test-classes-with-jest-jif
- resolve import/export error: 
    - add babel-jest 
    - add on package.json this
        "jest": {
            "transform": {
            "^.+\\.(ts|html)$": "/node_modules/jest-preset-angular/preprocessor.js",
            "^.+\\.js$": "babel-jest"
            }
        }