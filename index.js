const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { schema } = require("./graphql/schema");
async function startApolloServer() {
    const server = new ApolloServer(schema);
    await server.start();
    const app = express();
    server.applyMiddleware({ app });

    await new Promise(resolve => app.listen({ port: 8000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`);
    return { server, app };
} startApolloServer();