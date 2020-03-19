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
require("reflect-metadata");
require("./config-aliases");
const graphql_yoga_1 = require("graphql-yoga");
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./modules/countries/resolvers");
const resolvers_2 = require("./modules/global/resolvers");
const cronjob_1 = __importDefault(require("./modules/global/cronjob"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield cronjob_1.default.start();
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [resolvers_1.CountryResolver, resolvers_2.GlobalResolver],
            emitSchemaFile: true
        });
        const server = new graphql_yoga_1.GraphQLServer({ schema, });
        server.start(() => console.log('Server is running'));
    });
}
run();
//# sourceMappingURL=index.js.map