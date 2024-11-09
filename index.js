const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./graphql');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

let server; // Declare server in outer scope

// Initialize Apollo Server
const startServer = async () => {
    server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();

    // Apply middleware with specific CORS options for /graphql route
    app.use(
        '/graphql',
        cors({
            origin: ['https://www.your-app.example', 'https://studio.apollographql.com'],
            credentials: true
        }),
        express.json(),
        expressMiddleware(server)
    );
};

// Start the Express server and initialize Apollo Server
app.listen(PORT, () => {
    console.log(`Server Ready At http://localhost:${PORT}`);
    console.log(`GraphQL Ready At http://localhost:${PORT}/graphql`);
});

startServer();
