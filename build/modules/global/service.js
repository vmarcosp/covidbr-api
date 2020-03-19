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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spider_1 = require("~/common/spider");
const spider_2 = __importDefault(require("./spider"));
const database_1 = require("~/config/database");
exports.findAndStoreData = () => __awaiter(void 0, void 0, void 0, function* () {
    const { document } = yield spider_1.fromURL(spider_1.WORLD_METER_URL);
    const globalData = spider_2.default.getData(document);
    database_1.GlobalCollection.clear();
    database_1.GlobalCollection.insert(globalData);
});
//# sourceMappingURL=service.js.map