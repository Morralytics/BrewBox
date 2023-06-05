const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`Port running on ${PORT}`);
        console.log(`GraphQL can be viewed at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startApolloServer(typeDefs, resolvers);