"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lokijs_1 = __importDefault(require("lokijs"));
exports.db = new lokijs_1.default('cache.json');
exports.GlobalCollection = exports.db.addCollection('global');
exports.CountryCollection = exports.db.addCollection('countries');
//# sourceMappingURL=database.js.map