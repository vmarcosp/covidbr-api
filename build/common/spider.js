"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const { curry, prop } = require('ramda');
exports.WORLD_METER_URL = 'https://www.worldometers.info/coronavirus/';
exports.fromURL = (URL) => __awaiter(void 0, void 0, void 0, function* () {
    const { window } = yield jsdom_1.JSDOM.fromURL(URL);
    const { document } = window;
    return { document, window };
});
exports.fromContent = (content) => {
    const { window } = new jsdom_1.JSDOM(content);
    const { document } = window;
    return { window, document };
};
exports.querySelectorAll = curry((selector, $parent) => $parent.querySelectorAll(selector));
exports.querySelector = curry((selector, $parent) => $parent.querySelector(selector));
exports.text = prop('textContent');
exports.href = prop('href');
exports.innerHTML = prop('innerHTML');
exports.innerText = prop('innerText');
exports.default = { fromURL: exports.fromURL, fromContent: exports.fromContent };
//# sourceMappingURL=spider.js.map