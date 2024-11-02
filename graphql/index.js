const { readFileSync } = require("fs");
const path = require("path");
const mockInterviewResolver = require('./resolvers/mockInterviewResolvers')

const mockInterviewTypes = readFileSync(path.join(__dirname, './typeDefs/mockInterview.graphql'), {
    encoding: 'utf-8',
});

const typeDefs = `
    ${mockInterviewTypes}
`;

const resolvers = {
    Query: {
        ...mockInterviewResolver.Query,
    },
    Mutation: {
        ...mockInterviewResolver.Mutation,
    },
};

module.exports = { typeDefs, resolvers };