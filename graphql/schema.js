const { typeDefs } = require("./typedefs");
const { resolvers } = require("./resolvers");

const schema = {
    typeDefs, resolvers
}
module.exports = { schema }