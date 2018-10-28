"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProvidingDestination = require("models/providingDestination");
/**
 * Make any changes you need to make to the database here
 */
async function up() {
    // Write migration here
    var destinations = [
        {
            name: 'サーバー',
            rate: 1000
        },
        {
            name: 'ストレージ',
            rate: 1200
        },
        {
            name: 'AI',
            rate: 1600
        },
        {
            name: '演算',
            rate: 700
        }
    ];
    var providingDestination = new ProvidingDestination();
    destinations.forEach(element => {
        ProvidingDestination.default.name = element.name;
        ProvidingDestination.default.rate = element.rate;
        providingDestination.save();
    });
}
exports.up = up;
/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
    // Write migration here
}
exports.down = down;
//# sourceMappingURL=1540760038975-add_providing_destination.js.map