// LICENSE : MIT
"use strict";
var fs = require("fs");
var assert = require("power-assert");
var textLint = require("../lib/textlint");
var loadRules = require("../lib/load-rules");
var rules = loadRules(__dirname + "/rules");
describe("textlint-test", function () {
    beforeEach(function () {
        textLint.setupRules(rules);
    });
    afterEach(function () {
        textLint.resetRules();
    });
    describe("lintMarkdown", function () {
        it("no-todo", function () {
            var result = textLint.lintMarkdown("- [ ] some");
            assert(result.filePath === "<text>");
            assert(result.messages.length > 0);
        });
        it("should return", function () {
            var result = textLint.lintMarkdown("# TEST" +
            "\n" +
            "`potet` + **testongst**" +
            "\n" +
            "- list\n" +
            "- test\n" +
            "\n" +
            "hoge\n [a](http://example.com) fuga\n" +
            "------");
            assert(result.filePath === "<text>");
            assert(result.messages.length > 0);
        });
    });
    describe("lintFile", function () {
        it("spec name", function () {
            var filePath = __dirname + "/fixtures/test.md";
            var result = textLint.lintFile(filePath);
            assert(result.filePath === filePath);
            console.log(result.messages);
        });
    });
});