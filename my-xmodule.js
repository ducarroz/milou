/**
 * @module my-xmodule
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class MyXmodule
 * @extends Montage
 */
exports.MyXmodule = Montage.specialize(/** @lends MyXmodule# */ {
    constructor: {
        value: function MyXmodule() {
            this.super();
        }
    }
});
