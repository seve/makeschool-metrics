"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Repo",
    embedded: false
  },
  {
    name: "Commit",
    embedded: false
  },
  {
    name: "PullRequest",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/severiano-badajoz-5a7bca/makeschool-metrics/dev`
});
exports.prisma = new exports.Prisma();
