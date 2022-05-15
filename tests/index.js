let assert = require('assert');
let ConsoleSubscriber = require('../index.js');

describe('Console subscriber', function () {
    describe('#callback binding', function () {
        it('should call all callback functions', function () {

            let str1 = "";
            let str2 = "";
            let fn1 = (category, args) => { str1 += "f1:" + args[0] + " "; }
            let fn2 = (category, args) => { str2 += "f2:" + args[0] + " "; }

            ConsoleSubscriber.bind(fn1);
            ConsoleSubscriber.bind(fn2);
            ConsoleSubscriber.bind(fn1);

            console.log("log1");
            console.log("log2");

            assert.strictEqual(str1, "f1:log1 f1:log1 f1:log2 f1:log2 ");
            assert.strictEqual(str2, "f2:log1 f2:log2 ");

            ConsoleSubscriber.unbind(fn1);

            console.log("log3");

            assert.strictEqual(str1, "f1:log1 f1:log1 f1:log2 f1:log2 ");
            assert.strictEqual(str2, "f2:log1 f2:log2 f2:log3 ");
        });
    });
});