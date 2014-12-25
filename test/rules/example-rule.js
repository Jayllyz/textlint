// LICENSE : MIT
"use strict";
/**
 *
 * @param {RuleContext} context
 */
module.exports = function (context) {
    var exports = {};
    exports[context.Syntax.Str] = function (node) {
        context.report(node, "found error messag");
    };
    exports[context.Syntax.List] = function (node) {
        if(/\[\s*?\]\s/i.test(node.raw)){
            context.report(node, "found Todo: " + node.list_data.bullet_char + node.raw);
        }
    };
    return exports;
};