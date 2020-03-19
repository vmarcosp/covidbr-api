"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spider_1 = require("~/common/spider");
const selectors_1 = require("./selectors");
const R = require('ramda');
const floatOfString = R.pipe(R.replace(',', '.'), parseFloat);
const formatCounter = R.pipe(spider_1.text, R.trim, floatOfString);
const getGlobalCounters = spider_1.querySelectorAll(selectors_1.GLOBAL_COUNTERS);
const getCounters = spider_1.querySelectorAll(selectors_1.COUNTERS);
exports.getData = (document) => {
    const [cases, deaths, recovered] = getGlobalCounters(document);
    const [activeCases, closedCases] = getCounters(document);
    return {
        totalCases: formatCounter(cases),
        totalDeaths: formatCounter(deaths),
        totalRecovered: formatCounter(recovered),
        activeCases: formatCounter(activeCases),
        closedCases: formatCounter(closedCases)
    };
};
exports.default = { getData: exports.getData };
//# sourceMappingURL=index.js.map