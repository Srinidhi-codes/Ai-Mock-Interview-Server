const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./graphql');

// Middlewares
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: process.env.CLIENT_URL || "https://ai-mock-interview-web-go3e.vercel.app/dashboard",  
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, 
};
app.use(cors(corsOptions));
app.use(express.json());
const server = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    app.use('/graphql', expressMiddleware(server));
}

app.listen(PORT, () => {
    console.log(`Server Ready At http://localhost:${PORT}`);
    console.log(`Graphql Ready At http://localhost:${PORT}/graphql`);
});


server();
